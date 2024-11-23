import React from 'react';

const Catalog = ({ products, category }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{category} Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products
          .filter(product => product.category === category)
          .map((product, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">${product.price}</p>
              <button className="btn mt-4">Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Catalog;
