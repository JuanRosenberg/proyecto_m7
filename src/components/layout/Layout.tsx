import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Alert from './Alert';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Alert />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;