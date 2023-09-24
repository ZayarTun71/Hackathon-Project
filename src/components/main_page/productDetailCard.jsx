import React, { useEffect, useState } from "react";
import $ from "jquery";

const ProductDetailCard = ({ name, price, description, stock, image }) => {
  
  const [quantity, setQuantity] = useState(1);
  const [subscriptionType, setSubscriptionType] = useState(1);

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value, 10);
    setQuantity(quantity);
  };

  const handleSubscriptionChange = (event) => {
    const subscription = parseInt(event.target.value, 10);
    setSubscriptionType(subscription);
  };
  console.log(subscriptionType);
  useEffect(() => {
    // $(document).ready(function () {
    //   $(
    //     '<div class="product-qty-nav"><div class="product-qty-button product-qty-up">+</div><div class="product-qty-button product-qty-down">-</div></div>'
    //   ).insertAfter(".product-qty input");
    //   $(".product-qty").each(function () {
    //     var spinner = $(this),
    //       input = spinner.find('input[type="number"]'),
    //       btnUp = spinner.find(".product-qty-up"),
    //       btnDown = spinner.find(".product-qty-down"),
    //       min = input.attr("min"),
    //       max = input.attr("max");
    //     btnUp.click(function () {
    //       var oldValue = parseFloat(input.val());
    //       if (oldValue >= max) {
    //         var newVal = oldValue;
    //       } else {
    //         var newVal = oldValue + 0.5;
    //       }
    //       input.val(newVal).trigger("change");
    //       setQuantity(newVal);
    //     });
    //     btnDown.click(function () {
    //       var oldValue = parseFloat(input.val());
    //       if (oldValue <= min) {
    //         var newVal = oldValue;
    //       } else {
    //         var newVal = oldValue - 0.5;
    //       }
    //       input.val(newVal).trigger("change");
    //       setQuantity(newVal);
    //     });
    //   });
    // });
  }, []);

  // const mydata=[
  //   {
  //     user_id:1,
  //     type:null||7,
  //     item_id:2,
  //     status:0,

  //     user_sub_id:1,//backend
  //     quantity:10,
  //     buy_date:"Date"
  //   },
  //   {
  //     user_id:1,
  //     type:null||7,
  //     item_id:2,
  //     status:0,

  //     user_sub_id:1,//backend
  //     quantity:10,
  //     buy_date:"Date"
  //   },
  //   {
  //     user_id:1,
  //     type:null||7,
  //     item_id:2,
  //     status:0,

  //     user_sub_id:1,//backend
  //     quantity:10,
  //     buy_date:"Date"
  //   }
  // ]

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
                <a href="tems-detail" className="card-link">
                  Add To Cart
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