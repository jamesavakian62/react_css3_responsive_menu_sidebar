import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";
import Home from "../src/Components/Home";
import About from "../src/Components/About";
import Contact from "../src/Components/Contact";
import Services from "../src/Components/Services";
import { Routes } from "react-router-dom";
import Footer from "../src/Components/Footer";
import Software from "./Components/Software";
import Aboutme from "./Components/Aboutme";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/services" element={<Services />} />

        <Route exact path="/software" element={<Software />} />

        <Route exact path="/aboutme" element={<Aboutme />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
