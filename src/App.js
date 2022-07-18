import React from "react";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Homepage/Landingpage/LandingPage";
import TrendingNFT from "./components/TrendingNFT/TrendingNFT";
import Cryptoverse from "./components/Cryptoverse/Cryptoverse";
import About from "./components/About/About";
import News from "./components/News/News";
import Support from "./components/Support/Support";


const App = () => {
  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/trendingnfts" element={<TrendingNFT />} />
        <Route path="/cryptoverse" element={<Cryptoverse />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
};

export default App;
