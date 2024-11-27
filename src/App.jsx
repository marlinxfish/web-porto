import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Programs from "./components/Programs";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <Programs />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
