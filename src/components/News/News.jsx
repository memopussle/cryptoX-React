import React from "react";
import "./News.scss";
import { Navbar } from "../index";
import { useGetNewsQuery } from "../../services/newsApi";
import Arrow from "../../re-usable components/Arrow";
import { Link } from "react-router-dom";

const News = ({ simplified }) => {
  const { data: news } = useGetNewsQuery();
  console.log(news);
  const fullNews = news?.slice(0, 34);
  const halfNews = news?.slice(0, 6);
  const newsArray = simplified ? halfNews : fullNews;
  return (
    <div>
      {!simplified && <Navbar />}
      <div className="container" data-scroll-section>
        <h2 className="margin-section news__title margin-right"> News</h2>
        <Link to="/trendingnfts">
          <Arrow />
        </Link>
        <div
          className="news__section margin-standard"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="3"
        >
          {newsArray?.map(({ title, url, source }, i) => (
            <div key={i} className="news__card">
              <h6>{title}</h6>
              <a className="secondary-color" href={url} norefer="_blank">
                Read more
              </a>
              <p className="secondary-color">Source: {source}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
