import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MainLayout from "../components/MainLayout";
import AuthLayout from "../components/AuthLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Routes with MainLayout (Navbar and Footer) */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/cart" element={<MainLayout><CartPage /></MainLayout>} />
      <Route path="/products" element={<MainLayout><ProductsPage /></MainLayout>} />
      <Route path="/product/:id" element={<MainLayout><ProductDetailPage /></MainLayout>} />
      
      {/* Auth routes without Navbar and Footer */}
      <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path="/signup" element={<AuthLayout><SignupPage /></AuthLayout>} />
    </Routes>
  );
}
