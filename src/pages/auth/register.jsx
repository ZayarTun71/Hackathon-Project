import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/main_page/input";
import { registerRequest } from "../../api/auth";
import { Alert, notify } from "../../components/main_page/alert";
import Dashboard from "..";

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    address: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    registerRequest({
      name: registerData.full_name,
      email: registerData.email,
      password: registerData.password,
      password_confirmation: registerData.confirm_password,
      phone:registerData.phone,
      address:registerData.address
    })
      .then((res) => {
        console.log(res);
        if (res.code === 201) {
          navigate("/login", { state: { email: res.data.email } });
          notify("Register successfully", "success");
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const responseData = err.response.data;
          if (
            responseData.code === 422 &&
            responseData.data &&
            responseData.data.errors
          ) {
            const errors = responseData.data.errors;
            if (errors.email && errors.email.length > 0) {
              notify(errors.email[0], "warn");
            } else if (errors.password && errors.password.length > 0) {
              notify(errors.password[0], "warn");
            }
          } else {
            notify("Register failed", "error");
          }
        } else {
          notify("Network error. Please try again later.", "error");
        }
      });
  };

  return (
    <Dashboard
      virsual={
        <>
          <Alert />

          <section className="p-bloc p-bloc--login">
            <div className="p-bloc__content l-wrap__outer">
              <div className="l-wrap__inner">
                <div className="form-area">
                  <div className="txt-box">
                    <div className="txt-box__inner">
                      <h2 className="title">Sign Up</h2>
                      <p className="desc">
                        If you already have an account, you can log in{" "}
                        <Link href="/login" target="_self">
                          here.
                        </Link>
                      </p>

                      <form
                        action="/"
                        method="get"
                        className="form"
                        onSubmit={handleRegister}
                      >
                        <ul>
                          <li>
                            <Input
                              type="text"
                              id="fname"
                              name="fname"
                              placeholder="Full Name"
                              required
                              onChange={(e) => {
                                setRegisterData({
                                  ...registerData,
                                  full_name: e.target.value,
                                });
                              }}
                            />
                          </li>
                          <li>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Email"
                              required
                              onChange={(e) => {
                                setRegisterData({
                                  ...registerData,
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
                                setRegisterData({
                                  ...registerData,
                                  password: e.target.value,
                                });
                              }}
                            />
                          </li>
                          <li>
                            <Input
                              type="password"
                              id="confirm_password"
                              name="confirm_password"
                              placeholder="Confirm Password"
                              required
                              onChange={(e) => {
                                setRegisterData({
                                  ...registerData,
                                  confirm_password: e.target.value,
                                });
                              }}
                            />
                            <br />
                            <Input
                              type="text"
                              id="phone"
                              name="phone"
                              placeholder="Phone"
                              required
                              onChange={(e) => {
                                setRegisterData({
                                  ...registerData,
                                  phone: e.target.value,
                                });
                              }}
                            />

                            <br />
                            <Input
                              type="text"
                              id="address"
                              name="address"
                              placeholder="Address"
                              required
                              onChange={(e) => {
                                setRegisterData({
                                  ...registerData,
                                  address: e.target.value,
                                });
                              }}
                            />
                          </li>
                        </ul>

                        <div className="c-btn">
                          <p className="btn">
                            <input type="submit" value="Sign Up" />
                          </p>
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

export default Register;
