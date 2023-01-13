import axios from "axios";
import React, { useState, useEffect } from "react";
import CultureDetail from "../../components/cultureDetail/CultureDetail";
import Menuleft from "../../components/leftside/Menuleft";
import Searchbar from "../../components/searchbar/Searchbar";

const Culture = () => {
  const [cultureDetail, setcultureDetail] = useState([]);
  axios
    .get(`https://it.vnpost.vn/api/v1/News?menuId=22&skip=0&take=10`)
    .then((resp) => {
      setcultureDetail(resp.data);
    });
  return (
    <main>
      <Searchbar />
      <section className="content">
        <div className="container">
          <ul
            aria-label="Đường dẫn liên kết (breadcrumb)"
            className="breadcrumb breadcrumb-horizontal"
          >
            <li className="first breadcrumb-truncate">
              <a href="/index.html">VNPOST-IT</a>
              <span className="divider">/</span>
            </li>
            <li className="current-parent breadcrumb-truncate">
              <a href="/web/van-hoa-noi-bo.html">VĂN HOÁ NỘI BỘ</a>
            </li>
          </ul>
          <div className="row">
            <Menuleft />
            <div className="col-sm-9">
              <div className="portlet-body">
                <div className="container">
                  {cultureDetail &&
                    cultureDetail.map((item, index) => (
                      <CultureDetail item={item} key={index} />
                    ))}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Culture;
