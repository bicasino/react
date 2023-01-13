import React, { useState, useEffect } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";


const RecruitDetail = ({ item }) => {
  const { dateCreate, nameCareer, shortDescription, id } = item;
  return (
    <div className="box-news-xx">
      <Link className="image" to={`/recruitment/${id}`}>
        <span className="rollx"></span>
        <img
          className="img-news-xx slickHoverPlus"
          src={"assets/images/vnpost-it-logo.jpeg"}
        />
      </Link>
      <h2 className="h2-title-xx">
        <Link to={`/recruitment/${id}`}>{nameCareer}</Link>
      </h2>
      <div className="hot-news-tol">
        <p className="date_post">
          <i className="fa-regular fa-clock"></i>
          {dateCreate}
        </p>
      </div>
      <p className="hot-news-sapo-x">{shortDescription}</p>
      <div className="clearfix"></div>
    </div>
  );
};

export default RecruitDetail;
