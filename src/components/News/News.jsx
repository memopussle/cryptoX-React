import React, { useState, useEffect } from "react";
import "./News.scss";
import { Navbar, Footer } from "../index";
import { useGetNewsQuery } from "../../services/newsApi";
import Arrow from "../../re-usable components/Arrow";
import { Link } from "react-router-dom";

const News = ({ simplified }) => {
  const { data: news } = useGetNewsQuery();
  const [search, setSearch] = useState("");
  const fullNews = news?.slice(0, 34);
  const [newsList, setNewsList] = useState(fullNews);
  console.log(newsList);

  const halfNews = news?.slice(0, 6);
  const newsArray = simplified ? halfNews : newsList;

  useEffect(() => {
    const filteredData = news?.filter((eachNews) =>
      eachNews.title.toLowerCase().includes(search)
    );

    setNewsList(filteredData);

    
  }, [news, search]);

  return (
    <div>
      {!simplified && <Navbar />}
      <div className="container">
        <h2 className="margin-section news__title margin-right">News</h2>
        {simplified && (
          <Link to="/trendingnfts">
            <Arrow />
          </Link>
        )}
        {!simplified && (
          <>
            <div>
              <input
                className="search"
                placeholder="Search News"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </>
        )}

        <div className="news__section margin-standard">
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
      {!simplified && <Footer />}
    </div>
  );
};

export default News;
