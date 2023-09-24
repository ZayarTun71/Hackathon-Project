import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Header = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [amount, setAmount] = useState(0);

  const cartList = Cookies.get("cartList")
    ? JSON.parse(Cookies.get("cartList"))
    : 0;

  const handleCart = () => {
    if (amount > 0) {
      navigate("/main/cart");
    }
  };

  useEffect(() => {
    setAmount(cartList.length);
  }, [cartList]);

  const currentRoute = window.location.pathname;

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleLogout = (e) => {
    ["token", "email", "name", "role", "cartList"].forEach((cookieName) =>
      Cookies.remove(cookieName)
    );
    navigate("/");
  };

  return (
    <header
      className={`header ${currentRoute == "/" ? "header--top" : "header"}`}
    >
      <div className="header__inner">
        <div className="logo" onClick={() => navigate("/")}>
          <Link to="/" href="#" className="logo-link logo-link--02">
            {" "}
          </Link>
          <Link to="/" href="/" className="logo-link"></Link>
        </div>
        <div className="nav-menu">
          <ul className="nav-menu__list">
            <li>
              <Link to="" href="#" className="nav-link" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li className="sub">
              <a href="#" className="nav-link h-c">
                Shop
              </a>
              <ul className="menu-pulldown">
                <li>
                  <Link
                    to=""
                    href="#"
                    className="sub-link"
                    onClick={() => scroll.scrollTo(1400)}
                  >
                    Snacks
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    href="#"
                    className="sub-link"
                    onClick={() => scroll.scrollTo(2500)}
                  >
                    Lunch Box
                  </Link>
                </li>
                <li>
                  <Link to="" href="#" className="sub-link">
                    Sale
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to=""
                href="#"
                className="nav-link"
                onClick={scrollToBottom}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to=""
                href="#"
                className="nav-link"
                onClick={scrollToBottom}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="search">
            <input
              type="text"
              className="search__term"
              placeholder="What are you looking for?"
            />
            <button type="submit" className="search__btn"></button>
          </div>
          <div className="cart">
            <a className="cart-icon" onClick={handleCart}>
              <span className="counter">
                {amount == undefined ? 0 : amount}
              </span>
            </a>
          </div>

          <div className="nav-menu__icon">
            <input type="checkbox" id="nav-drp" />
            <label htmlFor="nav-drp" className="nav-drp-label">
              <img src="../img/header/icon_user.png" alt="" />
            </label>

            <ul className="drp-menu">
              {!token && (
                <>
                  <li>
                    <Link to="/login" href="#" className="drp-link">
                      Register
                    </Link>
                  </li>
                  <li>
                    <a to="/register" href="#" className="drp-link">
                      Login
                    </a>
                  </li>
                </>
              )}
              {token && (
                <>
                  <li>
                    <a href="#" className="drp-link" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div id="nav">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="" className="nav-link" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link">
                Shop
              </a>
              <ul className="spmenu-pulldown">
                <li>
                  <a href="#" className="sub-link">
                    ・Snacks
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-link">
                    ・Lunch Box
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-link">
                    ・Sale
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="nav-link" onClick={scrollToBottom}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="" className="nav-link" onClick={scrollToBottom}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
