import React, { useEffect, useState, useRef } from "react";
import "./LandingPage.scss";
import Arrow from "../../re-usable components/Arrow";
import { Link } from "react-router-dom";
import { Cryptoverse, TrendingNFT, Navbar, News } from "../../components/index";

import header1 from "../img/header-img.jpg";
import header2 from "../img/header-img1.jpg";
import distortion from "../img/distortion.jpg";
import hoverEffect from "hover-effect";
import Intro from "../img/intro.jpg";
import Footer from "../../components/Footer/Footer";
import footer from "../img/footer.jpg";
import footer1 from "../img/footer1.jpg";
import wave from "../img/wave.jpg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const LandingPage = () => {

  const scroller = useRef();

  const [footerOpen, setFooterOpen] = useState(false);

  const handleClick = () => {


    setFooterOpen(!footerOpen);
  };

  const frequentlyAsked = [
    {
      question: "What are NFTs?",
      answer:
        "  NFTs is A non-fungible token is a financial securityconsisting of digital data stored in a blockchain, a form of distributed ledger.",
    },
    {
      question: "What are Cryptocurrencies?",
      answer:
        " Crypto is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. ",
    },
    {
      question: "Are they legit?",
      answer:
        " Yes they are! They can be a great investment with astronomically high returns overnight; however, there is also a considerable downside.",
    },
  ];

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

  return (
    <>
      <main className="scroller" ref={scroller}>
        <Navbar />
        <div className="container">
          <section className="header__page margin-top">
            <div className="header__page--text flex">
              <h1>
                Discover, learn and explore {<Arrow />} crypto currencies &
                NFTs.
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
          </section>
          <section className="margin-section">
            <div className="intro">
              <img src={Intro} alt="intro" className="intro__image" />
              <div className="intro__text flex ">
                <h3>Deep Dive Into Cryptoverse</h3>
                <p className="secondary-color margin-small">
                  Join us, and you won't be disappointed! Work anywhere,
                  whenever you want. <br />
                  Be a part of this fantastic 2.5 million team.
                  <br /> Be a part of the innovative movement.
                  <br /> Be a part of the future.
                </p>
                <div className="margin-small">
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
          <section className=" footer__action margin-section">
            <div className="footer__text--left">
              <h2>Frequently asked questions</h2>

              {frequentlyAsked.map(({ question, answer, i }) => (
                <div className="footer__text--q margin-small " key={i}>
                  <div className="flex space-between">
                    <p>{question}</p>
                    <button onClick={handleClick} className="footer__button">
                      {footerOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                  </div>
                  {footerOpen === true && (
                    <p className="secondary-color">{answer}</p>
                  )}
                </div>
              ))}
              <div className="margin-small">
                <h2>Not sure where to start?</h2>
                <p>
                  Give us a call or send us a message - we're giving free advice
                  and consultations!
                </p>
                <button className="button margin-standard">Contact Us</button>
              </div>
            </div>
            <div className="header__page--image-wrapper footer-wrapper"></div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
