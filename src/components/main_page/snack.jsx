import React, { useEffect, useState } from "react";
import { GetSnackRequest } from "../../api/product";
import { useQuery } from "react-query";
import ProductCard from "./productCard";

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
            <div className="product-bloc">
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
            <div className="product-bloc">
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
            <div className="product-bloc">
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
            <div className="product-bloc">
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

          </div>

          <a href="#" className="show-all">
            Show All &gt;&gt;
          </a>
        </div>
      </div>
    </div>
  );
};
