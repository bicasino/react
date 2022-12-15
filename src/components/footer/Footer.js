import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4 col-xs-12 row-left'>
            <div className='company'>
              <div className='company-info'>
                <img src={'/assets/images/footerlogo.png'} alt='' />
              </div>
              <div className='company-name'>
                <strong>
                  Trung tâm Công nghệ thông tin - Tổng công ty Bưu Điện Việt Nam
                </strong>
              </div>
              <div className='company-li'>
                <span className='fa-solid fa-location-dot'></span>
                Địa chỉ: Số 05 đường Phạm Hùng - Mỹ Đình 2 - Nam Từ Liêm - Hà
                Nội - Việt Nam
              </div>
              <div className='company-li'>
                <span className='fa-solid fa-phone'></span>
                Điện thoại: 0243.768.9363
              </div>
              <div className='company-li'>
                <span className='fa-solid fa-envelope'></span>
                Email: cntt@vnpost.vn
              </div>
            </div>
          </div>
          <div className='col-sm-2 col-xs-12 visible'>
            <div className='box-footer'>
              <div className='title'>GIỚI THIỆU</div>
              <ul className='menus'>
                <li>
                  <a href='/web/gioi-thieu-chung.html'>Giới thiệu chung</a>
                </li>
                <li>
                  <a href='/web/co-cau-to-chuc.html'>Cơ cấu tổ chức</a>
                </li>
                <li>
                  <a href='/web/sumenhtamnhin.html'>Tầm nhìn, Sứ mệnh</a>
                </li>
                <li>
                  <a href='/web/doi-tac-cong-nghe.html'>Đối tác, Khách hàng</a>
                </li>
                <li>
                  <a href='#'>Nguồn lực</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-2 col-xs-12 visible'>
            <div className='box-footer'>
              <div className='title'>TIN TỨC</div>
              <ul className='menus'>
                <li>
                  <a href='/web/tintuc.html'>Tin VNPOST</a>
                </li>
                <li>
                  <a href='/web/tintuc.html'>Tin IT - VNPOST</a>
                </li>
                <li>
                  <a href='#'>Phản hồi của khách hàng</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-sm-2 col-xs-12 visible'>
            <div className='box-footer'>
              <div className='title'>SẢN PHẨM - DỊCH VỤ</div>
              <ul className='menus'>
                <li>
                  <a href='/web/giai-phap.html'>Giải pháp Doanh nghiệp</a>
                </li>
                <li>
                  <a href='/web/giai-phap.html'>Giải pháp Giáo dục</a>
                </li>
                <li>
                  <a href='/web/giai-phap.html'>An toàn bảo mật</a>
                </li>
                <li>
                  <a href='/web/giai-phap.html'>Trung tâm dữ liệu</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-sm-2 col-xs-12'>
            <div className='box-footer'>
              <div className='title'>Kết nối</div>
              <ul className='social'>
                <li>
                  <a
                    href='https://www.facebook.com/VNPostIT/'
                    className='btn fb'
                    target='_blank'
                  >
                    <span className='icon fa fa-facebook'></span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.youtube.com/channel/UCEVc8VAItMsg9Hg6J-H3xmQ'
                    className='btn yt'
                    target='_blank'
                  >
                    <span className='icon fa fa-youtube-play'></span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/vietnam_post'
                    className='btn tt'
                    target='_blank'
                  >
                    <span className='icon fa fa-twitter'></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='copyright'>
          Thành viên của
          <span className='img'>
            <img
              src={'/assets/images/logo_white.png'}
              alt=''
              style={{ height: '30px' }}
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
