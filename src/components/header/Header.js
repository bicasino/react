import React from 'react'
import "./Header.scss"

const Header = () => {
  return (
    <header>
    <div className="container">
      <div className="header-logo">
        <a href="index.html" className="logo">
          <img src="/image/logo1.png" alt="" />
        </a>
      </div>
      <div id="aside" className="header-navlinks">
        <ul className="header-menu">
          <li className="header-dropdown">
            <a href="">Giới thiệu</a>
            <i className="fa-solid fa-caret-down" />
            <div className="dropdown-list">
              <a href="/web/gioi-thieu-chung.html" className="dropdown-item"
                >Giới thiệu chung</a
              >
              <a href="/web/sumenhtamnhin.html" className="dropdown-item"
                >Sứ mệnh - Tầm nhìn</a
              >
              <a href="#" className="dropdown-item">Đối tác công nghệ</a>
            </div>
          </li>
          <li className="header-dropdown">
            <a href="">Giải pháp - Dự án</a>
            <i className="fa-solid fa-caret-down" />
            <div className="dropdown-list">
              <a href="#" className="dropdown-item">Giải pháp</a>
              <a href="#" className="dropdown-item">Dự án</a>
            </div>
          </li>
          <li>
            <a href="#">Văn hoá nội bộ</a>
          </li>
          <li>
            <a href="https://vietnampost.vn/tin-tuc">Tin tức</a>
          </li>
          <li>
            <a href="#">Cơ hội nghề nghiệp</a>
          </li>
          <li className="header-dropdown">
            <a href="">Liên hệ hỏi đáp</a>
            <i className="fa-solid fa-caret-down" />
            <div className="dropdown-list">
              <a href="#" className="dropdown-item">IT Helpdesk</a>
              <a href="#" className="dropdown-item">Email</a>
              <a href="#" className="dropdown-item">E-Office</a>
              <a href="#" className="dropdown-item">Lịch trực</a>
              <a href="#" className="dropdown-item">DASHBOARD</a>
            </div>
          </li>
        </ul>
      </div>
      <div id="btn-toggle" className="nav-toggle">
        <i className="fa-solid fa-bars-staggered fa-xl" />
      </div>
    </div>
  </header>
  )
}

export default Header