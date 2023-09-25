import React from "react";
import Dashboard from "..";
import { Content, ContentCart } from "../../components/main_page/content";
import Cookies from "js-cookie";
import CartTable from "../../components/main_page/cartTable";
import { CartCheckout } from "../../components/main_page/cartCheckout";

const Cart = () => {
  const cookieCartList = Cookies.get("cartList")
    ? JSON.parse(Cookies.get("cartList"))
    : [];

  return (
    <Dashboard
      virsual={
        <>
          <ContentCart />
        </>
      }
      children_two={
        <>
          <section className="p-bloc p-bloc--item-detail">
            <div className="p-bloc__content l-wrap__outer">
              <div className="l-wrap__inner">
                <div className="cart">
                  <div className="cart__inner">
                    <div className="item-list">
                      <div className="item-list__inner">
                        <CartTable />

                        <div className="coupon">
                          <input
                            type="text"
                            className="coupon-code"
                            placeholder="Enter Coupon Code"
                          />
                          <div className="c-btn c-btn--coupon">
                            <a href="#" className="card-link">
                              Apply Coupon
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CartCheckout />
                  </div>
                </div>

                <div className="recommend">
                  <div className="recommend__inner">
                    <h3 className="title">You may be interested in</h3>
                    <div className="product-list">
                      <div className="product-list__inner">
                        <div className="product-bloc">
                          <div className="product-bloc__inner">
                            <div className="img-box">
                              <img
                                src="../img/himg/product1.png"
                                alt="Product Image"
                              />
                            </div>
                            <div className="txt-box">
                              <div className="txt-box__inner">
                                <p className="product-title">
                                  Cauliflower Cracker
                                </p>
                                <dl>
                                  <dd>5000 MMK</dd>
                                </dl>
                                <div className="c-btn c-btn--cart">
                                  <a href="/items-detail" className="card-link">
                                    Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="product-bloc">
                          <div className="product-bloc__inner">
                            <div className="img-box">
                              <img
                                src="../img/himg/product2.png"
                                alt="Product Image"
                              />
                            </div>
                            <div className="txt-box">
                              <div className="txt-box__inner">
                                <p className="product-title">Peanut</p>
                                <dl>
                                  <dd>3000 MMK</dd>
                                </dl>
                                <div className="c-btn c-btn--cart">
                                  <a href="/items-detail" className="card-link">
                                    Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="product-bloc">
                          <div className="product-bloc__inner">
                            <div className="img-box">
                              <img
                                src="/img/lunchbox/lunchbox1.png"
                                alt="Product Image"
                              />
                            </div>
                            <div className="txt-box">
                              <div className="txt-box__inner">
                                <p className="product-title">Egg Set</p>
                                <dl>
                                  <dd>4000 MMK</dd>
                                </dl>
                                <div className="c-btn c-btn--cart">
                                  <a href="/items-detail" className="card-link">
                                    Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-bloc">
                          <div className="product-bloc__inner">
                            <div className="img-box">
                              <img
                                src="/img/lunchbox/lunchbox2.png"
                                alt="Product Image"
                              />
                            </div>
                            <div className="txt-box">
                              <div className="txt-box__inner">
                                <p className="product-title">Rice Set</p>
                                <dl>
                                  <dd>4000 MMK</dd>
                                </dl>
                                <div className="c-btn c-btn--cart">
                                  <a href="/items-detail" className="card-link">
                                    Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
export default Cart;
