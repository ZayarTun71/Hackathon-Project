import { Link } from "react-router-dom";

const MainVisual = () => {
  return (
    <section className="p-mainvisual">
      <div className="p-slider p-slider--mainvisual">
        <div className="p-mainvisual__img">
          <ul className="slider p-slider__area--mainvisual">
            <li className="slide-bg">
              <img
                src="../img/slider/mainvisual/mainvisual1.png"
                alt="mainvisual image"
              />
              <ul className="slide-txt">
                <li className="slide-right">
                  Eat clean & green. <br /> Eat Organic
                </li>
                <li className="slide-right">
                  Enhanced with plant proteins, healthy fats and <br />{" "}
                  antioxidant-rich superfoods.
                </li>
                <li className="slide-right">
                  <div className="c-btn c-btn--item-list">
                    <Link to="/main/product-list" className="card-link">
                      Shop Now
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="slide-bg">
              <img
                src="../img/slider/mainvisual/mainvisual2.png"
                alt="mainvisual image"
              />
              <ul className="slide-txt">
                <li className="slide-right">
                  Sprouted & Organic <br /> Gluten-Free Snacks
                </li>
                <li className="slide-right">
                  Enhanced with plant proteins, healthy fats and <br />{" "}
                  antioxidant-rich superfoods.
                </li>
                <li className="slide-right">
                  <div className="c-btn c-btn--item-list">
                    <Link to="/main/product-list" className="card-link">
                      Shop Now
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-mainvisual__dots"></div>
    </section>
  );
};

export default MainVisual;
