import React from "react";
import { FaHome, FaFolder, FaCalendar, FaFileAlt, FaPlus, FaClipboard } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-blue-800 text-white shadow-lg">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-blue-700">
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40" 
            alt="Jur Logo"
            className="h-10 w-10"
          />
          <h1 className="text-2xl font-extrabold tracking-wide">Jur</h1>
        </div>
      </div>

      {/* Sidebar Menu */}
      <ul className="mt-6 space-y-4 px-4">
        {[
          { name: "Dashboard", href: "#", icon: <FaHome /> },
          { name: "My Cases", href: "#", icon: <FaFolder /> },
          { name: "Activities", href: "#", icon: <FaClipboard /> },
          { name: "Calendar", href: "#", icon: <FaCalendar /> },
          { name: "Files", href: "#", icon: <FaFileAlt /> },
          { name: "Open a Dispute", href: "#", icon: <FaPlus /> },
        ].map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="flex items-center text-white text-lg font-medium tracking-wide hover:text-blue-300 transition"
            >
              <span className="mr-3">{item.icon}</span> {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;