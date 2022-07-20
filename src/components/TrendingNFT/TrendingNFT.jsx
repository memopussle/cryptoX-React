import React, { useState } from "react";
import "./TrendingNFT.scss";
import Navbar from "../Navbar/Navbar";
import { useGetNftsQuery } from "../../services/nftsApi";
import { Link } from "react-router-dom";
import Arrow from "../../re-usable components/Arrow";

const TrendingNFT = ({ simplified }) => {
   const [date, setDate] = useState("1d");
  const { data: nfts } = useGetNftsQuery(date); //data is a key of useGetNftsQuery
  console.log(nfts)

  if (nfts === undefined) return "Loading";
  const firstSixNfts = nfts.slice(0, 6); //6 first item
  const fullNfts = nfts.slice(0, 34);
  const nftsArray = simplified ? firstSixNfts : fullNfts;


  return (
    <>
      {!simplified && <Navbar />}
      <div className="container">
        <h5>Trending NFTs</h5>
        <Link to="/trendingnfts">
          <Arrow />
        </Link>
        <div>
          <button
            className="secondary-button"
            onClick={(e) => {
              setDate("1d");
            }}
          >
            Today
          </button>
          <button
            className="secondary-button"
            onClick={(e) => {
              setDate("7d");
            }}
          >
            This week
          </button>
          <button
            className="secondary-button"
            onClick={(e) => {
              setDate("30d");
            }}
          >
            This month
          </button>
        </div>
        <div className="nft__section">
          {nftsArray.map((nft, i) => (
            <a
              key={i}
              className="nft flex"
              href={nft.collection_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="nft__card">
                <h6>{nft.collection_name}</h6>

                <a href={nft.collection_url} norefer="_blank">
                  Website
                </a>
                <p>Trades: {nft.trades}</p>
                <p>Volume: {nft.volume}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingNFT;
