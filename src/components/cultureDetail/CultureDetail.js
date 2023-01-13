import React from "react";
import { Link } from "react-router-dom";

const CultureDetail = ({ item }) => {
  const { dateCreated, name, image, id, title } = item;
  return (
    <div className="box-news-xx">
      <Link className="image" to={`/culture/${id}`}>
        <span className="rollx"></span>
        <img
          className="img-news-xx sdateCreatedlickHoverPlus"
          src={`https://it.vnpost.vn/${image}`}
        />
      </Link>
      <h2 className="h2-title-xx">
        <Link to={`/posts/${id}`}>{name}</Link>
      </h2>
      <div className="hot-news-tol">
        <p className="date_post">
          <i className="fa-regular fa-clock"></i>
          {dateCreated}
        </p>
      </div>
      <div className="hot-news-sapo-x">{title}</div>
      <div className="clearfix"></div>
    </div>
  );
};

export default CultureDetail;
