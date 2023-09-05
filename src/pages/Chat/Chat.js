import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

import "./Chat.scss";

import userPic from "../../assets/images/images/profile_pic (4).png";

export default function Chat() {
  const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

  const storageUser = JSON.parse(localStorage.getItem("storageUser"));
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(storageUser.name);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  };

  useEffect(() => {
    const socket = io(SOCKET_URL);

    const onChatMessage = (data) => {
      setMessages((messages) => [
        ...messages,
        { username: data.username, message: data.message },
      ]);
      window.scrollTo(0, document.body.scrollHeight);
    };

    const onChatHistory = (data) => {
      setMessages(
        data.map((message) => ({
          username: message.name,
          message: message.message,
        }))
      );
      window.scrollTo(0, document.body.scrollHeight);
    };

    socket.on("chat message", onChatMessage);
    socket.on("chat history", onChatHistory);

    scrollToBottom();

    return () => {
      socket.off("chat message", onChatMessage);
      socket.off("chat history", onChatHistory);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      const socket = io(SOCKET_URL);

      socket.emit("chat message", { username, message: input });

      setInput("");
    }
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat">
      <h3 className="chat__title">ChatBOX</h3>
      <div ref={messagesEndRef} className="chat__list">
        {messages.map((message, index) => (
          <div className="chat__list__item" key={index}>
            <div className="chat__list__item__content">
              <img className="chat__list__item__pic" src={userPic} alt="user" />
              <div>
                <strong>{message.username}:</strong> {message.message}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form className="chat__form" onSubmit={handleSubmit}>
        <input
          className="chat__form__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type Here..."
          autoComplete="off"
        />
        <button className="chat__form__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
