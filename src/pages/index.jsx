import React, { Children, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "../components/main_page/footer";
import Header from "../components/main_page/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "jquery-match-height/dist/jquery.matchHeight-min.js";
import { Reveiw } from "../components/main_page/reveiw";

const Dashboard = ({ virsual, children, children_two }) => {
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
    $(window).ready(function () {
      $('a[href^="#"]').click(function (e) {
        e.preventDefault();
      });

      // Scroll event handling
      $(window).scroll(function () {
        const headerHeight = $(".header").outerHeight();
        if ($(window).scrollTop() >= headerHeight) {
          $(".header").addClass("scr");
        } else {
          $(".header").removeClass("scr");
        }
      });

      $(".p-slider__area--mainvisual").slick({
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 8000,
        speed: 800,
        arrows: true,
        dots: false,
        appendDots: $(".p-mainvisual__dots"),
      });

      $(".banner-img img").matchHeight({ byRow: false });

      const currentRoute = window.location.pathname;
      if (currentRoute == "/") {
        $(".product-list__inner").slick({
          dots: false,
          speed: 400,
          autoplay: true,
          autoplaySpeed: 8000,
          pauseOnHover: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          responsive: [
            {
              breakpoint: 801,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
              },
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
              },
            },
          ],
        });
      }

      $(".review-list").slick({
        dots: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      });
    });
  }, []);

  useEffect(() => {

    var Delighters = new (function () {
      var self = this;
      var dels = (this.dels = []);


      var options = {
        attribute: "data-delighter",
        classNames: ["delighter", "started", "ended"],
        start: 0.75, 
        end: 0.75, 
        autoInit: true, 
      };

      document.addEventListener("DOMContentLoaded", function () {
        if (options.autoInit) init();
      });

      function config(opts) {
        for (var name in opts) options[name] = opts[name];
      }

      function init() {
        document.addEventListener("scroll", scroll);
        var els = document.querySelectorAll("[" + options.attribute + "]");

        for (var i = 0; i < els.length; i++) {
          var el = els[i];
          var def = el.getAttribute(options.attribute, 2);
          var pairs = def.split(";");
          var del = {};
          del.start = options.start;
          del.end = options.end;

          for (var j = 0; j < pairs.length; j++) {
            var pair = pairs[j].split(":");
            var name = pair[0];
            var val = isNaN(pair[1] * 1) ? pair[1] : pair[1] * 1;
            if (name) del[name] = val === undefined ? true : val;
          }

          del.el = el;
          del.id = dels.length;
          dels.push(del);
          el.classList.add(options.classNames[0]);
          if (del.debug) el.style.outline = "solid red 4px";
        }
        scroll();
      }

      function scroll() {
        var viewportHeight = window.innerHeight;
        for (var i = 0; i < dels.length; i++) {
          var del = dels[i];
          var box = del.el.getBoundingClientRect();
          var factorStart = box.top / viewportHeight;
          var factorEnd = box.bottom / viewportHeight;

          if (del.debug) {
            if (factorStart >= 0 && factorStart <= 1) {
              if (!del.startLine) {
                del.startLine = document.createElement("div");
                document.body.appendChild(del.startLine);
                del.startLine.style =
                  "position:fixed;height:0;width:100%;border-bottom:dotted red 2px;top:" +
                  del.start * 100 +
                  "vh";
              }
            }
            if ((factorEnd < del.end || factorStart > 1) && del.startLine) {
              del.startLine.parentNode.removeChild(del.startLine);
              delete del.startLine;
            }
          }

          if (factorStart < del.start && !del.started) {
            del.started = true;
            del.el.classList.add(options.classNames[1]);
          } else if (
            factorStart > del.start &&
            del.started &&
            options.canRewind
          ) {
            del.started = false;
            del.el.classList.remove(options.classNames[1]);
          }

          if (factorEnd < del.end && !del.ended) {
            del.ended = true;
            del.el.classList.add(options.classNames[2]);
          } else if (factorEnd > del.end && del.ended && options.canRewind) {
            del.ended = false;
            del.el.classList.remove(options.classNames[2]);
          }
        }
      }

      self.init = init;
      self.config = config;
    })();

    Delighters.init();
  }, []);

  const currentRoute = window.location.pathname;

  return (
    <div id="wrap">
      <div className="project-wrap">
        <Header />
        <section className="l-content-area">
          <div className="l-content">{virsual}</div>
          {children && (
            <section className="p-bloc">
              <div className="p-bloc__content l-wrap__outer">
                <div className="l-wrap__inner">{children}</div>
              </div>
            </section>
          )}
          {children_two && <>{children_two}</>}
        </section>
      </div>
      {currentRoute == "/" && <Reveiw />}

      <Footer />
    </div>
  );
};

export default Dashboard;
