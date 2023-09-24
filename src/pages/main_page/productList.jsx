import React, { useEffect, useState } from "react";
import Dashboard from "..";
import ProductCard from "../../components/main_page/productCard";
import { GetItemRequest } from "../../api/product";
import { useQuery } from "react-query";
import Content from "../../components/main_page/content";

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

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(itemList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = itemList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Dashboard
      virsual={
        <>
          <Content />
        </>
      }
      children={
        <>
          <div className="sorting">
            <p>Showing 1–6 of 10 results</p>
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
              {itemsToDisplay.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image_url}
                />
              ))}
            </div>

            {/* <div className="item__paging">
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
                  </div> */}

            <div className="item__paging">
              <ul className="paging">
                <li className="prev">
                  {/* Implement previous page navigation */}
                  <a
                    href="#"
                    className="paging-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <img src="../img/common/paging_arrow_left.png" alt="＜" />
                  </a>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`paging-link ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li className="next">
                  {/* Implement next page navigation */}
                  <a
                    href="#"
                    className="paging-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    <img src="../img/common/paging_arrow_right.png" alt="＞" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      }
    />
  );
};

export default ProductList;
