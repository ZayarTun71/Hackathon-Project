import React, { useEffect, useState } from "react";
import { GetSnackRequest } from "../../api/product";
import { useQuery } from "react-query";
import ProductCard from "./productCard";
import { Link } from "react-router-dom";

export const Snack = () => {
  const [snackList, setSnackList] = useState([]);

  const { data, refetch } = useQuery(["snack_list"], () => GetSnackRequest(), {
    enabled: snackList.length === 0,
  });

  useEffect(() => {
    if (data?.code === 200) {
      setSnackList(data.data);
    }
  }, [data]);

  return (
    <div className="recommend" data-delighter>
      <div className="recommend__inner">
        <h3 className="title">
          <a href="">Snack</a>
        </h3>
        <div className="product-list">
          <div className="product-list__inner product-slider">
            {/* {snackList.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image_url}
              />
            ))} */}
            <div className="product-bloc">
              <div className="product-bloc__inner">
                <div className="img-box">
                  <img src="img/himg/product1.png" alt="Product Image" />
                </div>
                <div className="txt-box">
                  <div className="txt-box__inner">
                    <p className="product-title">Cauliflower Cracker</p>
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
                  <img src="img/himg/product2.png" alt="Product Image" />
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
                  <img src="img/himg/product3.png" alt="Product Image" />
                </div>
                <div className="txt-box">
                  <div className="txt-box__inner">
                    <p className="product-title">Sweet Potato Chips</p>
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
                  <img src="img/himg/product4.png" alt="Product Image" />
                </div>
                <div className="txt-box">
                  <div className="txt-box__inner">
                    <p className="product-title">Terra</p>
                    <dl>
                      <dd>10000 MMK</dd>
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
                  <img src="img/himg/product5.png" alt="Product Image" />
                </div>
                <div className="txt-box">
                  <div className="txt-box__inner">
                    <p className="product-title">Hippaes</p>
                    <dl>
                      <dd>7000 MMK</dd>
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

          <Link to="/main/product-list" href="#" className="show-all">
            Show All &gt;&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};
