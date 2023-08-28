import { useEffect, useState } from "react";
import { getThreadsById } from "../../utils/apiCalls";
import timeAgoConverter from "../../utils/timeAgoConverter";

import "./Threads.scss";

import IsLoading from "../../components/IsLoading/IsLoading";
import heart from "../../assets/images/icons/heart (1).png";
import like from "../../assets/images/icons/like.png";
import dislike from "../../assets/images/icons/dislike.png";
import star from "../../assets/images/icons/star.png";
import reply from "../../assets/images/icons/reply-message.png";

export default function Threads() {
  const [threads, setThreads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getThreads = async () => {
      const result = await getThreadsById();
      setThreads(result.data);
    };
    getThreads().then(setIsLoading(false));
  }, []);

  console.log(threads);

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
              />
              {Math.round(130 * Math.random())}
              <img
                className="threads-wrapper__actions-icon"
                src={dislike}
                alt=""
              />
              {Math.round(130 * Math.random())}
              <img
                className="threads-wrapper__actions-icon"
                src={reply}
                alt=""
              />
              {Math.round(130 * Math.random())}
            </div>
          </div>
        );
      })}
    </div>
  );
}
