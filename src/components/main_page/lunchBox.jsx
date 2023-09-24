import React from 'react'

const LunchBox = () => {
  return (
    <div className="recommend">
      <div className="recommend__inner">
        <h3 className="title">
          <a href="">Lunch Box</a>
        </h3>
        <div className="product-list">
          <div className="product-list__inner product-slider">
            {Array.from({ length: 6 }, (_, index) => (
              <div className="product-bloc" key={index}>
                <div className="product-bloc__inner">
                  <div className="img-box">
                    <img src="../img/product/product2.png" alt="Product Image" />
                  </div>
                  <div className="txt-box">
                    <div className="txt-box__inner">
                      <p className="product-title">Product Name</p>
                      <dl>
                        <dd>$ 300</dd>
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
          <a href="#" className="show-all">
            Show All &gt;&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default LunchBox;