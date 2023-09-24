import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = (top) => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [amount , setAmount]=useState(0);

  const cartList = Cookies.get("cartList")
    ? JSON.parse(Cookies.get("cartList"))
    : 0;

  const handleCart = () => {
    if (amount > 0) {
      navigate("/main/cart");
    }
  };

  useEffect(() => {
   setAmount(cartList.length)
  }, [cartList]);

  const currentRoute = window.location.pathname;

  return (
    <header className={`header ${currentRoute=="/"?"header--top":"header"}`}>
      <div className="header__inner">
        <div className="logo">
        <a href="#" className="logo-link logo-link--02"> </a>
          <a href="/" className="logo-link"></a>
        </div>
        <div className="nav-menu">
          <ul className="nav-menu__list">
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="sub">
              <a href="#" className="nav-link h-c">
                Shop
              </a>
              <ul className="menu-pulldown">
                <li>
                  <a href="#" className="sub-link">
                    Snacks
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-link">
                    Lunch Box
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-link">
                    Sale
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
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
              <span className="counter">{amount == undefined ? 0 : amount}</span>
            </a>
          </div>

          <div className="nav-menu__icon">
            <input type="checkbox" id="nav-drp" />
            <label htmlFor="nav-drp" className="nav-drp-label">
              <img src="../img/header/icon_user.png" alt="" />
            </label>
            {!token && (
              <ul className="drp-menu">
                <li>
                  <a href="#" className="drp-link">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#" className="drp-link">
                    Login
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div id="nav">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
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
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
