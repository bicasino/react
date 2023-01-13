import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeNews = ({ item }) => {
  const { dateCreated, name, image, id } = item;
  return (
    <div className="row">
      <div className="item">
        <a href="#" className="news-image">
          <img src={`https://it.vnpost.vn/${image}`} alt="" />
        </a>
        <h4 className="title">
          <Link to={`/posts/${id}`} className="link">
            {name}
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default HomeNews;
