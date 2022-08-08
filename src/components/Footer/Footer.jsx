import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  const footerTitle = ["Company", "Marketplace", "Resources"];

  const footerBody1 = ["Home", "Features", "Marketplace"];
  const footerBody2 = ["Explore", "NFTs", "Collectibles"];
  const footerBody3 = ["Resources", "Partners", "Newsletter"];
  return (
    <div className="container footer flex">
      <ul>
        <li>
          <p>KryptoX</p>
        </li>
        <li>
          <p className=" secondary-font ">
            A trusted team who is enthusiast about everything crypto.
          </p>
        </li>
        <div className="flex">
          <li>
            <button className="secondary-button">
              <FaFacebookF color="#7217ec" size={20} />
            </button>
          </li>
          <li>
            <button className="secondary-button">
              <AiFillInstagram color="#1cc0f4" size={20} />
            </button>
          </li>
          <li>
            <button className="secondary-button">
              <AiFillTwitterCircle color="#1cc0f4" size={20} />
            </button>
          </li>
        </div>
      </ul>
      <ul>
        <li>
          <p>{footerTitle[0]}</p>
        </li>

        {footerBody1.map((body) => (
          <div>
            <li>
              <p className="footer__body">{body}</p>
            </li>
          </div>
        ))}
      </ul>
      <ul>
        <li>
          <p>{footerTitle[1]}</p>
        </li>

        {footerBody2.map((body) => (
          <div>
            <li>
              <p className="footer__body">{body}</p>
            </li>
          </div>
        ))}
      </ul>
      <ul>
        <li>
          <p>{footerTitle[2]}</p>
        </li>
        {footerBody3.map((body) => (
          <div>
            <li>
              <p className="footer__body">{body}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
