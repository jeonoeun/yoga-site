import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Types from "./pages/Types";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  const [clicked, setClicked] = useState(false);
  const [vinyasa, setVinyasa] = useState(false);
  const [acro, setAcro] = useState(false);
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
          <Route
            path="/"
            element={
              <Index
                clicked={clicked}
                setClicked={setClicked}
                vinyasa={vinyasa}
                setVinyasa={setVinyasa}
                acro={acro}
                setAcro={setAcro}
              />
            }
          ></Route>
          <Route
            path="/types"
            element={
              <Types
                clicked={clicked}
                setClicked={setClicked}
                vinyasa={vinyasa}
                setVinyasa={setVinyasa}
                acro={acro}
                setAcro={setAcro}
              />
            }
          ></Route>
          <Route
            path="/gallery"
            element={
              <Gallery
                clicked={clicked}
                setClicked={setClicked}
                vinyasa={vinyasa}
                setVinyasa={setVinyasa}
                acro={acro}
                setAcro={setAcro}
              />
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <Contact
                clicked={clicked}
                setClicked={setClicked}
                vinyasa={vinyasa}
                setVinyasa={setVinyasa}
                acro={acro}
                setAcro={setAcro}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
