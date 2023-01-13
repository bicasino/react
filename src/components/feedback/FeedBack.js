import React from "react";

const FeedBack = () => {
  return (
    <div className="col-sm-4 col-xs-12">
      <h3 className="second-title">
        <span className="text"> PHẢN HỒI KHÁCH HÀNG</span>
      </h3>
      <div className="customersay">
        <a href="#" className="cus-image">
          <img src={"/assets/slides/customer1.jpeg"} alt="" />
        </a>
        <h5 className="mess">
          Tôi rất thích các sản phẩm của VNPOST-IT, các bạn cần phát triển thêm
          nhiều sản phẩm để phù hợp với nhiều đối tượng hơn nữa
        </h5>
      </div>
      <div className="customersay">
        <a href="#" className="cus-image">
          <img src={"/assets/slides/customer2.jpeg"} alt="" />
        </a>
        <h5 className="mess">
          Chúng tôi rất hài lòng với những dịch vụ mà công ty cung cấp. Nó giúp
          doanh nghiệp chúng tôi hoạt động tốt hơn, hiệu quả hơn
        </h5>
      </div>
    </div>
  );
};

export default FeedBack;
