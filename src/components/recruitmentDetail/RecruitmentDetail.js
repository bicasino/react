import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Searchbar from "../searchbar/Searchbar";
import Menuleft from "../../components/leftside/Menuleft";

const RecruitmentDetail = () => {
  const [detail, setDetail] = useState(0);
  const params = useParams();
  let { recruitmentId } = params;
  useEffect(() => {
    axios
      .get(`https://it.vnpost.vn/api/v2/RecruitmentJob/${recruitmentId}`)
      .then((resp) => {
        setDetail(resp.data);
      });
  }, []);
  //   console.log(data);
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
                  {detail ? <h1>{detail.title}</h1> : "Loading"}
                  {detail ? <p>{detail.dateCreate}</p> : ""}
                  {detail ? parse(detail.description) : ""}
                  {/* <div>{detail ? <p>{detail.author}</p> : ""}</div> */}
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

export default RecruitmentDetail;
