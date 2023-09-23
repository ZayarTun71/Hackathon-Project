import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "../components/main_page/footer";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import "jquery-match-height/dist/jquery.matchHeight-min.js";
import Content from "../components/main_page/content";

const Dashboard = ({ children }) => {
  const navigate = useNavigate();

  const token = Cookies.get("token");

  const handleLogout = (e) => {
    ["token", "email", "name", "role"].forEach((cookieName) =>
      Cookies.remove(cookieName)
    );
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    $(document).ready(function () {
      $(".p-slider__area--mainvisual").slick({
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        speed: 800,
        arrows: true,
        dots: true,
        appendDots: $(".p-mainvisual__dots"),
      });

      $('a[href^="#"]').click(function (e) {
        e.preventDefault();
      });

      let initialScrollTop = $(window).scrollTop();

      $(window).scroll(function () {
        const headerHeight = $(".header").outerHeight();

        const newScrollTop = initialScrollTop - headerHeight;

        if ($(window).scrollTop() >= headerHeight) {
          $(".header").addClass("scr");
        } else {
          $(".header").removeClass("scr");
        }

        $(window).animate(
          {
            scrollTop: newScrollTop,
          },
          800,
          "swing"
        );
      });

      $(".product-bloc__inner").matchHeight();
    });
  }, []);

  return (
    // <div id="wrap">
    //   <div className="project-wrap">

    //     <header className="header header--top">
    //       <div className="header__inner">
    //         <div className="logo">
    //           <a href="/" className="logo-link"></a>
    //         </div>
    //         <div className="nav-menu">
    //           <ul className="nav-menu__list">
    //             <li><a href="#" className="nav-link">Home</a></li>
    //             <li>
    //               <a href="#" className="nav-link">Shop</a>
    //               <ul className="menu-pulldown">
    //                 <li>
    //                   <a href="#">Items</a>
    //                   <a href="#">Items</a>
    //                   <a href="#">Items</a>
    //                   <a href="#">Items</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li><a href="#" className="nav-link">About Us</a></li>
    //             <li><a href="#" className="nav-link">Contact Us</a></li>
    //             <li><a href="#" className="nav-link">Contact Us</a></li>
    //           </ul>
    //           {/* Before Login Show*/}
    //           <div className="nav-menu__icon">
    //             <input type="checkbox" id="nav-drp" />
    //             <label htmlFor="nav-drp" className="nav-drp-label">
    //               <img src="../img/header/icon_user.png" alt="" />
    //             </label>

    //             <ul className="drp-menu">
    //               <li><a href="#" className="drp-link">Register</a></li>
    //               <li><a href="#" className="drp-link">Login</a></li>
    //             </ul>
    //           </div>
    //           {/* Before Login Show*/}
    //         </div>

    //         <div id="nav">
    //           <input type="checkbox" />
    //           <span></span><span></span><span></span>
    //           <ul id="menu">
    //             <li><a href="#" className="nav-link">Home</a></li>
    //             <li><a href="#" className="nav-link">Shop</a></li>
    //             <li><a href="#" className="nav-link">About Us</a></li>
    //             <li><a href="#" className="nav-link">Contact Us</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </header>

    //     <section className="l-content-area">
    //       <div className="l-content">

    //         <section className="p-mainvisual">
    //           <div className="p-slider p-slider--mainvisual">
    //             <div className="p-mainvisual__img">
    //               <ul className="slider p-slider__area--mainvisual">
    //                 <li className="slide-bg">
    //                     <img src="../img/slider/mainvisual/mainvisual1.png" alt="mainvisual image" className="pc" />
    //                     <img src="../img/slider/mainvisual/mainvisual1.png" alt="mainvisual image" className="sp" />
    //                 </li>
    //                 <li className="slide-bg">
    //                     <img src="../img/slider/mainvisual/mainvisual2.png" alt="mainvisual image" className="pc" />
    //                     <img src="../img/slider/mainvisual/mainvisual2.png" alt="mainvisual image" className="sp" />
    //                 </li>
    //                 <li className="slide-bg">
    //                     <img src="../img/slider/mainvisual/mainvisual1.png" alt="mainvisual image" className="pc" />
    //                     <img src="../img/slider/mainvisual/mainvisual1.png" alt="mainvisual image" className="sp" />
    //                 </li>
    //                 <li className="slide-bg">
    //                     <img src="../img/slider/mainvisual/mainvisual2.png" alt="mainvisual image" className="pc" />
    //                     <img src="../img/slider/mainvisual/mainvisual2.png" alt="mainvisual image" className="sp" />
    //                 </li>
    //               </ul>
    //             </div>
    //             <div className="p-mainvisual__dots"></div>
    //           </div>
    //         </section>

    //         <section className="p-bloc">
    //           <div className="p-bloc__content l-wrap__outer">
    //             <div className="l-wrap__inner">
    //               <h1 className="title">Product Lists</h1>
    //               <div className="product-list">
    //                 <ProductList/>
    //                 <ProductList/>
    //                 <ProductList/>
    //                 <ProductList/>
    //                 <ProductList/>
    //                 <ProductList/>
    //                 <ProductList/>
    //               </div>
    //             </div>
    //           </div>
    //         </section>

    //         {/* Add more sections and content here */}

    //       </div>
    //     </section>

    //    <Footer/>

    //   </div>{/* project-wrap */}
    // </div>
    <div id="wrap">
      <div className="project-wrap">
        <header className="header">
          <div className="header__inner">
            <div className="logo">
              <a href="/" className="logo-link"></a>
            </div>
            <div className="nav-menu">
              <ul className="nav-menu__list">
                <li>
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Shop
                  </a>
                  <ul className="menu-pulldown">
                    <li>
                      <a href="#">Items</a>
                      <a href="#">Items</a>
                      <a href="#">Items</a>
                      <a href="#">Items</a>
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
                <li>
                  <a href="#" className="nav-link">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* Before Login Show*/}
              <div className="nav-menu__icon">
                <input type="checkbox" id="nav-drp" />
                <label htmlFor="nav-drp" className="nav-drp-label">
                  <img src="../img/header/icon_user.png" alt="" />
                </label>
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
              </div>
              {/* Before Login Show*/}
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

        <section className="l-content-area">
          <div className="l-content">
            <Content />

            {children}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
