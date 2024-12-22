import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Nav, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = useState();

  const location = useLocation()

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "nn active--navbar" : "nn"}>
      <div>
        <Row className="containerh">
          <Col className="col1">
            {/* <div className="faBars-icon">
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                color={"black"}
                id="barIcon"
              />
            </div> */}
            <div className="nm">
              <Nav.Link as={Link} to="/" className="logoHome">
                <svg
                  id="logoHome"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="xMidYMid meet"
                  width="89"
                  height="auto"
                >
                  <g
                    transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path d="M963 3521 c-45 -12 -81 -37 -103 -74 -17 -28 -20 -51 -20 -174 l0 -141 -222 -4 c-187 -3 -228 -6 -254 -20 -43 -24 -82 -72 -89 -111 -3 -18 -5 -345 -3 -728 l3 -696 29 -37 c53 -70 -3 -67 1010 -64 906 3 915 3 942 24 15 11 37 33 48 48 21 27 21 38 24 724 2 383 0 712 -3 730 -3 18 -22 51 -41 72 -47 52 -90 60 -323 60 l-188 0 -5 138 c-5 154 -14 183 -75 229 l-36 28 -331 2 c-182 1 -346 -2 -363 -6z m676 -86 c16 -8 31 -22 35 -30 3 -9 6 -75 6 -146 l0 -129 -39 0 -39 0 -4 70 c-4 82 -24 114 -88 148 -41 20 -58 22 -210 22 -139 0 -171 -3 -206 -19 -61 -28 -88 -72 -92 -153 l-4 -68 -39 0 -39 0 0 133 c0 138 4 153 45 175 13 8 126 11 333 12 256 0 318 -3 341 -15z m-142 -177 c18 -17 23 -32 23 -75 l0 -53 -220 0 -220 0 0 52 c0 39 5 57 22 75 21 22 26 23 197 23 166 0 176 -1 198 -22z m728 -243 l25 -24 0 -291 0 -291 -25 -24 -24 -25 -361 0 -360 0 0 68 c0 40 -5 73 -12 80 -15 15 -301 17 -329 2 -16 -9 -19 -22 -19 -80 l0 -70 -360 0 -361 0 -24 25 -25 24 0 291 0 291 25 24 24 25 901 0 901 0 24 -25z m-825 -666 c0 -87 -1 -92 -29 -120 -39 -38 -97 -40 -138 -5 -26 23 -28 29 -31 120 l-4 96 101 0 101 0 0 -91z m-644 -69 l362 0 7 -27 c9 -38 50 -91 89 -114 38 -23 124 -25 165 -5 39 21 88 79 96 115 l7 31 361 0 c199 0 372 3 385 6 l22 6 0 -346 0 -347 -25 -24 -24 -25 -895 0 c-492 0 -902 3 -911 6 -42 16 -45 47 -45 400 l0 336 23 -6 c12 -3 185 -6 383 -6z" />
                    <path d="M3789 2590 c-124 -21 -183 -100 -183 -245 0 -165 79 -248 234 -248 156 0 233 81 233 248 0 86 -17 141 -56 183 -49 53 -137 76 -228 62z m104 -120 c34 -27 50 -80 45 -147 -15 -172 -198 -154 -198 20 0 117 81 184 153 127z" />
                    <path d="M2600 2346 l0 -246 65 0 65 0 0 79 0 78 55 6 c107 11 165 69 165 166 0 38 -6 66 -20 88 -32 53 -70 66 -207 71 l-123 4 0 -246z m208 122 c33 -33 0 -98 -50 -98 -27 0 -28 1 -28 55 l0 55 33 0 c18 0 38 -5 45 -12z" />
                    <path d="M3210 2348 c0 -282 -2 -291 -68 -296 l-42 -3 0 -50 0 -49 64 0 c73 0 117 23 150 80 20 32 21 54 24 298 l3 262 -65 0 -66 0 0 -242z" />
                    <path d="M4340 2346 l0 -246 113 0 c134 0 180 11 224 55 29 29 33 40 33 83 0 40 -6 57 -26 81 -14 17 -32 31 -41 31 -9 0 0 13 21 34 31 28 36 40 36 77 0 95 -47 121 -227 127 l-133 5 0 -247z m211 134 c43 -24 11 -80 -47 -80 -34 0 -34 0 -34 45 0 44 1 45 31 45 17 0 39 -5 50 -10z m17 -197 c30 -40 -4 -83 -65 -83 l-33 0 0 56 0 57 43 -7 c23 -4 48 -14 55 -23z" />
                  </g>
                </svg>
              </Nav.Link>
              <div className={navbar ? "searchBar" : "searchBar searchbarhide"}>
                <Form inline="true">
                  {/* <Row className="form-search" style={{ margin: 0 }}>
                    <Col style={{ padding: 6 + "px" }}>
                      <FontAwesomeIcon
                        icon={faSearch}
                        size="1x"
                        color="black"
                        id="searchIcon"
                      />
                    </Col>
                    <Col>
                      <FormControl
                        type="text"
                        placeholder="Tìm kiếm công việc"
                        className="mr-lg-0"
                      />
                    </Col>
                    <Col>
                      <Button
                        className="btnn btn"
                        style={{
                          width: 100 + "px",
                        }}
                      >
                        Tìm kiếm
                      </Button>
                    </Col>
                  </Row> */}
                </Form>
              </div>
            </div>
          </Col>
         {!location.pathname.includes('user') && <ul className="nvegation col">
            <li className="ll">
              <a href="/" className={navbar ? "linkcolor" : "disactivecolor"}>
                Trang chủ
              </a>
            </li>
            {/* <li className="sli">
              <a href="/" className={navbar ? "linkcolor" : "disactivecolor"}>
                Hồ sơ & CV
              </a>
            </li>
            <li className="sli">
              <a href="/" className={navbar ? "linkcolor" : "disactivecolor"}>
                <FontAwesomeIcon
                  className={navbar ? "linkcolor" : "disactivecolor"}
                  icon={faGlobe}
                  size="1x"
                  color="black"
                  id="globeIcon"
                />
                <span>English</span>
              </a>
            </li>
            <li className="tli">
              <a href="/" className={navbar ? "linkcolor" : "disactivecolor"}>
                Công ty
              </a>
            </li>
            <li className="tli">
              <a href="/" className={navbar ? "linkcolor" : "disactivecolor"}>
                Phát triển{" "}
              </a>
            </li> */}
            <li className={navbar ? "signinli linkcolor" : "signinli disactivecolor"}>
              <Link to="/signin" className={navbar ? "linkcolor" : "disactivecolor"}>
                Đăng nhập
              </Link>
            </li>
            <li className="bli">
              <Link to="/join" className={navbar ? "linkcolor" : "disactivecolor"}>
                <Button variant="outline-success">Đăng ký</Button>
              </Link>
            </li>
          </ul>}
        </Row>
      </div>
    </div>
  );
}
export default Header;
