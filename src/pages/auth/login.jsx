import React, { useEffect, useState } from "react";
import signUpImage from "/img/login/signup_image.jpg";
import Input from "../../components/input";
import Alert, { notify } from "../../components/alert";
import { loginRequest, socialLoginRequest } from "../../api/auth";
import Cookies from "js-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const [token, role] = [Cookies.get("token"), Cookies.get("role")];

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [googleLoginData, setGoogleLoginData] = useState({
    name: "",
    email: "",
    provider: "",
    key: "",
  });

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);
      if (userInfo) {
        setGoogleLoginData({
          name: userInfo.name,
          email: userInfo.email,
          provider: "Google",
          key: userInfo.sub,
        });
      }
    },
  });

  useEffect(() => {
    if (
      googleLoginData.name &&
      googleLoginData.email &&
      googleLoginData.provider &&
      googleLoginData.key
    ) {
      socialLoginRequest({ ...googleLoginData })
        .then((res) => {
          Cookies.set("id", res.data.id, { expires: 1 });
          Cookies.set("token", res.data.token, { expires: 1 });
          Cookies.set("email", res.data.email, { expires: 1 });
          Cookies.set("name", res.data.name, { expires: 1 });
          Cookies.set("role", res.data.role, { expires: 1 });

          navigate("/dashboard");
          notify("Login successfully", "success");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Social login request failed:", error);
        });
    }
  }, [googleLoginData]);

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest({
      email: email ? email : loginData.email,
      password: loginData.password,
    })
      .then((res) => {
        if (res.code == 200) {
          Cookies.set("id", res.data.id, { expires: 1 });
          Cookies.set("token", res.data.token, { expires: 1 });
          Cookies.set("email", res.data.email, { expires: 1 });
          Cookies.set("name", res.data.name, { expires: 1 });
          Cookies.set("role", res.data.role, { expires: 1 });
          notify("login successfully", "success");
          navigate("/dashboard");
          window.location.reload();
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

  const responseFacebook = (response) => {
    console.log(response);
  };

  const componentClicked = (data) => {
    console.log(data);
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

                          {/* <FacebookLogin
                            appId="1748716342291872"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook}
                          /> */}
                          
                          <div className="social-link social-link--02">
                            <Link
                              href="#"
                              className="g"
                              onClick={() => googleLogin()}
                            >
                              Login in with Google
                            </Link>
                            <Link href="#" className="fb">
                              Login in with Facebook
                            </Link>
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
