import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Types from "./pages/Types";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <img
        className="banner-img"
        src={process.env.PUBLIC_URL + "./images/banner.jpg"}
        alt=""
      />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/types" element={<Types />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}
