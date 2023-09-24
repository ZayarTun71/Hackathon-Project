import React, { useEffect, useState } from "react";
import Dashboard from "..";
import ProductCard from "../../components/main_page/productCard";
import ProductDetailCard from "../../components/main_page/productDetailCard";
import { GetItemByIdRequest } from "../../api/product";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Content from "../../components/main_page/content";

export const ProductDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
    stock: "",
  });

  const { data, refetch } = useQuery(
    ["item_data"],
    () => GetItemByIdRequest({ id: id }),
    {
      enabled: Object.values(itemData).some((value) => value == ""),
    }
  );

  useEffect(() => {
    if (data?.code === 200) {
      setItemData(...data.data);
    }
  }, [data]);

  return (
    <Dashboard
      virsual={
        <>
          <Content />
        </>
      }
      children={
        <>
          {itemData && (
            <section className="p-bloc p-bloc--item-detail">
              <div className="p-bloc__content l-wrap__outer">
                <div className="l-wrap__inner">
                  <div className="product-detail">
                    <ProductDetailCard
                      item_id={itemData.id}
                      name={itemData.name}
                      description={itemData.description}
                      price={itemData.price}
                      stock={itemData.stock}
                      image={itemData.image_url}
                      category={itemData.category}
                    />

                    <div className="additional-info">
                      <div className="additional-info__inner">
                        <h3 className="title">Additional Information</h3>
                        <table>
                          <tbody>
                            <tr>
                              <td>Weight</td>
                              <td>Dimensions</td>
                            </tr>
                            <tr>
                              <td>77 kg</td>
                              <td>55 × 78 × 124 cm</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="recommend">
                      <div className="recommend__inner">
                        <h3 className="title">Related products</h3>
                        <div className="product-list">
                          <div className="product-list__inner">
                            <ProductCard
                              name="banana"
                              price="50"
                              image="/img/product/product1.png"
                            />
                            <ProductCard
                              name="banana"
                              price="50"
                              image="/img/product/product1.png"
                            />
                            <ProductCard
                              name="banana"
                              price="50"
                              image="/img/product/product1.png"
                            />
                            <ProductCard
                              name="banana"
                              price="50"
                              image="/img/product/product1.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {!itemData && <p>...Loading</p>}
        </>
      }
    />
  );
};
