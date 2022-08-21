import React, { useState } from "react";
import "./TrendingNFT.scss";
import { Navbar, Footer } from "../index";
import { useGetNftsQuery } from "../../services/nftsApi";
import { Link } from "react-router-dom";
import Arrow from "../../re-usable components/Arrow";

const TrendingNFT = ({ simplified }) => {
  const [date, setDate] = useState("1d");
  const { data: nfts } = useGetNftsQuery(date); //data is a key of useGetNftsQuery
  console.log(nfts);

  if (nfts === undefined) return "Loading";
  const firstSixNfts = nfts.slice(0, 6); //6 first item
  const fullNfts = nfts.slice(0, 34);
  const nftsArray = simplified ? firstSixNfts : fullNfts;

  return (
    <>
      <section>
        {!simplified && <Navbar />}
        <div className="container ">
          <h2 className="margin-section margin-right nft__title">
            Trending NFTs
          </h2>
          {simplified && (
            <Link to="/trendingnfts">
              <Arrow />
            </Link>
          )}

          <div className="margin-standard date">
            <button
              className="secondary-button margin-right"
              onClick={(e) => {
                setDate("1d");
              }}
            >
              Today
            </button>
            <button
              className="secondary-button margin-right"
              onClick={(e) => {
                setDate("7d");
              }}
            >
              This week
            </button>
            <button
              className="secondary-button margin-right"
              onClick={(e) => {
                setDate("30d");
              }}
            >
              This month
            </button>
          </div>
          <div className="nft__section margin-standard">
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

                  <a href={nft.collection_url} target="_blank" rel="noreferrer">
                    Website
                  </a>
                  <p>Trades: {nft.trades}</p>
                  <p>Volume: {nft.volume}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        {!simplified && <Footer />}
      </section>
    </>
  );
};

export default TrendingNFT;
