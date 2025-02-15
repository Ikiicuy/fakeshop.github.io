import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import chatData from "../Komponen/chatData.json";

export default function ChatDetail() {
  const { id } = useParams();
  const chat = chatData.find((c) => c.id === parseInt(id));
  const [messages, setMessages] = useState([{ text: chat?.message || "", sender: "customer" }]);
  const [newMessage, setNewMessage] = useState("");

  if (!chat) {
    return <p className="text-center text-red-500 text-lg md:text-xl mt-10">Chat tidak ditemukan!</p>;
  }

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header Chat */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center p-3 md:p-4 z-10">
        <Link to="/chat" className="text-xl text-gray-700 mr-3">
          <FaArrowLeft />
        </Link>
        <h2 className="text-base md:text-lg font-semibold">{chat.name}</h2>
      </div>

      {/* Chat Content */}
      <div className="flex-grow mt-14 md:mt-16 p-3 md:p-4 overflow-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`chat ${msg.sender === "user" ? "chat-end" : "chat-start"}`}>
            <div className="chat-image avatar">
              <div className="w-8 md:w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header text-sm md:text-base">
              {msg.sender === "user" ? "You" : chat.name}
            </div>
            <div className="chat-bubble text-sm md:text-base lg:text-lg
            text-white">{msg.text}</div>
          </div>
        ))}
      </div>

      {/* Input Chat */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-2 md:p-3 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ketik pesan..."
          className="flex-grow input bg-white input-bordered border-gray-300 p-2 rounded-md text-sm md:text-base"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white p-2 md:p-3 rounded-md text-sm md:text-base"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
