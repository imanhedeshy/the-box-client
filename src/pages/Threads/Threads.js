import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createThread, getThreadsById } from "../../utils/apiCalls";
import timeAgoConverter from "../../utils/timeAgoConverter";

import "./Threads.scss";

import IsLoading from "../../components/IsLoading/IsLoading";
import heart from "../../assets/images/icons/heart (1).png";
import like from "../../assets/images/icons/like.png";
import trash from "../../assets/images/icons/bin.png";
import star from "../../assets/images/icons/star.png";
import reply from "../../assets/images/icons/reply-message.png";

export default function Threads() {
  const [threads, setThreads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    document.title = "The BOX | Threads";

    const getThreads = async () => {
      const result = await getThreadsById();
      console.log(result);
      setThreads(result.data);
      // const sortedThreads = result.data.sort(
      //   (b, a) => Date.parse(a.created_at) - Date.parse(b.created_at)
      // );
      // setThreads(sortedThreads);
    };
    getThreads()
      .then(setIsLoading(false))
      .catch((err) => {
        console.error(err);
        navigate("/");
      });
  }, []);

  const handleKeyDown = async (event) => {
    if (event.target.value) {
      if (event.key === "Enter" || event.keyCode === 13) {
        const inputContent = event.target.value;
        const createdThread = await createThread(inputContent);
        console.log(createdThread);

        setThreads((prevThreads) => [createdThread, ...prevThreads]);
        event.target.value = "";
      }
    }
  };

  const handleLike = async (event) => {
  }

  const handleDelete = async (event) => {
  }

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
        onKeyDown={handleKeyDown}
      />
      {threads.map((thread) => {
        return (
          <div className="threads-wrapper">
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
                onClick={handleLike}
              />
              {thread.likes_count}
              <img
                className="threads-wrapper__actions-icon"
                src={reply}
                alt=""
                // onClick={handleReply}
              />
              {Math.round(130 * Math.random())}
              <img
                className="threads-wrapper__actions-icon"
                src={trash}
                alt=""

                onClick={handleDelete}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
