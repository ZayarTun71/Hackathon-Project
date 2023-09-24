import React, { useEffect, useState } from "react";
import Input from "../../components/main_page/input";
import { loginRequest, socialLoginRequest } from "../../api/auth";
import Cookies from "js-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGoogleLogin} from "@react-oauth/google";
import {Alert,notify} from "../../components/main_page/alert"
import axios from "axios";
import Dashboard from "..";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

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
          // Cookies.set("id", res.data.id, { expires: 1 });
          // Cookies.set("token", res.data.token, { expires: 1 });
          // Cookies.set("email", res.data.email, { expires: 1 });
          // Cookies.set("name", res.data.name, { expires: 1 });
          // Cookies.set("role", res.data.role, { expires: 1 });

          // navigate("/dashboard");
          notify("Login successfully", "success");
          // window.location.reload();
        })
        .catch((error) => {
          console.error("Social login request failed:", error);
        });
    }
  }, [googleLoginData]);

  const route = Cookies.get("route");

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest({
      email: email ? email : loginData.email,
      password: loginData.password,
    })
      .then((res) => {
        console.log(res)
        notify("login successfully", "success");
        if (res?.code == 200) {
          Cookies.set("id", res.data.id, { expires: 1 });
          Cookies.set("token", res.data.token, { expires: 1 });
          Cookies.set("email", res.data.email, { expires: 1 });
          Cookies.set("name", res.data.name, { expires: 1 });
          Cookies.set("role", res.data.role, { expires: 1 });
          
          navigate(route);
          // window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response.data?.code == 401) {
          notify(err.response.data.message, "error");
        } else {
          notify("login failed", "error");
        }
      });
  };

  return (

    <Dashboard
      virsual={
        <>
        <Alert/>
          <section className="p-bloc p-bloc--login">
            <div className="p-bloc__content l-wrap__outer">
              <div className="l-wrap__inner">
                <div className="form-area">
                  <div className="txt-box">
                    <div className="txt-box__inner">
                      <h2 className="title">Login</h2>
                      <p className="desc">
                        If you don't have an account, you can create{" "}
                        <Link to="/register" target="_self">
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
                        <div className="social-link">
                          <p>or sign up with:</p>
                          <div className="social-link__icon">
                            <Link
                              href="#"
                              className="g"
                              onClick={() => googleLogin()}
                            >
                              Login in with Google
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
};

export default Login;
