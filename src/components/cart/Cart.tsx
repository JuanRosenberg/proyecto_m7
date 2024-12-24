import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    </div>
  );
};

export default Cart;