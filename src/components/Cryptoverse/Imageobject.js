import React from "react";
import image1 from "../../Homepage/img/crypto-1.jpg";
import image2 from "../../Homepage/img/crypto-2.jpg";
import image3 from "../../Homepage/img/crypto-3.jpg";
import image4 from "../../Homepage/img/crypto-4.jpg";
import image5 from "../../Homepage/img/crypto-5.jpg";
import image6 from "../../Homepage/img/crypto-6.jpg";
import millify from "millify";
import "./Cryptoverse.scss";

const Imageobject = ({ cryptos }) => {
  console.log(cryptos);
  if (cryptos === undefined) return "Loading";
  const imageArray = {
    image: [image1, image2, image3, image4, image5, image6],
    name: [],
      symbol: [],
    price: []
  };

  for (let i = 0; i < cryptos.length; i++) {
    imageArray.name.push(cryptos[i].name);
      imageArray.symbol.push(cryptos[i].symbol);
      imageArray.price.push(cryptos[i].btcPrice);
  }
  console.log(imageArray);

  return (
    <>
      <div className="crypto">
        <img
          className="crypto__img"
          src={imageArray.image[0]}
          alt={imageArray.name[0]}
        />
        <h6>
          {imageArray.name[0]} - {imageArray.symbol[0]}
        </h6>
      </div>
      <div>
        <img
          className="crypto__img"
          src={imageArray.image[1]}
          alt={imageArray.name[1]}
        />
        <h6>
          {imageArray.name[1]} - {imageArray.symbol[1]}
        </h6>
        <p className="crypto__price">Price: {millify(imageArray.price[1])}</p>
      </div>
      <div>
        <img
          className="crypto__img"
          src={imageArray.image[2]}
          alt={imageArray.name[2]}
        />
        <h6>
          {imageArray.name[2]} - {imageArray.symbol[2]}
        </h6>
      </div>
      <div>
        <img
          className="crypto__img"
          src={imageArray.image[3]}
          alt={imageArray.name[3]}
        />
        <h6>
          {imageArray.name[3]} - {imageArray.symbol[3]}
        </h6>
      </div>
      <div>
        <img
          className="crypto__img"
          src={imageArray.image[4]}
          alt={imageArray.name[4]}
        />
        <h6>
          {imageArray.name[4]} - {imageArray.symbol[4]}
        </h6>
      </div>
      <div>
        <img
          className="crypto__img"
          src={imageArray.image[5]}
          alt={imageArray.name[5]}
        />
        <h6>
          {imageArray.name[5]} - {imageArray.symbol[5]}
        </h6>
      </div>
    </>
  );
};

export default Imageobject;
