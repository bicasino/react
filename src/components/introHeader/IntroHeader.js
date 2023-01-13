import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../searchbar/Searchbar";
import Menuleft from "../leftside/Menuleft";
import parse from "html-react-parser";

const IntroHeader = () => {
  const [intro, setIntro] = useState(null);
  useEffect(() => {
    axios
      .get(`https://it.vnpost.vn/api/v2/VisionMission?menuId=5`)
      .then((resp) => {
        setIntro(resp.data);
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
                    <Link to="/">VNPOST-IT</Link>
                    <span className="divider">/</span>
                  </li>
                  <li className="current-parent breadcrumb-truncate">
                    <Link to="">GIỚI THIỆU</Link>
                    <span className="divider">/</span>
                  </li>
                  <li className="active last breadcrumb-truncate">
                    <Link to="/introHeader">Giới thiệu chung</Link>
                  </li>
                </ul>
                <div className="gioi-thieu-chung">
                  <div className="container">
                    <h1 className="title-news">
                      GIỚI THIỆU CHUNG VỀ TRUNG TÂM CNTT
                    </h1>
                    {/* {intro ? <h1>{intro.name}</h1> : "Loading..."} */}
                    {intro ? <p>{intro.dateCreated}</p> : ""}
                    {intro ? parse(intro.detail) : "Loading..."}
                    {/* <div>{intro ? <p>{intro.author}</p> : ""}</div> */}
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

export default IntroHeader;
