import React, { useEffect } from "react";
import "./LandingPage.scss";
import Arrow from "../../re-usable components/Arrow";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Cryptoverse from "../../components/Cryptoverse/Cryptoverse";
import TrendingNFT from "../../components/TrendingNFT/TrendingNFT";
import header1 from "../img/header-img.jpg";
import header2 from "../img/header-img1.jpg";
import distortion from "../img/distortion.jpg";
import hoverEffect from "hover-effect";



const LandingPage = () => {
  useEffect(() => {
     new hoverEffect({
      parent: document.querySelector(".wrapper"),
      intensity: 0.2,
      image1: header1,
      image2: header2,
      displacementImage: distortion,
    });
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header__page ">
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

            <div className="header__page--image-wrapper wrapper"></div>

        </div>
      </div>
      <Cryptoverse simplified />
      <TrendingNFT simplified/>
    </>
  );
};

export default LandingPage;
