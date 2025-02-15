import React from "react";
import { FaHome, FaComment, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation();

  const menuItems = [
    { path: "/", icon: <FaHome />, text: "Home" },
    { path: "/chat", icon: <FaComment />, text: "Chat" },
    { path: "/account", icon: <FaUser />, text: "Account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full shadow-md border-t overflow-hidden">
      {/* Animasi Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 "></div>

      <ul className="relative grid grid-cols-3">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex flex-col items-center text-[#ffc107] py-2 px-4 relative ${
                location.pathname === item.path
                  ? "bg-[#ffc107] text-white rounded-t-md transition-all"
                  : ""
              }`}
            >
              <span className="text-md md:text-[1.2vw] lg:text-[1.3vw]">{item.icon}</span>
              <span className="text-xs lg:mt-3 md:text-[1.3vw] lg:text-[1.4vw]">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
