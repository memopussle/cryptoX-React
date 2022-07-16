import React from "react";
import "./App.scss";
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

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

      <div className="routes">
        <Routes>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/trendingNFTs">
            <TrendingNFT />
          </Route>
          <Route exact path="/cryptoverse">
            <Cryptoverse />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
