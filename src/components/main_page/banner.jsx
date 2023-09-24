import React from "react";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="banner-img">
          <img src="../img/banner/banner2.png" alt="Banner" />
        </div>
        <div className="banner-img">
          <img src="../img/banner/banner1.png" alt="Banner" />
        </div>
        <div className="banner-img">
          <img src="../img/banner/banner3.png" alt="Banner" />
        </div>
        <div className="banner-img">
          <img src="../img/banner/banner4.png" alt="Banner" />
        </div>
        <div className="banner-img">
          <img src="../img/banner/banner5.png" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export const Banner2 = () => {
  return (
    <div className="banner banner--02 is-delighter" data-delighter>
      <div className="banner__inner">
        <div className="banner-img">
          <img src="../img/banner/banner6.png" alt="Banner" />
        </div>
        <div className="banner-txt">
          <div className="banner-txt__inner">
            <span>Our Ingredients</span>
            <h2>Super Foods. Super You</h2>
            <p>
              We source only the highest quality ingredients to make lunchbox that are as good for you as they are delicious.
              <br /> Access Sar Mal War Mal and order as many gifts for as many recipients, all in the one order.
            </p>

            <ul className="info-list">
              <li className="list1">Organic, Non-GMO, Vegan & Gluten-Free</li>
              <li className="list2">Packed with Plant Protein & Fiber</li>
              <li className="list3">Antioxidant & Nutrient Rich Superfoods</li>
              <li className="list4">Easy, Healthy Snack to Grab & Go</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

