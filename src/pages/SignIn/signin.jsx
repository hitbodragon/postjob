import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";

import { LoginService } from "../../ApiServices/AuthService/loginService";

const SignIn = () => {
  const [validate, setValidate] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  //Call API Login
  const { loginResponse, loginIsLoading, loginError, callLoginRefetch } =
    LoginService();

  useEffect(() => {
    if (loginResponse) {
      if (loginResponse.success) {
        localStorage.setItem("admin", loginResponse.data.admin);
        localStorage.setItem("email", loginResponse.data.email);
        localStorage.setItem("iduser", loginResponse.data.id);
        localStorage.setItem("userName", loginResponse.data.userName);
        localStorage.setItem("role", loginResponse.data.role);
        localStorage.setItem("token", loginResponse.data.matKhau);
        // navigate('/user');

        // Phân quyền dựa trên role
        const role = loginResponse.data.role;
        if (role === "USER") {
          navigate("/user");
        } else if (role === "HR") {
          navigate("/user/myCongTy");
        } else if (role === "ADMIN") {
          navigate("/user/QuanLyUser");
        }
      } else {
        alert(loginResponse.message);
      }
    }
  }, [loginResponse]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!validate) {
      let data = {
        username: formData.username.trimEnd(),
        password: formData.password.trimEnd(),
      };
      // console.log(data);
      callLoginRefetch(data);
    }

    // if(validate){
    //     e.preventDefault();
    //     callLoginRefetch(formData);
    // }
  };
  const handleChange = (e) => {
    if (e.target.value.length < 6) {
      setValidate(true);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      setValidate(false);
    }
  };
  const handleChangeUsername = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      username: e.target.value,
    }));
  };
  return (
    <div className="background-Login">
      <div className="signin-layout">
        <Form onSubmit={handleOnSubmit}>
          <h3>Đăng nhập Pjob</h3>
          <Form.Group className="mb-3">
            <Form.Label>Tên người dùng</Form.Label>
            <Form.Control
              value={formData.username}
              onChange={handleChangeUsername}
              name="username"
              type="text"
              placeholder="Nhập tên người dùng"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Mật khẩu"
            />
            {validate ? (
              <span style={{ color: "red" }}>
                Mật khẩu tối thiểu 6 ký tự !!!
              </span>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Label>
            <a style={{ color: "white" }} href="/QuenMatKhau">
              Quên Mật khẩu
            </a>
          </Form.Label>
          <Button
            type="submit"
            variant="success"
            className="SignIn--btn"
            size="md"
            block="true"
          >
            Đăng nhập
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
