import React from "react";

const Solution = ({ item }) => {
  const { name, title } = item;
  return (
    <div className="solution-item">
      <h3 className="title">
        <a href="#" className="url">
          {name}
        </a>
      </h3>
      <p className="desc">{title}</p>
      <div className="actions">
        <a href="#" className="btn-readmore">
          Xem thêm
        </a>
      </div>
    </div>
  );
};

export default Solution;
