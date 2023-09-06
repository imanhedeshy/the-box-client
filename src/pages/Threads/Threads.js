import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createThread,
  getThreadsById,
  likeThreadById,
  deleteThreadById,
  createCommentbyId,
} from "../../utils/apiCalls";

import timeAgoConverter from "../../utils/timeAgoConverter";

import "./Threads.scss";

import IsLoading from "../../components/IsLoading/IsLoading";
import heart from "../../assets/images/icons/heart (1).png";
import like from "../../assets/images/icons/like.png";
import liked from "../../assets/images/icons/like (1).png";
import trash from "../../assets/images/icons/bin.png";
import star from "../../assets/images/icons/star.png";
import comment from "../../assets/images/icons/reply-message.png";

import Iman from "../../assets/images/images/Iman.png";
import Bruce from "../../assets/images/images/Bruce.png";
import Jack from "../../assets/images/images/Jack.png";
import James from "../../assets/images/images/James.png";
import Jane from "../../assets/images/images/Jane.png";
import Jenny from "../../assets/images/images/Jenny.png";
import John from "../../assets/images/images/John.png";
import Sahar from "../../assets/images/images/Sahar.png";
import yas from "../../assets/images/images/yas.png";

export default function Threads() {
  const [threads, setThreads] = useState([]);
  const [you, setYou] = useState(null);
  const [openedComments, setOpenedComments] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [iconSrc, setIconSrc] = useState({
    like: false,
    comment: false,
    delete: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    document.title = "The BOX | Threads";

    const getThreads = async () => {
      const result = await getThreadsById();
      setThreads(result.data.threads);
      setYou(result.data.you);
    };
    getThreads()
      .then(setIsLoading(false))
      .catch((err) => {
        console.error(err);
        navigate("/");
      });
  }, []);

  const handleThreadInput = async (event) => {
    if (!event.target.value) return;
    if (event.key === "Enter" || event.keyCode === 13) {
      const inputContent = event.target.value;
      const createdThread = await createThread(inputContent);
      setThreads((prevThreads) => [createdThread, ...prevThreads]);
      event.target.value = "";
    }
  };

  const handleLike = async (thread_id) => {
    await likeThreadById(thread_id);

    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.thread_id === thread_id
          ? { ...thread, likes_count: thread.likes_count + 1 }
          : thread
      )
    );

    setIconSrc((prevIconSrc) => ({ ...prevIconSrc, like: !prevIconSrc.like }));
  };

  const handleDelete = async (thread_id) => {
    try {
      await deleteThreadById(thread_id);

      setThreads((prevThreads) =>
        prevThreads.filter((thread) => thread.thread_id !== thread_id)
      );
    } catch (error) {
      console.error("Error deleting thread:", error);
    }
  };

  const toggleCommentSection = (thread_id) => {
    setOpenedComments((prevOpenedComments) => ({
      ...prevOpenedComments,
      [thread_id]: !prevOpenedComments[thread_id],
    }));
  };

  const handleCommentInput = async (event, thread_id, user_name) => {
    if (!event.target.value) return;
    if (event.key === "Enter" || event.keyCode === 13) {
      const inputContent = event.target.value;

      try {
        const result = await createCommentbyId(thread_id, inputContent);
        const newComment = {
          content: inputContent,
          user_name: result.user_name,
        };

        setThreads((prevThreads) => {
          return prevThreads.map((thread) => {
            if (thread.thread_id === thread_id) {
              return {
                ...thread,
                comments: [
                  newComment,
                  ...(thread.comments ? thread.comments : []),
                ],
              };
            }
            return thread;
          });
        });

        event.target.value = "";
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  if (isLoading) return <IsLoading />;

  return (
    <div className="threads">
      <h2 className="threads__title">Threads</h2>
      <input
        className="threads__input"
        type="text"
        name="post"
        id="post"
        placeholder="What's happening?"
        onKeyDown={handleThreadInput}
      />
      {threads.map((thread) => {
        const isCommentOpen = openedComments[thread.thread_id];

        return (
          <div className="threads-wrapper" key={thread.thread_id}>
            <div className="threads-wrapper__header">
              <img
                className="threads-wrapper__pic"
                src={`/assets/images/images/${thread.user_name}.png`}
                alt="user"
              />

              <h4 className="threads-wrapper__username">{thread.user_name}</h4>
              <span className="threads-wrapper__timestamp">
                {timeAgoConverter(thread.created_at)}
              </span>
            </div>
            <p className="threads-wrapper__content">{thread.thread_content}</p>
            <div className="threads-wrapper__actions">
              <img
                className="threads-wrapper__actions-icon"
                // src={iconSrc.like ? liked : like}
                src={like}
                alt=""
                id="like-icon"
                onClick={() => handleLike(thread.thread_id)}
              />
              {thread.likes_count}
              <img
                className="threads-wrapper__actions-icon"
                src={comment}
                alt=""
                id="comments-icon"
                onClick={() => toggleCommentSection(thread.thread_id)}
              />
              {thread.comments
                ? thread.comments.filter((comment) => comment.content !== null)
                    .length
                : 0}

              <img
                className={`threads-wrapper__actions-icon ${
                  thread.user_username === you
                    ? "threads-wrapper__actions-icon--delete"
                    : "threads-wrapper__actions-icon--delete--hide"
                }`}
                src={trash}
                alt=""
                id="delete-icon"
                onClick={() => handleDelete(thread.thread_id)}
              />
            </div>
            {isCommentOpen && (
              <div className="threads-wrapper__comments">
                <input
                  className="threads-wrapper__comments-input"
                  type="text"
                  placeholder="Comment..."
                  onKeyDown={(e) =>
                    handleCommentInput(e, thread.thread_id, thread.user_name)
                  }
                />
                <div className="threads-wrapper__comments-list">
                  {thread.comments &&
                    thread.comments.map(
                      (comment) =>
                        comment.content && (
                          <div
                            key={comment.id}
                            className="threads-wrapper__comments-item"
                          >
                            <img
                              className="threads-wrapper__comments-pic"
                              src={`/assets/images/images/${
                                comment.user_name.split(" ")[0]
                              }.png`}
                              alt="user"
                            />
                            <span className="threads-wrapper__comments-user">
                              {comment.user_name.split(" ")[0]}:&nbsp;
                            </span>
                            <p className="threads-wrapper__comments-content">
                              {comment.content}
                            </p>
                          </div>
                        )
                    )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
