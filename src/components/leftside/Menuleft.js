import React from "react";
import { Link } from "react-router-dom";

const Menuleft = () => {
  return (
    <div className="col-sm-3">
      <div className="menuleft">
        <ul>
          <li>
            <Link> GIỚI THIỆU</Link>
            <ul>
              <li>
                <Link to="/introHeader" className="current">
                  Giới thiệu chung
                </Link>
              </li>
              <li>
                <Link to="/visionAndMission" className="current">
                  Sứ mệnh, tầm nhìn
                </Link>
              </li>
              <li>
                <Link to="" className="current">
                  Cơ cấu tổ chức
                </Link>
              </li>
              <li>
                <Link to="/partner" className="current">
                  Đối tác công nghệ
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to=""> GIẢI PHÁP - DỰ ÁN</Link>
            <ul>
              <li>
                <Link to="" className="current">
                  Giải pháp
                </Link>
              </li>
              <li>
                <Link to="" className="current">
                  {" "}
                  Dự án
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/culture"> VĂN HOÁ NỘI BỘ</Link>
          </li>
          <li>
            <Link to="/posts"> TIN TỨC</Link>
          </li>
          <li>
            <Link to="/recruitment"> CƠ HỘI NGHỀ NGHIỆP</Link>
          </li>
          <li>
            <Link to="" className="current">
              {" "}
              LIÊN HỆ HỎI ĐÁP
            </Link>
            <ul>
              <li>
                <Link
                  to="https://itsm.vnpost.vn"
                  target="_blank"
                  className="current"
                >
                  IT Helpdesk
                </Link>
              </li>
              <li>
                <Link
                  to="https://mail.vnpost.vn"
                  target="_blank"
                  className="current"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  to="https://eoffice.vnpost.vn/qlvbdh/main?lang=vi"
                  target="_blank"
                  className="current"
                >
                  E-Office
                </Link>
              </li>
              <li>
                <Link to="" className="current">
                  {" "}
                  Lịch trực
                </Link>
              </li>
              <li>
                <Link to="" className="current">
                  {" "}
                  DASHBOARD
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menuleft;
