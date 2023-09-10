import React, { useEffect, useState } from "react";
import iconUserImage from "../../../public/img/header/icon_user.png";
import signUpImage from "../../../public/img/login/signup_image.jpg";
import Input from "../../components/input";
import Alert, { notify } from "../../components/alert";
import { loginRequest } from "../../api/auth";
import Cookies from "js-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const [token, role] = [Cookies.get("token"), Cookies.get("role")];

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest({
      email: email ? email : loginData.email,
      password: loginData.password,
    })
      .then((res) => {
        console.log(res);
        if (res.code == 200) {
          Cookies.set("token", res.data.token, { expires: 1 });
          Cookies.set("email", res.data.email, { expires: 1 });
          Cookies.set("name", res.data.name, { expires: 1 });
          Cookies.set("role", res.data.role, { expires: 1 });
          notify("login successfully", "success");
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response.data.code == 401) {
          notify(err.response.data.message, "error");
        } else {
          notify("login failed", "error");
        }
      });
  };

  return (
    <div id="wrap">
      <div className="project-wrap">
        <section className="l-content-area">
          <Alert />
          <div className="l-content">
            <section className="p-bloc p-bloc--login">
              <div className="p-bloc__content l-wrap__outer">
                <div className="l-wrap__inner">
                  <div className="form-area">
                    <div className="img-box">
                      <img src={signUpImage} alt="Login" />
                    </div>
                    <motion.div
                      initial={{ y: "0px", opacity: 0 }}
                      animate={{ y: "0px", opacity: 1 }}
                      className="txt-box"
                    >
                      <div className="txt-box__inner">
                        <h2 className="title">Login</h2>
                        <p className="desc">
                          If you don't have an account, you can create{" "}
                          <Link href="#" target="_self" to="/register">
                            here.
                          </Link>
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
                                value={email ? email : loginData.email}
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
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
