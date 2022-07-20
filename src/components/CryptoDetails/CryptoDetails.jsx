import React, { useState, useEffect } from "react";
import "./CryptoDetails.scss";
import { useParams } from "react-router-dom";
import {
  useGetCryptoDetailsQuery,
  useGetCoinPriceHistoryQuery,
} from "../../services/cryptoApi";
import Navbar from "../Navbar/Navbar";
import millify from "millify";
import LineChart from "../LineChart";


const CryptoDetails = () => {
  const { coinId } = useParams(); //= useParams.coinIdcoinId
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCoinPriceHistoryQuery(coinId, timePeriod);
  console.log(timePeriod);
  console.log(coinHistory);
  const crypto = data?.data?.coin;

  if (isFetching) return "Loading...";

  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
  const timeStamp = coinHistory?.data?.history.map((time) =>
    new Date(time.timestamp).toLocaleDateString()
  );

  const price = coinHistory?.data?.history.map((price) => price.price);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="title flex">
          <h5>
            {crypto.name} - {crypto.symbol}
          </h5>

          <img src={crypto.iconUrl} alt={crypto.name} className="icon" />
        </div>
        <select
          defaultValue="7d"
          placeholder="Select Time-period"
          onChange={(event) => setTimePeriod(event.target.value)}
        >
          {time.map((date) => (
            <option key={date}>{date}</option>
          ))}
        </select>
        <LineChart
          coinHistory={coinHistory}
          timeStamp={timeStamp}
          price={price}
        />
        <p>Price: {millify(crypto.price)}</p>
        <p>Market Cap: {millify(crypto.marketCap)}</p>
        <p>Social media</p>
      </div>
    </>
  );
};

export default CryptoDetails;
