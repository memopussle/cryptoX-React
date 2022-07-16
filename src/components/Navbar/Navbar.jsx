
import React from "react";
import Button from "../../re-usable components/Button";
import { Routes, Route, Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  return (
    <div className="container">
      <nav className="nav">
        <h6 className="nav__logo">KryptoX</h6>
        <div className="nav_pages">
          <Link style={{ textDecoration: "none" }} to="/">
            <p>Home</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/trendingnfts">
            <p>Trending NFTs</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/cryptoverse">
            <p>Cryptoverse</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/news">
            <p>News</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <p>About Us</p>
          </Link>
          <Button />
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
