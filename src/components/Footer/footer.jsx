import React from "react";
import "./Footer.css";
import logo from '../../accets/pjob.png'; // Đường dẫn chính xác tới file ảnh

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-col">
          <h5 className="Footer-title">Danh mục</h5>
          <ul>
            <li>
              <a href="/user/message">Tin nhắn</a>
            </li>
          </ul>
        </div>
        <div className="Footer-col">
          <h5 className="Footer-title">Tác giả</h5>
          <ul>
            <li>
              <b>Hồ Thái Đạt</b> N20DCCN014
            </li>
            <li>
              <b>Đỗ Xuân Minh</b> N20DCCN041
            </li>
            <li>
              <b>Văn Trung Tín</b> N20DCCN137
            </li>
            <li>Lớp D20CQCNPM01-N</li>
          </ul>
        </div>
        <div className="Footer-col">
          <h5 className="Footer-title">Giảng viên hướng dẫn</h5>
          <ul>
            <li>
              Thạc sỹ <b>Huỳnh Trung Trụ</b>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <span className="fiverr-logo-footer">
          <img src={logo} alt="Pjob Logo" width="91" height="45" />
        </span>
        <p className="text-body-2 legal">
          <span className="copyright text-trunc">
            © Pjob International Ltd. 2024
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

