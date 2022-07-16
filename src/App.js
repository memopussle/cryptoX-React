import React from "react";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import TrendingNFT from "./components/TrendingNFT/TrendingNFT";
import Cryptoverse from "./components/Cryptoverse/Cryptoverse";
import About from "./components/About/About";
import News from "./components/News/News";


const App = () => {
  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/trendingnfts" element={<TrendingNFT />} />
        <Route path="/cryptoverse" element={<Cryptoverse />} />

      </Routes>
    </div>
  );
};

export default App;
