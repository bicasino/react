import React, { useEffect, useState } from "react";
var data = require(`https://it.vnpost.vn/api/v1/News?menuId=3&skip=0&take=8`);

const Searchbar = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  return (
    <section className="search">
      <div className="container">
        <div className="search-phone">
          <i className="fa-solid fa-phone"></i>
          <i> 0243.768.9363 </i>
        </div>
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Nhập từ khoá tìm kiếm..."
          />
          <button onClick={() => onSearch(value)} className="search-btn">
            Tìm kiếm
          </button>
          {/* <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const name = item.name.toLowerCase();

                return (
                  searchTerm &&
                  name.startsWith(searchTerm) &&
                  name !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.name)}
                  className="dropdown-row"
                  key={item.name}
                >
                  {item.name}
                </div>
              ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
