import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import "./Cryptoverse.scss";
import millify from "millify";
import Arrow from "../../re-usable components/Arrow";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Cryptoverse = ({ simplified }) => {
  const count = simplified ? 6 : 34;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState();
  console.log(cryptoList);

  //loop through list
  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);
  }, [cryptoList]);

  if (isFetching) return "Loading...";
  return (
    <>
      {!simplified && <Navbar />}
      <section className="container">
        <h2 className="crypto__text">Cryptoverse</h2>
        {simplified && <Link to="/cryptoverse">{<Arrow />}</Link>}
        <div className="crypto__section">
          {cryptos?.map((currency) => (
            <div key={currency.uuid}>
              <a className="crypto flex" href="#">
                <div className="crypto__card">
                  <div className="flex">
                    <h6>
                      {currency.name} - {currency.symbol}
                    </h6>
                    <img
                      className="crypto__icon"
                      src={currency.iconUrl}
                      alt={currency.symbol}
                    />
                  </div>
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Rank: 1</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cryptoverse;
