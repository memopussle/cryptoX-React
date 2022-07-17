import React from "react";
import "./LandingPage.scss";
import Arrow from "../../re-usable components/Arrow";
import image from "../img/header-img.jpg";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Cryptoverse from "../../components/Cryptoverse/Cryptoverse";

const LandingPage= () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header__page">
          <div className="header__page--text flex">
            <h1>
              Discover, learn and explore {<Arrow />} crypto currencies & NFTs.
            </h1>
            <div>
              <Link to="/cryptoverse">
                <button className="button">Explore Cryptos</button>
              </Link>
              <Link to="/trendingnfts">
                <button className="secondary-button">Trending NFTs</button>
              </Link>
            </div>
          </div>
          <div className="header__page--image-wrapper flex">
            <img className="header__page--image" src={image} alt="header" />
          </div>
        </div>
        <Cryptoverse />
      </div>

    </>
  );
};

export default LandingPage;
