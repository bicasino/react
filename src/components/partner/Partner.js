import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menuleft from "../leftside/Menuleft";
import PartnerDetail from "../partnerDetail/PartnerDetail";
import Searchbar from "../searchbar/Searchbar";

const Partner = () => {
  const [partner, setPartner] = useState([]);
  useEffect(() => {
    axios.get(`https://it.vnpost.vn/api/v2/Partner?menuId=7`).then((resp) => {
      setPartner(resp.data);
      // console.log(resp.data);
    });
  }, []);

  return (
    <main>
      <Searchbar />
      <section className="content">
        <div className="container">
          <div className="row">
            <Menuleft />
            <div className="col-sm-9">
              <div className="portlet-body">
                <ul
                  aria-label="Đường dẫn liên kết (breadcrumb)"
                  className="breadcrumb breadcrumb-horizontal"
                >
                  <li className="first breadcrumb-truncate">
                    <a href="/">VNPOST-IT</a>
                    <span className="divider">/</span>
                  </li>
                  <li className="current-parent breadcrumb-truncate">
                    <Link to="">GIỚI THIỆU</Link>
                    <span className="divider">/</span>
                  </li>
                  <li className="active last breadcrumb-truncate">
                    <a href="/partner">Đối tác và khách hàng</a>
                  </li>
                </ul>
                <div className="doitac">
                  <div className="container">
                    <h1 className="title-news">ĐỐI TÁC VÀ KHÁCH HÀNG</h1>
                    {partner &&
                      partner.map((item, index) => (
                        <PartnerDetail item={item} key={index} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partner;
