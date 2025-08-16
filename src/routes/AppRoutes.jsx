import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import other pages as needed

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes here, e.g. <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
  );
}
