import React from "react";
import "./TrendingNFT.scss";
import Navbar from "../Navbar/Navbar";
import { useGetNftsQuery } from "../../services/nftsApi";


const TrendingNFT = () => {
  const count = 6;
  const { data: nfts } = useGetNftsQuery(count); //data is a key of useGetNftsQuery

  if (nfts === undefined) return "Loading";
  const firstSixNfts = nfts.slice(0, 6); //6 first item
  console.log(firstSixNfts);

  return (
    <>
      <div className="container">
        <h5>Trending NFTs</h5>
        <button className="secondary-button">Today</button>
        <button className="secondary-button">This week</button>
        <button className="secondary-button">This month</button>
        <div className="nft__section">
          {firstSixNfts.map((nft, i) => (
            <a key={i} className="nft flex" href="#">
              <div className="nft__card">
                <h6>{nft.collection_name}</h6>

                <a href={nft.collection_url}>Website</a>
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
