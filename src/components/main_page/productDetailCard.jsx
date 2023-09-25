import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ProductDetailCard = ({
  item_id,
  name,
  price,
  description,
  stock,
  image,
  category,
}) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [subscriptionType, setSubscriptionType] = useState(0);

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value, 10);
    setQuantity(quantity);
  };

  const handleSubscriptionChange = (event) => {
    const subscription = parseInt(event.target.value, 10);
    setSubscriptionType(subscription);
  };
  
  const token = Cookies.get("token");
  const user_id = Cookies.get("id");
  const currentRoute = window.location.pathname + window.location.search;

  const handleCart = (e) => {
    e.preventDefault();
    if (!token) {
      Cookies.set("route", currentRoute);
      navigate("/login");
    } else {
      
        const existingCart = Cookies.get("cartList")
          ? JSON.parse(Cookies.get("cartList"))
          : [];

        const newItem = {
          user_id: parseInt(user_id),
          item_id: item_id,
          item_name: name,
          item_price: price,
          quantity: quantity,
          type: subscriptionType === 0 ? null : subscriptionType,
          image: image,
        };
        const updatedCart = [...existingCart, newItem];

        Cookies.set("cartList", JSON.stringify(updatedCart));
        window.location.reload();
    }
  };
  
  return (
    <>
      <div className="product-detail__inner">
        <div className="img-box">
          <img src={image} alt="Product Image" />
        </div>
        <div className="txt-box">
          <div className="cat">
            <span className="stock">
              {stock == 1 ? "IN STOCK" : "OUT STOCK"}
            </span>
          </div>
          <div className="product-info">
            <h3 className="title">{name}</h3>
            <span className="price">{price} MMK</span>
            <p className="desc">{description}</p>
          </div>

          <div className="product-add">
            {stock == 1 && category == "lunch box" && (
              <>
                <p className="subsc-title">Choose Subscription</p>
                <div className="product-add__inner">
                  <div className="subsc-btn">
                    <input
                      type="radio"
                      id="0"
                      name="subscription"
                      value={1}
                      onChange={handleSubscriptionChange}
                    />
                    <label htmlFor="0">1 Day</label>
                  </div>

                  <div className="subsc-btn">
                    <input
                      type="radio"
                      id="1"
                      name="subscription"
                      value={7}
                      onChange={handleSubscriptionChange}
                    />
                    <label htmlFor="1">7 Days</label>
                  </div>

                  <div className="subsc-btn">
                    <input
                      type="radio"
                      id="2"
                      name="subscription"
                      value={10}
                      onChange={handleSubscriptionChange}
                    />
                    <label htmlFor="2">10 Days</label>
                  </div>

                  <div className="subsc-btn">
                    <input
                      type="radio"
                      id="3"
                      name="subscription"
                      value={30}
                      onChange={handleSubscriptionChange}
                    />
                    <label htmlFor="3">30 Days</label>
                  </div>
                </div>
              </>
            )}

            <div className="product-add__inner">
              {stock == 1 && (
                <div className="product-qty">
                  <input
                    type="number"
                    min={1}
                    step={1}
                    defaultValue={1}
                    onChange={handleQuantityChange}
                  />
                </div>
              )}

              <div
                className={
                  stock == 1 ? "c-btn c-btn--cart" : "c-btn c-btn--cart disable"
                }
              >
                <a href="" className="card-link" onClick={handleCart}>
                  {stock == 1 ? "ADD TO CART" : "OUT OF STOCK"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailCard;
