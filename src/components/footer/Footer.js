import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-xs-12 row-left">
            <div className="company">
              <div className="company-info">
                <img src={"/assets/images/footerlogo.png"} alt="" />
              </div>
              <div className="company-name">
                <strong>
                  Trung tâm Công nghệ thông tin - Tổng công ty Bưu Điện Việt Nam
                </strong>
              </div>
              <div className="company-li">
                <span className="fa-solid fa-location-dot"></span>
                Địa chỉ: Số 05 đường Phạm Hùng - Mỹ Đình 2 - Nam Từ Liêm - Hà
                Nội - Việt Nam
              </div>
              <div className="company-li">
                <span className="fa-solid fa-phone"></span>
                Điện thoại: 0243.768.9363
              </div>
              <div className="company-li">
                <span className="fa-solid fa-envelope"></span>
                Email: cntt@vnpost.vn
              </div>
            </div>
          </div>
          <div className="col-sm-2 col-xs-12 visible">
            <div className="box-footer">
              <div className="title">GIỚI THIỆU</div>
              <ul className="menus">
                <li>
                  <Link to="/introHeader">Giới thiệu chung</Link>
                </li>
                <li>
                  <Link to="/">Cơ cấu tổ chức</Link>
                </li>
                <li>
                  <Link to="/visionAndMission">Tầm nhìn, Sứ mệnh</Link>
                </li>
                <li>
                  <Link to="/partner">Đối tác, Khách hàng</Link>
                </li>
                <li>
                  <Link to="/">Nguồn lực</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2 col-xs-12 visible">
            <div className="box-footer">
              <div className="title">TIN TỨC</div>
              <ul className="menus">
                <li>
                  <Link to="/posts">Tin VNPOST</Link>
                </li>
                <li>
                  <Link to="/posts">Tin IT - VNPOST</Link>
                </li>
                <li>
                  <Link to="/">Phản hồi của khách hàng</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2 col-xs-12 visible">
            <div className="box-footer">
              <div className="title">SẢN PHẨM - DỊCH VỤ</div>
              <ul className="menus">
                <li>
                  <Link to="/solution">Giải pháp Doanh nghiệp</Link>
                </li>
                <li>
                  <Link to="/solution">Giải pháp Giáo dục</Link>
                </li>
                <li>
                  <Link to="/solution">An toàn bảo mật</Link>
                </li>
                <li>
                  <Link to="/">Trung tâm dữ liệu</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2 col-xs-12">
            <div className="box-footer">
              <div className="title">Kết nối</div>
              <ul className="social">
                <li>
                  <Link
                    to="https://www.facebook.com/VNPostIT/"
                    className="btn fb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon fa fa-facebook"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/channel/UCEVc8VAItMsg9Hg6J-H3xmQ"
                    className="btn yt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon fa fa-youtube-play"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://twitter.com/vietnam_post"
                    className="btn tt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon fa fa-twitter"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          Thành viên của
          <span className="img">
            <img
              src={"/assets/images/logo_white.png"}
              alt=""
              style={{ height: "30px" }}
              // style={{backgroundColor:"#111"}}
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
