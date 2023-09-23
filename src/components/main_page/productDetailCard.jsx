import React, { useEffect, useState } from "react";
import $ from "jquery";

const ProductDetailCard = ({ name, price, description, stock,image }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    $(document).ready(function () {
      $(
        '<div class="product-qty-nav"><div class="product-qty-button product-qty-up">+</div><div class="product-qty-button product-qty-down">-</div></div>'
      ).insertAfter(".product-qty input");
      $(".product-qty").each(function () {
        var spinner = $(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find(".product-qty-up"),
          btnDown = spinner.find(".product-qty-down"),
          min = input.attr("min"),
          max = input.attr("max");

        btnUp.click(function () {
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + 0.5;
          }
          input.val(newVal).trigger("change");
          setQuantity(newVal);
        });

        btnDown.click(function () {
          var oldValue = parseFloat(input.val());
          if (oldValue <= min) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue - 0.5;
          }
          input.val(newVal).trigger("change");
          setQuantity(newVal);
        });
      });
    });
  }, []);

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
            <p className="desc">
             {description}
            </p>
          </div>

          <div className="product-add">
            <div className="product-qty">
              <input
                type="number"
                min="1"
                max="10"
                step="1"
                value={quantity}
                disabled
              />
            </div>

            <div className="c-btn c-btn--cart">
              <a href="tems-detail" className="card-link">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailCard;
