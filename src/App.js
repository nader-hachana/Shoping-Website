import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Body />
      <Footer />
    </Router>
    </div>
  );
}
