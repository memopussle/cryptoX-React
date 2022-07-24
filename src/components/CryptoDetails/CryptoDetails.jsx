import React, { useState } from "react";
import "./CryptoDetails.scss";
import { useParams } from "react-router-dom";
import {
  useGetCryptoDetailsQuery,
  useGetCoinPriceHistoryQuery,
} from "../../services/cryptoApi";
import { Navbar } from "../index";
import millify from "millify";
import LineChart from "../LineChart";

const CryptoDetails = () => {
  const { coinId } = useParams(); //= useParams.coinIdcoinId
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCoinPriceHistoryQuery(coinId, timePeriod);

  const crypto = data?.data?.coin;
  console.log(crypto);
  const stats = [

    {
      title: "Price to USD",
      value: `$ ${crypto?.price && millify(crypto?.price)}`,
    },
    {
      title: "Rank",
      value: `${crypto?.rank}`,
    },
    {
      title: "All time high",
      value: `${
        crypto?.allTimeHigh.price && millify(crypto?.allTimeHigh.price)
      }`,
    },
  ];

  const generalStats = [
    {
      title: "Number of Exchange",
      value: `${crypto?.numberOfExchanges}`,
    },
    {
      title: "Number of Markets",
      value: `${crypto?.numberOfMarkets}`,
    },
    {
      title: "BTC Price",
      value: `${crypto?.btcPrice && millify(crypto?.btcPrice)}`,
    },
  ];

  if (isFetching) return "Loading...";
  if (coinHistory === undefined) return "Loading...;";

  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
  const timeStamp = coinHistory?.data?.history.map((time) =>
    new Date(time.timestamp).toLocaleDateString()
  );

  const price = coinHistory?.data?.history.map((price) => price.price);

  return (
    <>
      <Navbar />
      <div className="container details">
        <div className=" margin-top">
          <h5 className="margin-right">
            {crypto.name} - {crypto.symbol}
          </h5>

          <img src={crypto.iconUrl} alt={crypto.name} className="icon" />

          <p className="secondary-color">{coinHistory?.data?.change}%</p>
        </div>
        <select
          defaultValue="7d"
          placeholder="Select Time-period"
          onChange={(event) => setTimePeriod(event.target.value)}
          className="search"
        >
          {time.map((date) => (
            <option key={date} className="options">
              {date}
            </option>
          ))}
        </select>
        <LineChart timeStamp={timeStamp} price={price} className="line-chart" />

          <div className="flex details__stats margin-top">
            <div>
              {stats.map(({ title, value }) => (
                <p>
                  {title}: {value}
                </p>
              ))}
            </div>
            <div>
              {generalStats.map(({ title, value }) => (
                <p>
                  {title}: {value}
                </p>
              ))}
            </div>
          </div>
        </div>
    
    </>
  );
};

export default CryptoDetails;
