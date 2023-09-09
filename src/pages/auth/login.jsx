import React, { useState } from "react";
import iconUserImage from "../../../public/img/header/icon_user.png";
import signUpImage from "../../../public/img/login/signup_image.jpg";
import Input from "../../components/input";
import Footer from "../../components/footer";
import { notify } from "../../components/alert";
import { loginRequest } from "../../api/auth";
import Cookies from "js-cookie";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest({ email: loginData.email, password: loginData.password })
      .then((res) => {
        console.log(res);
        if (res.code == 200) {
          Cookies.set("token", res.data.token, { expires: 1 });
          Cookies.set("email", res.data.email, { expires: 1 });
          Cookies.set("name", res.data.name, { expires: 1 });
          notify("login successfully", "success");
        }
      })
      .catch((err) => {
        notify("login unsuccess", "error");
      });
  };

  return (
    <div id="wrap">
      {/* <div className="project-wrap"> */}
      {/*         
        <header className="header">
          <div className="header__inner">
            <div className="logo">
              <a href="/">
                <img alt="" />
              </a>
            </div>
            <div className="nav-menu">
              <ul className="nav-menu__list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Information</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
              </ul>
              <ul className="nav-menu__icon">
                <li>
                  <a href="#" className="login">
                    <img src={iconUserImage} alt="" />
                  </a>
                </li>
              </ul>
            </div>

            <div id="nav">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Information</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </header> */}

      <section className="l-content-area">
        <div className="l-content">
          <section className="p-bloc p-bloc--login">
            <div className="p-bloc__content l-wrap__outer">
              <div className="l-wrap__inner">
                <div className="form-area">
                  <div className="img-box">
                    <img src={signUpImage} alt="Login" />
                  </div>
                  <div className="txt-box">
                    <div className="txt-box__inner">
                      <h2 className="title">Login</h2>
                      <p className="desc">
                        If you don't have an account, you can create{""}
                        <a href="#" target="_self">
                          here.
                        </a>
                      </p>

                      <form
                        action="/"
                        method="get"
                        className="form"
                        onSubmit={handleLogin}
                      >
                        <ul>
                          <li>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Email"
                              required
                              onChange={(e) => {
                                setLoginData({
                                  ...loginData,
                                  email: e.target.value,
                                });
                              }}
                            />
                          </li>
                          <li>
                            <Input
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Password"
                              required
                              onChange={(e) => {
                                setLoginData({
                                  ...loginData,
                                  password: e.target.value,
                                });
                              }}
                            />
                          </li>
                        </ul>

                        <div className="c-btn">
                          <p className="btn">
                            <input type="submit" value="Sign In" />
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* </div> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Login;
