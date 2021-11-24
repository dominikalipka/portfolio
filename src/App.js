import { Switch, Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Switch>
    </div>
  );
}

export default App;
