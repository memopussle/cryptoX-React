import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import hoverEffect from "hover-effect";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import "./Cryptoverse.scss";
import Imageobject from "./Imageobject";


const Cryptoverse = () => {
  const count = 6;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState();
  console.log(cryptoList);

  //loop through list
  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);
  }, [cryptoList]);

  if (isFetching) return "Loading...";
  return (
    <section className="crypto">
      <h3 className="crypto__text">Cryptoverse</h3>
      <Imageobject cryptos={cryptos} />
      <div className="distortion"></div>
    </section>
  );
};

export default Cryptoverse;
