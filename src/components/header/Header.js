import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-logo'>
          <Link to='/' className='logo'>
            <img src={'/assets/images/logo1.png'} alt='' />
          </Link>
        </div>
        <div id='aside' className='header-navlinks'>
          <ul className='header-menu'>
            <li className='header-dropdown'>
              <a href=''>Giới thiệu</a>
              <i className='fa-solid fa-caret-down' />
              <div className='dropdown-list'>
                <a href='/web/gioi-thieu-chung.html' className='dropdown-item'>
                  Giới thiệu chung
                </a>
                <a href='/web/sumenhtamnhin.html' className='dropdown-item'>
                  Sứ mệnh - Tầm nhìn
                </a>
                <a href='/web/doi-tac-cong-nghe.html' className='dropdown-item'>
                  Đối tác công nghệ
                </a>
              </div>
            </li>
            <li className='header-dropdown'>
              <a href=''>Giải pháp - Dự án</a>
              <i className='fa-solid fa-caret-down' />
              <div className='dropdown-list'>
                <a href='/web/giai-phap.html' className='dropdown-item'>
                  Giải pháp
                </a>
                <a href='/web/du-an.html' className='dropdown-item'>
                  Dự án
                </a>
              </div>
            </li>
            <li>
              <a href='/web/van-hoa-noi-bo.html'>Văn hoá nội bộ</a>
            </li>
            <li>
              <Link to='/posts'>Tin tức</Link>
            </li>
            <li>
              <Link to='/recuitment'>Cơ hội nghề nghiệp</Link>
              {/* <a href='/web/co-hoi-nghe-nghiep.html'>Cơ hội nghề nghiệp</a> */}
            </li>
            <li className='header-dropdown'>
              <a href=''>Liên hệ hỏi đáp</a>
              <i className='fa-solid fa-caret-down' />
              <div className='dropdown-list'>
                <a
                  href='https://itsm.vnpost.vn'
                  target='_blank'
                  className='dropdown-item'
                >
                  IT Helpdesk
                </a>
                <a
                  href='https://mail.vnpost.vn'
                  target='_blank'
                  className='dropdown-item'
                >
                  Email
                </a>
                <a
                  href='https://eoffice.vnpost.vn/qlvbdh/main?lang=vi'
                  target='_blank'
                  className='dropdown-item'
                >
                  E-Office
                </a>
                <a href='#' className='dropdown-item'>
                  Lịch trực
                </a>
                <a href='#' className='dropdown-item'>
                  DASHBOARD
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div id='btn-toggle' className='nav-toggle'>
          <i className='fa-solid fa-bars-staggered fa-xl' />
        </div>
      </div>
    </header>
  );
};

export default Header;
