import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded p-2 w-1/3"
      />
      <div className="flex gap-4">
        <button className="bg-gray-200 p-2 rounded">Filter</button>
        <button className="bg-purple-500 text-white p-2 rounded">+ Add Product</button>
      </div>
    </div>
  );
};

export default Header;
