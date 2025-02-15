import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import chatData from ".././Komponen/chatData.json"; // Import data dummy

export default function Chat() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setChats(chatData); // Simpan data dummy ke state
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📩 Customer Chat</h2>
      <ul className="space-y-3">
        {chats.map((chat) => (
          <li key={chat.id} className="border p-3 rounded shadow-md bg-white">
            <Link to={`/chat/${chat.id}`} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{chat.name}</p>
                <p className="text-sm text-gray-500">{chat.message}</p>
              </div>
              <span className="text-xs text-gray-400">{chat.time}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
