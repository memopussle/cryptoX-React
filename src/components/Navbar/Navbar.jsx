
import React from "react";
import Button from "../../re-usable components/Button";
import { Routes, Route, Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => (
  <nav className="nav">
    <h6 className="nav__logo">KryptoX</h6>
    <div className="nav_pages">
     <p>Home</p>
     
      <p>Trending NFTS</p>
      <p>Cryptoverse</p>
      <p>News</p>
      <p>About Us</p>
      <Button />
    </div>
  </nav>
);

export default Navbar;
