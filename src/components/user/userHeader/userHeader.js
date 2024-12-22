import { useEffect, useState } from "react";
import { Row, Col, NavDropdown, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "./userHeader.css";
import userImg from "../../../accets/img_form/user.jpg";
//import logoImg from "../../../accets/pjob.png"; // Import logo image
import { FormThemEmail } from "../../FormInput/FormThemEmail/FormThemEmail";
import { FormDoiMatKhau } from "../../FormInput/FormDoiMatKhau/FormDoiMatKhau";

// Call API Information User
import { GetCVByIDService } from "../../../ApiServices/AuthService/getCVByID";
import { GetCongTyByIDService } from "../../../ApiServices/AuthService/getCongTyByID";

const UserHeader = () => {
  const [toggleThemEmail, setToggleThemEmail] = useState(false);
  const [toggleDoiPass, setToggleDoiPass] = useState(false);
  const role = localStorage.getItem("role");

  const {getCVByIDResponse} = GetCVByIDService();
  const {getCongTyByIDResponse} = GetCongTyByIDService();

  // Kiểm tra nếu chưa đăng nhập thì trở về trang chủ
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user]);

  useEffect(() => {
    if (getCVByIDResponse) {
      if (getCVByIDResponse.data) {
        localStorage.setItem("idCV", getCVByIDResponse.data[0].id);
      }
    }
  }, [getCVByIDResponse]);

  useEffect(() => {
    if (getCongTyByIDResponse) {
      if (getCongTyByIDResponse.data) {
        localStorage.setItem("idCongTy", getCongTyByIDResponse.data[0].id);
      }
    }
  }, [getCVByIDResponse]);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("email");
    localStorage.removeItem("iduser");
    localStorage.removeItem("userName");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("idChiNhanh");
    localStorage.removeItem("idCV");
    localStorage.removeItem("idCongTy");
    setUser(localStorage.getItem("token"));
  };

  return (
    <div className="userMenu">
      <Row>
        <Col sm="9">
          {role === "USER" ? (
            <ul>
              <li>
                <Link to="/user">
                  <img
                    id="logoHome"
                    src={require("../../../accets/pjob.png")}
                    alt="Logo"
                    width="89"
                    height="auto"
                  />
                </Link>
              </li>
              <li>
                <Link to="/user/message">Tin nhắn</Link>
              </li>
              <li>
                <Link to="/user/myCV">Quản lý hồ sơ</Link>
              </li>
              <li>
                <Link to="/user/myJob">Việc làm đã ứng tuyển</Link>
              </li>
            </ul>
          ) : role === "HR" ? (
            <ul>
              <li>
                <Link to="/user/myCongTy">
                  <img
                    id="logoHome"
                    src={require("../../../accets/pjob.png")}
                    alt="Logo"
                    width="89"
                    height="auto"
                  />
                </Link>
              </li>
              <li>
                <Link to="/user/message">Tin nhắn</Link>
              </li>
              <li>
                <Link to="/user/myCongTy">Công ty</Link>
              </li>
              <li>
                <Link to="/user/postRequest">Tạo bài đăng</Link>
              </li>
              <li>
                <Link to="/user/myPost">Quản lý bài đăng</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/user/QuanLyUser">
                  <img
                    id="logoHome"
                    src={require("../../../accets/pjob.png")}
                    alt="Logo"
                    width="89"
                    height="auto"
                  />
                </Link>
              </li>
              <li>
                <Link to="/user/QuanLyUser">Quản lý ứng viên</Link>
              </li>
              <li>
                <Link to="/user/QuanLyCVUsers">Quản lý hồ sơ ứng viên</Link>
              </li>
              <li>
                <Link to="/user/QuanLyCongTy">Quản lý nhà tuyển dụng</Link>
              </li>
              <li>
                <Link to="/user/QuanLyBaiDang">Quản lý bài đăng</Link>
              </li>
              <li>
                <Link to="/user/QuanLyDiaChi">Quản lý địa chỉ công ty</Link>
              </li>
            </ul>
          )}
        </Col>
        <Col sm="3">
          <ul className="user-navbar">
            <li>
              <img
                className="userImg"
                src={userImg}
                width="35px"
                height="35px"
                alt="userImg"
              />
            </li>
            {getCVByIDResponse && getCVByIDResponse.success && getCVByIDResponse.data[0] ? (
              <li style={{ minWidth: "120px" }}>
                <span className="userName">
                  {getCVByIDResponse.data[0].ho} {getCVByIDResponse.data[0].ten}
                </span>
              </li>
            ) : null}
            {/* <li style={{ minWidth: " 120px" }}>
              <span className="userName">
                {getCVByIDResponse
                  ? getCVByIDResponse.success
                    ? getCVByIDResponse.data[0].ho
                    : ""
                  : ""}{" "}
                {getCVByIDResponse
                  ? getCVByIDResponse.success
                    ? getCVByIDResponse.data[0].ten
                    : ""
                  : ""}
              </span>
            </li> */}
            <NavDropdown title=" " id="username">
              <Nav.Link as={Link} onClick={() => setToggleThemEmail(true)}>
                Đổi địa chỉ email
              </Nav.Link>
              <Nav.Link as={Link} onClick={() => setToggleDoiPass(true)}>
                Đổi mật khẩu
              </Nav.Link>
              <Nav.Link as={Link} onClick={handleLogout}>
                Đăng xuất
              </Nav.Link>
            </NavDropdown>
          </ul>
        </Col>
      </Row>
      {toggleThemEmail ? (
        <div className="modalForm" onClick={() => setToggleThemEmail(false)}>
          <FormThemEmail setToggleThemEmail={setToggleThemEmail} />
        </div>
      ) : (
        ""
      )}
      {toggleDoiPass ? (
        <div className="modalForm" onClick={() => setToggleDoiPass(false)}>
          <FormDoiMatKhau setToggleDoiPass={setToggleDoiPass} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserHeader;
