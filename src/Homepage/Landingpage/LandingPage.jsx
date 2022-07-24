import React, { useEffect, useRef } from "react";
import "./LandingPage.scss";
import Arrow from "../../re-usable components/Arrow";
import { Link } from "react-router-dom";
import { Cryptoverse, TrendingNFT, Navbar, News } from "../../components/index";

import header1 from "../img/header-img.jpg";
import header2 from "../img/header-img1.jpg";
import distortion from "../img/distortion.jpg";
import hoverEffect from "hover-effect";
import Intro from "../img/intro.jpg";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./locomotiveScroll.css";
import locomotiveScroll from "locomotive-scroll";
import footer from "../img/footer.jpg";
import footer1 from "../img/footer1.jpg";
import wave from "../img/wave.jpg";

const LandingPage = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(".wrapper"),
      intensity: 0.2,
      image1: header1,
      image2: header2,
      displacementImage: distortion,
    });
new hoverEffect({
  parent: document.querySelector(".footer-wrapper"),
  intensity: 0.2,
  image1: footer,
  image2: footer1,
  displacementImage: wave,
});

  }, []);

  useEffect(() => {
    new locomotiveScroll({
      el: containerRef.current,
      tablet: { smooth: true },
      smartphone: { smooth: true },
      smooth: true,
    });
  }, []);

  return (
    <>
      <main data-scroll-container ref={containerRef}>
        <Navbar />
        <div className="container">
          <section className="header__page margin-top" data-scroll-section>
            <div className="header__page--text flex">
              <h1
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-position="top"
                data-scroll-speed="8"
              >
                Discover, learn and explore {<Arrow />} crypto currencies &
                NFTs.
              </h1>
              <div
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-position="top"
                data-scroll-speed="7"
              >
                <Link to="/cryptoverse">
                  <button className="button">Explore Cryptos</button>
                </Link>
                <Link to="/trendingnfts">
                  <button className="secondary-button">Trending NFTs</button>
                </Link>
              </div>
            </div>

            <div
              className="header__page--image-wrapper wrapper"
              data-scroll
              data-scroll-speed="5"
              data-scroll-position="top"
              data-scroll-direction="vertical"
            ></div>
          </section>
          <section data-scroll-section>
            <div className="intro">
              <img
                src={Intro}
                alt="intro"
                className="intro__image"
                data-scroll
                data-scroll-speed="5"
                data-scroll-direction="vertical"
              />
              <div className="intro__text flex">
                <h3
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="2"
                >
                  Deep Dive Into Cryptoverse
                </h3>
                <p
                  className="secondary-color margin-small"
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="3"
                >
                  Join us, and you won't be disappointed! Work anywhere,
                  whenever you want. <br />
                  Be a part of this fantastic 2.5 million team.
                  <br /> Be a part of the innovative movement.
                  <br /> Be a part of the future.
                </p>
                <div
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="2"
                  className="margin-small"
                >
                  <button className="secondary-button margin-right ">
                    About us
                  </button>
                  <button className="button">Support</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Cryptoverse simplified />
        <TrendingNFT simplified />
        <News simplified />
        <div className="container">
          <section data-scroll-section className=" footer__action">
            <div className="footer__text--left">
              <h2>Frequently asked questions</h2>
              <p>What are NFTs?</p>
              <p>what are cryptocurrencies?</p>
              <p>Is it legit?</p>
              <h2>Don't know where to start?</h2>
              <p>
                We're giving advices advice for free! We will set you up with all
                of the foundation you need - as long as you're keen to learn!
              </p>
              <button className="button">Contact Us</button>
            </div>
            <div
              className="header__page--image-wrapper footer-wrapper"

            ></div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
