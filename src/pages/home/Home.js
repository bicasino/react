import React from 'react'

const Home = () => {
  return (
    <main>
      <section className="container-fluid">
        <div className="hero-slides">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={'/assets/images/hero.png'} alt="Slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={'/assets/images/hero1.png'} alt="Slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={'/assets/images/hero2.png'} alt="Slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={'/assets/images/hero3.png'} alt="Slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      <section className="solution">
        <div className="container">
          <div className="solution-head">
            <h1 className="solution-heading">Giải Pháp</h1>
          </div>
          <div className="solution-content">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div className="solution-item">
                  <h3 className="title">
                    <a href="#" className="url">Giải pháp Chính phủ điện tử</a>
                  </h3>
                  <p className="desc">
                    Vietnam Post nghiên cứu, phát triển các giải pháp dành cho
                    Chính phủ điện tử, chính quyền điện tử các cấp.
                  </p>
                  <div className="actions">
                    <a href="/web/giai-phap.html" className="btn-readmore"
                      >Xem thêm</a
                    >
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                <div className="solution-item">
                  <h3 className="title">
                    <a href="#" className="url">Giải pháp doanh nghiệp</a>
                  </h3>
                  <p className="desc">
                    Vietnam Post cung cấp các giải pháp hỗ trợ các doanh nghiệp
                    vừa và nhỏ hiện đại hoá quản trị, nâng cao năng suất lao
                    động, hiệu quả kinh doanh.
                  </p>
                  <div className="actions">
                    <a href="/web/giai-phap.html" className="btn-readmore"
                      >Xem thêm
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                <div className="solution-item">
                  <h3 className="title">
                    <a href="#" className="url">Giải pháp Đô thị thông minh</a>
                  </h3>
                  <p className="desc">
                    Vietnam Post cung cấp bộ các sản phẩm, giải pháp phần cứng
                    và phần mềm để triển khai mô hình đô thị thông minh.
                  </p>
                  <div className="actions">
                    <a href="/web/giai-phap.html" className="btn-readmore"
                      >Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project">
        <div className="container">
          <div className="project-head">
            <h1 className="project-heading">Dự án</h1>
          </div>
          <div className="project-content">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div className="project-item">
                  <img src={'/assets/images/postmart.png'} alt="" />
                  <h3 className="title">
                    <a href="/web/postmart.html" className="url"
                      >Sàn thương mại điện tử postmart</a
                    >
                  </h3>
                  <p className="desc">
                    POSTMART là sàn giao dịch thương mại điện tử được sáng lập
                    bởi Tổng Công ty Bưu Điện Việt Nam (VNPost)
                  </p>
                  <div className="actions">
                    <a
                      href="/web/postmart.html"
                      className="btn-readmore"
                      target="_blank"
                      >Xem thêm</a
                    >
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                <div className="project-item">
                  <img src={'/assets/images/hesinhthai.jpeg'} alt="" />
                  <h3 className="title">
                    <a href="/web/hesinhthaibuudien.html" className="url"
                      >Hệ sinh thái Bưu điện</a
                    >
                  </h3>
                  <p className="desc">
                    Với mong muốn mang lại những trải nghiệm và tiện ích hoàn
                    toàn mới cho người dùng trong lĩnh vực hành chính công,
                    những ngày đầu xuân năm mới 2021, Bưu điện Việt Nam (Vietnam
                    Post) đã chính thức đưa hệ sinh thái hành chính công vào ứng
                    dụng thực tế.
                  </p>
                  <div className="actions">
                    <a
                      href="/web/hesinhthaibuudien.html"
                      className="btn-readmore"
                      target="_blank"
                      >Xem thêm
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                <div className="project-item">
                  <img src={'/assets/images/vmap.png'} alt="" />
                  <h3 className="title">
                    <a href="/web/Vmap.html" className="url">Bản đồ số VMAP</a>
                  </h3>
                  <p className="desc">
                    Ngày 05/11/2019 tại Hà Nội, Tổng công ty Bưu điện Việt Nam,
                    Văn phòng thường trực đề án “Phát triển Hệ tri thức Việt số
                    hoá"
                  </p>
                  <div className="actions">
                    <a
                      href="/web/Vmap.html"
                      className="btn-readmore"
                      target="_blank"
                      >Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <div className="news-head">
            <h1 className="news-heading">Tin tức</h1>
          </div>
          <div className="news-content">
            <div className="row">
              <div className="col-sm-8 col-xs-12">
                <h3 className="second-title">
                  <span className="text"> Tin Tức VNPOST</span>
                </h3>
                <div className="news-box">
                  <div className="row">
                    <div className="col-sm-6 col-xs-12 item">
                      <a href="#" className="news-image">
                        <img src={'/assets/images/tuyendung.png'} alt="" />
                      </a>
                      <h4 className="title">
                        <a
                          href="/chi-tiet-tuyen-dung/react-native.html"
                          className="link"
                          >Tuyển dụng IT VNPOST</a
                        >
                      </h4>
                    </div>

                    <div className="col-sm-6 col-xs-12 item">
                      <a href="#" className="news-image">
                        <img src={'/assets/images/vnpost_hoptac.png'} alt="" />
                      </a>
                      <h4 className="title">
                        <a href="/chi-tiet-tin/vnpost-hanjin.html" className="link"
                          >Vietnam Post và Hanjin hợp tác triển khai nhiều dự án
                          Logistics</a
                        >
                      </h4>
                    </div>

                    <div className="col-sm-6 col-xs-12 item">
                      <a href="#" className="news-image">
                        <img src={'/assets/images/hoinghi.png'} alt="" />
                      </a>
                      <h4 className="title">
                        <a
                          href="/chi-tiet-tin/tang-cuong-cong-tac-lanh-dao.html"
                          className="link"
                          >Tăng cường công tác lãnh đạo, chỉ đạo, quyết tâm phấn
                          đấu hoàn thành cao nhất mục tiêu kế hoạch năm 2022</a
                        >
                      </h4>
                    </div>

                    <div className="col-sm-6 col-xs-12 item">
                      <a href="#" className="news-image">
                        <img src={'/assets/images/gala.png'} alt="" />
                      </a>
                      <h4 className="title">
                        <a
                          href="/chi-tiet-tin/vnpost-to-chuc-chuong-trinh-tri-an.html"
                          className="link"
                          >Vietnam Post tổ chức chương trình tri ân khách hàng
                          đặc biệt dịp cuối năm</a
                        >
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                <h3 className="second-title">
                  <span className="text"> PHẢN HỒI KHÁCH HÀNG</span>
                </h3>
                <div className="customersay">
                  <a href="#" className="cus-image">
                    <img src={'/assets/slides/customer1.jpeg'} alt="" />
                  </a>
                  <h5 className="mess">
                    Tôi rất thích các sản phẩm của VNPOST-IT, các bạn cần phát
                    triển thêm nhiều sản phẩm để phù hợp với nhiều đối tượng hơn
                    nữa
                  </h5>
                </div>
                <div className="customersay">
                  <a href="#" className="cus-image">
                    <img src={'/assets/slides/customer2.jpeg'} alt="" />
                  </a>
                  <h5 className="mess">
                    Chúng tôi rất hài lòng với những dịch vụ mà công ty cung
                    cấp. Nó giúp doanh nghiệp chúng tôi hoạt động tốt hơn, hiệu
                    quả hơn
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home