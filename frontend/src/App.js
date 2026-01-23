import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import Features from "./components/Features";
import TechnologySection from "./components/TechnologySection";
import Testimonials from "./components/Testimonials";
import AboutSection from "./components/AboutSection";
import AgenciesSection from "./components/AgenciesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSection />
      <Features />
      <TechnologySection />
      <Testimonials />
      <AboutSection />
      <AgenciesSection />
      <Footer />
    </div>
  );
}

export default App;
