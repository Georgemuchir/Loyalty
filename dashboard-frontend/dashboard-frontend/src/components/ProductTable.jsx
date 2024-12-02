import React from "react";

const ProductTable = () => {
  const products = [
    { name: "Gabriela Cashmere Blazer", price: "$113.99", views: "14,012", status: "Active" },
    { name: "Loewe Blend Jacket - Blue", price: "$113.99", views: "13,212", status: "Active" },
    { name: "Sandro - Jacket - Black", price: "$113.99", views: "8,201", status: "Active" },
    // Add more sample products here...
  ];

  return (
    <div className="bg-white shadow-md rounded p-4">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Product Name</th>
            <th className="border-b p-2">Price</th>
            <th className="border-b p-2">Views</th>
            <th className="border-b p-2">Status</th>
            <th className="border-b p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border-b p-2">{product.name}</td>
              <td className="border-b p-2">{product.price}</td>
              <td className="border-b p-2">{product.views}</td>
              <td className="border-b p-2">{product.status}</td>
              <td className="border-b p-2">
                <button className="bg-purple-500 text-white p-1 rounded">Edit</button>
                <button className="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
