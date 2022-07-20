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
  const [searchTerm, setSearchTerm] = useState("");
console.log(searchTerm)
  const [cryptos, setCryptos] = useState();
  console.log(cryptoList);


  //loop through list
  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);
    const filteredData = cryptoList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm) 
      //if item name includes searchTerm = true -> filter those item
    );
     setCryptos(filteredData) //set the list of cryptos to filter data
  }, [cryptoList, searchTerm]);

  if (isFetching) return "Loading...";
  return (
    <>
      {!simplified && <Navbar />}
      <section className="container">
        <h2 className="crypto__text">Cryptoverse</h2>
        {!simplified && (
          <div>
            <input
              className="search"
              placeholder="Search Cryptocurrency"
              onChange={(e) =>
                setSearchTerm(e.target.value.toLocaleLowerCase())
              }
            />
          </div>
        )}
        {simplified && <Link to="/cryptoverse">{<Arrow />}</Link>}
        <div className="crypto__section">
          {cryptos?.map((currency) => (
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <a
                className="crypto flex"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cryptoverse;
