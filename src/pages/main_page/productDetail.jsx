import React, { useEffect, useState } from "react";
import Dashboard from "..";
import ProductCard from "../../components/main_page/productCard";
import ProductDetailCard from "../../components/main_page/productDetailCard";
import { GetItemByIdRequest } from "../../api/product";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { ContentDetail } from "../../components/main_page/content";

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
  const [relatedItem, setRelatedItem] = useState([]);

  const { data, refetch } = useQuery(
    ["item_data"],
    () => GetItemByIdRequest({ id: id }),
    {
      enabled: Object.values(itemData).some((value) => value == ""),
    }
  );

  useEffect(() => {
    if (data?.code === 200) {
      setItemData({
        name: data.data.item.name,
        description: data.data.item.description,
        price: data.data.item.price,
        image_url: data.data.item.image_url,
        stock: data.data.item.stock,
        category:data.data.item.category
      });
      setRelatedItem(data.data.relatedItems);
    }
  }, [data]);

  return (
    <Dashboard
      virsual={
        <>
          <ContentDetail name={itemData.name} />
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
                      item_id={id}
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
                            {relatedItem.map((item) => (
                              <ProductCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image_url}
                              />
                            ))}
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
