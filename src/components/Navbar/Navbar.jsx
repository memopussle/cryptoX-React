
import React from "react";
import Button from "../../re-usable components/Button";
import { Routes, Route, Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => (
  <nav className="nav">
    <h6 className="nav__logo">KryptoX</h6>
    <div className="nav_pages">
      <Link to="/">
        <p>Home</p>
      </Link>

      <Link to="/trendingnfts">
        <p>Trending NFTs</p>
      </Link>
      <Link to="/cryptoverse">
        <p>Cryptoverse</p>
      </Link>
      <Link to="/news">
        <p>News</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
      <Button />
    </div>
  </nav>
);

export default Navbar;
