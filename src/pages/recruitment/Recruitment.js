import React, { useState, useEffect } from "react";
import Menuleft from "../../components/leftside/Menuleft";
import RecruitDetail from "../../components/recruitDetail/RecruitDetail";
import Searchbar from "../../components/searchbar/Searchbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Recruitment = () => {
  const [recruitment, setRecruitment] = useState([]);
  useEffect(() => {
    axios
      .get(`https://it.vnpost.vn/api/v2/RecruitmentCareers?menuId=4`)
      .then((resp) => {
        setRecruitment(resp.data);
      });
  }, []);

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
              <Link to="/">VNPOST-IT</Link>
              <span className="divider">/</span>
            </li>
            <li className="current-parent breadcrumb-truncate">
              <Link to="/recruitment">CƠ HỘI NGHỀ NGHIỆP</Link>
            </li>
          </ul>
          <div className="row">
            <Menuleft />
            <div className="col-sm-9">
              <div className="portlet-body">
                <div className="container">
                  {recruitment &&
                    recruitment.map((item, index) => (
                      <RecruitDetail item={item} key={index} />
                    ))}
                  {/* <br /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Recruitment;
