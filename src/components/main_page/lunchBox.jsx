import React from "react";
import { Link } from "react-router-dom";

const LunchBox = () => {
  const lunch_box = [
    { name: "Hot Dog Set", price: "5500 MMK", image: "img/himg/hotdog.jpg" },
    { name: "Prawn Rice Set", price: "4000 MMK", image: "img/himg/moke.jpg" },
    { name: "Egg Set", price: "1500 MMK", image: "img/lunchbox/lunchbox1.png" },
    { name: "Avocado Rice Set", price: "8000 MMK", image: "img/lunchbox/lunchbox2.png" },
    { name: "Vegan Set", price: "5500 MMK", image: "img/lunchbox/lunchbox12.png"},
  ];
  return (
    <div className="recommend">
      <div className="recommend__inner">
        <h3 className="title">
          <a href="">Lunch Box</a>
        </h3>
        <div className="product-list">
          <div className="product-list__inner product-slider">
            {lunch_box.map((product, index) => (
              <div className="product-bloc" key={index}>
                <div className="product-bloc__inner">
                  <div className="img-box">
                    <img src={product.image} alt="Product Image" />
                  </div>
                  <div className="txt-box">
                    <div className="txt-box__inner">
                      <p className="product-title">{product.name}</p>
                      <dl>
                        <dd>{product.price}</dd>
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
            ))}
          </div>
          <Link to="/main/product-list" href="#" className="show-all">
            Show All &gt;&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LunchBox;
