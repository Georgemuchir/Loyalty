// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Catalog from './components/Catalog';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Men',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewProduct({ ...newProduct, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', description: '', price: '', category: 'Men', image: '' });
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="input"
        />
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          placeholder="Description"
          className="input"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
          className="input"
        />
        <select
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          className="input"
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
        <input
          type="file"
          onChange={handleFileChange}
          className="input"
        />
        <button type="submit" className="btn">Add Product</button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index} className="border-b pb-4 mb-4">
              <img src={product.image} alt={product.name} className="w-20 h-20 object-cover mb-2" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-gray-500">${product.price}</p>
              <p className="text-sm text-gray-600">Category: {product.category}</p>
              <button
                onClick={() => deleteProduct(index)}
                className="mt-2 text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Catalog display for testing */}
      <Catalog products={products} category="Men" />
    </div>
  );
};

export default App;
