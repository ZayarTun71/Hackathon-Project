import React from 'react'

export const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-contact" id="contact">
          <div className="footer-contact__inner">
            <ul>
              <li className="deli">
                Free Shipping <span>On Selected Items</span>
              </li>
              <li className="call">
                Give Us A Call <span>(+95)88-66-991</span>
              </li>
              <li className="mail">
                Email Us <span>(+95)88-66-991</span>
              </li>
              <li className="commu">
                Community<span>Shop with purpose</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-banner l-wrap__outer">
          <div className="footer-banner__inner l-wrap__inner">
            <div className="menu-list" id="about">
              <h4 className="title">ABOUT COMPANY</h4>
              <p>
                Delicious, organic food and drink with less packaging, less food waste, and lower food miles. What more do you need?
              </p>
  
              <a href=""></a>
            </div>
            <div className="menu-list">
              <h4 className="title">INFORMATION</h4>
              <ul>
                <li>
                  <a href="#" target="_self">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    SHOP
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-list">
              <h4 className="title">CATEGORIES</h4>
              <ul>
                <li>
                  <a href="#" target="_self">
                    FRUITS & VEGETABLES
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    DAILY PRODUCTS
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    PACKAGE FOODS
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    HEALTH & WELLNESS
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-list">
              <h4 className="title">MY ACCOUNT</h4>
              <ul>
                <li>
                  <a href="#" target="_self">
                    MY ACCOUNT
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    SHIPPING
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    ORDER STATUS
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    SHOPPING CART
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <address>Copyright © 2023 စားမယ် ဝါးမယ် All Rights Reserved</address>
      </footer>
  )
}

export default Footer;
