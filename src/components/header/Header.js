import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-logo">
          <Link to="/" className="logo">
            <img src={"/assets/images/logo1.png"} alt="" />
          </Link>
        </div>
        <div id="aside" className="header-navlinks">
          <ul className="header-menu">
            <li className="header-dropdown">
              <Link to="">Giới thiệu</Link>
              <i className="fa-solid fa-caret-down" />
              <div className="dropdown-list">
                <Link to="/introHeader" className="dropdown-item">
                  Giới thiệu chung
                </Link>
                <Link to="/visionAndMission" className="dropdown-item">
                  Sứ mệnh - Tầm nhìn
                </Link>
                <Link to="/partner" className="dropdown-item">
                  Đối tác công nghệ
                </Link>
              </div>
            </li>
            <li className="header-dropdown">
              <Link to="">Giải pháp - Dự án</Link>
              <i className="fa-solid fa-caret-down" />
              <div className="dropdown-list">
                <Link to="/web/giai-phap.html" className="dropdown-item">
                  Giải pháp
                </Link>
                <Link to="/web/du-an.html" className="dropdown-item">
                  Dự án
                </Link>
              </div>
            </li>
            <li>
              <Link to="/culture">Văn hoá nội bộ</Link>
              {/* <a to="/web/van-hoa-noi-bo.html">Văn hoá nội bộ</a> */}
            </li>
            <li>
              <Link to="/posts">Tin tức</Link>
            </li>
            <li>
              <Link to="/recruitment">Cơ hội nghề nghiệp</Link>
              {/* <a to='/web/co-hoi-nghe-nghiep.html'>Cơ hội nghề nghiệp</a> */}
            </li>
            <li className="header-dropdown">
              <Link to="">Liên hệ hỏi đáp</Link>
              <i className="fa-solid fa-caret-down" />
              <div className="dropdown-list">
                <Link
                  to="https://itsm.vnpost.vn"
                  target="_blank"
                  className="dropdown-item"
                >
                  IT Helpdesk
                </Link>
                <Link
                  to="https://mail.vnpost.vn"
                  target="_blank"
                  className="dropdown-item"
                >
                  Email
                </Link>
                <Link
                  to="https://eoffice.vnpost.vn/qlvbdh/main?lang=vi"
                  target="_blank"
                  className="dropdown-item"
                >
                  E-Office
                </Link>
                <Link to="" className="dropdown-item">
                  Lịch trực
                </Link>
                <Link to="" className="dropdown-item">
                  DASHBOARD
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div id="btn-toggle" className="nav-toggle">
          <i className="fa-solid fa-bars-staggered fa-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
