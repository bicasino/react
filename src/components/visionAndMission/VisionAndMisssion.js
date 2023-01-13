import React from "react";
import Menuleft from "../leftside/Menuleft";
import Searchbar from "../searchbar/Searchbar";
import { Link } from "react-router-dom";

const VisionAndMisssion = () => {
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
                    <Link to="/visionAndMission">Sứ mệnh, tầm nhìn</Link>
                  </li>
                </ul>
                <div className="sumenhtamnhin">
                  <div className="container">
                    <h1 className="title-news">
                      SỨ MỆNH - TẦM NHÌN - TRIẾT LÝ KINH DOANH
                    </h1>
                  </div>
                  {/* <VisionAndMissionDetail /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisionAndMisssion;
