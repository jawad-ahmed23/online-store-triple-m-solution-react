import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import CartPage from "./containers/CartPage";
import Checkout from "./containers/Checkout";
import ThankYou from "./containers/ThankYou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
