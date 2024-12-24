import React from 'react';
import ProductGrid from './ProductGrid';
import { products } from './productData';

const Home = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Delicious Pizzas</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default Home;