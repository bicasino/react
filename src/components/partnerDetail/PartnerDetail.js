import React from "react";

const PartnerDetail = ({ item }) => {
  const { image } = item;
  return (
    <div className="content">
      <img src={`https://it.vnpost.vn/${image}`} alt="Ảnh" />
    </div>
  );
};

export default PartnerDetail;
