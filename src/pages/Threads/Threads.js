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
import trash from "../../assets/images/icons/bin.png";
import star from "../../assets/images/icons/star.png";
import comment from "../../assets/images/icons/reply-message.png";

export default function Threads() {
  const [threads, setThreads] = useState([]);
  const [threadComments, setThreadComments] = useState([]);
  const [openedComments, setOpenedComments] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    document.title = "The BOX | Threads";

    const getThreads = async () => {
      const result = await getThreadsById();
      console.log(result);
      setThreads(result.data);
    };
    getThreads()
      .then(setIsLoading(false))
      .catch((err) => {
        console.error(err);
        navigate("/");
      });
  }, []);

  const handleThreadInput = async (event) => {
    if (event.target.value) {
      if (event.key === "Enter" || event.keyCode === 13) {
        const inputContent = event.target.value;
        const createdThread = await createThread(inputContent);

        setThreads((prevThreads) => [createdThread, ...prevThreads]);
        event.target.value = "";
      }
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
    if (event.target.value) {
      if (event.key === "Enter" || event.keyCode === 13) {
        const inputContent = event.target.value;

        const createdComment = await createCommentbyId(thread_id, inputContent);

        // Create a new comment object
        const newComment = {
          content: inputContent,
          user_name: user_name,
        };

        // Find the thread index
        const threadIndex = threads.findIndex(
          (thread) => thread.thread_id === thread_id
        );

        // Clone the threads array and modify the specific thread's comments
        const updatedThreads = [...threads];
        updatedThreads[threadIndex].comments = [
          newComment,
          ...updatedThreads[threadIndex].comments,
        ];

        // Update the state with the modified threads array
        setThreads(updatedThreads);

        event.target.value = "";
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
          <div className="threads-wrapper" key={thread.id}>
            <div className="threads-wrapper__header">
              <h4 className="threads-wrapper__username">{thread.user_name}</h4>
              <span className="threads-wrapper__timestamp">
                {timeAgoConverter(thread.created_at)}
              </span>
            </div>
            <p className="threads-wrapper__content">{thread.thread_content}</p>
            <div className="threads-wrapper__actions">
              <img
                className="threads-wrapper__actions-icon"
                src={like}
                alt=""
                onClick={() => handleLike(thread.thread_id)}
              />
              {thread.likes_count}
              <img
                className="threads-wrapper__actions-icon"
                src={comment}
                alt=""
                onClick={() => toggleCommentSection(thread.thread_id)}
              />
              {thread.comments
                ? thread.comments.filter((comment) => comment.content !== null)
                    .length
                : 0}
              <img
                className="threads-wrapper__actions-icon"
                src={trash}
                alt=""
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
                            <span className="threads-wrapper__comments-user">
                              {comment.user_name}:&nbsp;
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
