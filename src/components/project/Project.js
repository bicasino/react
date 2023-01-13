import React from "react";
import { Link } from "react-router-dom";

const Project = ({ item }) => {
  const { name, description, thumbnail } = item;
  return (
    <div className="project-item">
      <img src={"./assets/images/logo.png"} />
      {/* `https://it.vnpost.vn/${thumbnail}` */}
      <h3 className="title">
        <Link to={``} className="url">
          {name}
        </Link>
      </h3>
      <p className="desc">{description}</p>
      <div className="actions">
        <a href="#" className="btn-readmore" target="_blank">
          Xem thêm
        </a>
      </div>
    </div>
  );
};

export default Project;
