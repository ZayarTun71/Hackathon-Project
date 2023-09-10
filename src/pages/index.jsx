import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Cookies from "js-cookie";

const Dashboard = () => {

  const navigate = useNavigate();
  
  const handleLogout = () => {
    ["token", "email", "name", "role"].forEach((cookieName) =>
      Cookies.remove(cookieName)
    );
    navigate("/");
  };

  return (
    <div id="wrap">
      <div className="project-wrap">
        <header className="header">
          <div className="header__inner">
            <div className="logo">
              <a href="/"></a>
            </div>
            <div className="nav-menu">
              <ul className="nav-menu__list">
                <li>
                  <Link href="#">Home</Link>
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
                    <img src="../img/header/icon_user.png" alt="" />
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
        </header>
        <input type="button" value="logout" onClick={handleLogout} />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
