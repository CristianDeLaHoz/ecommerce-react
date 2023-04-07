import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Collar para perro", price: 10 },
    { id: 2, name: "Juguete para gato", price: 5 },
    { id: 3, name: "Comida para perro", price: 20 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pet Shop</h1>
      </header>
      <main>
        <h2>Productos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
