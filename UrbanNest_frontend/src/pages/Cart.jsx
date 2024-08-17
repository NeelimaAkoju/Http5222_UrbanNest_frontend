import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch cart items from an API or local storage
    const mockCartItems = [
      { id: 1, title: 'Product 1', price: 19.99, quantity: 2 },
      { id: 2, title: 'Product 2', price: 29.99, quantity: 1 },
    ];
    setCartItems(mockCartItems);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="mb-8">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b py-4">
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
                <button className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-xl">${calculateTotal()}</span>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;