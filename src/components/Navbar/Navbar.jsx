import React, { useState } from "react";
import Button from "../../re-usable components/Button";
import { Link } from "react-router-dom";
import Hamburger from "../Svg/Hamburger";
import "./Navbar.scss";
import Xmark from "../Svg/Xmark";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="header flex">
      <nav className="nav flex">
        <h5 className="nav__logo">KryptoX</h5>
        <div className="nav__pages">
          <Link to="/" className="nav__link">
            <p>Home</p>
          </Link>
          <Link className="nav__link" to="/cryptoverse">
            <p>Cryptoverse</p>
          </Link>
          <Link className="nav__link" to="/trendingnfts">
            <p>Trending NFTs</p>
          </Link>

          <Link className="nav__link" to="/news">
            <p>News</p>
          </Link>
          <Link className="nav__link" to="/about">
            <p>About Us</p>
          </Link>
          <Link className="nav__link" to="/support">
            <Button />
          </Link>
        </div>
      </nav>
      <nav className="nav__small">
        <button className="nav__small--hamburger" onClick={handleToggle}>
          {navbarOpen ? <Xmark /> : <Hamburger />}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <Link className="nav__link" to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/trendingnfts">
              <p>Trending NFTs</p>
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/cryptoverse">
              <p>Cryptoverse</p>
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/news">
              <p>News</p>
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/about">
              <Button />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
