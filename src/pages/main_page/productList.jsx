import React, { useEffect, useState } from "react";
import Dashboard from "..";
import ProductCard from "../../components/main_page/productCard";
import { GetItemRequest } from "../../api/product";
import { useQuery } from "react-query";

const ProductList = () => {
  const [itemList, setItemList] = useState([]);

  const { data, refetch } = useQuery(["item_list"], () => GetItemRequest(), {
    enabled: itemList.length === 0,
  });

  useEffect(() => {
    if (data?.code === 200) {
      setItemList(data.data);
    }
  }, [data]);

  return (
    <Dashboard
      children={
        <>
          <section className="p-bloc p-bloc--item-list">
            <div className="p-bloc__content l-wrap__outer">
              <div className="l-wrap__inner">
                <div className="sorting">
                  <p>Showing 1–12 of 40 results</p>
                  <div className="sorting-list">
                    <select>
                      <option value="0">Default sorting</option>
                      <option value="1">Sort by popularity</option>
                      <option value="2">Sort by latest</option>
                      <option value="3">Sort by price: low to high</option>
                      <option value="4">Sort by price: high to low</option>
                    </select>
                  </div>
                </div>
                <div className="product-list">
                  <div className="product-list__inner">
                    {itemList.map((item) => (
                      <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image_url}
                      />
                    ))}
                  </div>
                  <div className="item__paging">
                    <ul className="paging">
                      <li className="prev">
                        <a href="#" className="paging-link">
                          <img
                            src="../img/common/paging_arrow_left.png"
                            alt="＜"
                          />
                        </a>
                      </li>
                      <li>
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#" className="paging-link">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="paging-link">
                          3
                        </a>
                      </li>
                      <li className="next">
                        <a href="#" className="paging-link">
                          <img
                            src="../img/common/paging_arrow_right.png"
                            alt="＞"
                          />
                        </a>
                      </li>
                    </ul>
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

export default ProductList;
