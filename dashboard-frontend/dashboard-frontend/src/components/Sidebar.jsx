import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-white w-64 h-screen p-4">
      <ul className="space-y-4">
        {/* Example links */}
        <li>
          <a href="/" className="block py-2 px-4 rounded hover:bg-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="block py-2 px-4 rounded hover:bg-gray-700">
            Products
          </a>
        </li>
        <li>
          <a href="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">
            Settings
          </a>
        </li>
        <li>
          <a href="/about" className="block py-2 px-4 rounded hover:bg-gray-700">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
