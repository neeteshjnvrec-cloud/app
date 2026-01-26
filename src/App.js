import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
