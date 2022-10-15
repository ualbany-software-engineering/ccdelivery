import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Login from "./components/pages/Login.js";
import Home from "./components/pages/Home.js";
import PageNotFound from "./components/pages/PageNotFound";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
