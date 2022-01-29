import React from "react";

function Card({ data }) {
  return (
    <div className="news">
      <img src={data.media} className="news__image" alt="..." />
      <h1 className="news__title">{data.title}</h1>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.published_date}</span>
      <span className="news__source"><a href={data.link} className="weblink" target="_blank">Website Link</a></span>
    </div>
  );
}

export default Card;