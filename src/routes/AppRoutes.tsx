import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../components/home/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import PrivateRoute from './PrivateRoute';
import Profile from '../components/profile/Profile';
import Cart from '../components/cart/Cart';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="cart" element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;