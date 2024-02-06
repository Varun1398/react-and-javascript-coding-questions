import React, { useEffect, useState } from "react";
import "./index.css";
/*
Problem statement -> fetch https://fakestoreapi.com/products -> implement pagination
*/
const Paginate = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0)
  const fetchProducts = async () => {
    const URL = `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`;
    const data = await fetch(URL);
    const response = await data.json();
    setProductsData(response.products);
    setTotalPage(response.total / 10)
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleSelectedPage = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <>
      <div className="product__container">
        {productsData.map((item, index) => {
          return (
            <span className="product__single" key={item.id}>
              <img src={item.thumbnail} />
              <span>{item.title}</span>
            </span>
          );
        })}
      </div>
      {productsData.length > 0 && (
        <div className="product_paginate">
          <span
            className={
              page > 1 ? "" : "paginate__disable"
            }
            onClick={() => handleSelectedPage(page - 1)}
          >
            ⬅️
          </span>
          {[...Array(totalPage)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "paginate__selected" : ""}
                onClick={() => handleSelectedPage(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            className={
              page < totalPage ? "" : "paginate__disable"
            }
            onClick={() => handleSelectedPage(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </>
  );
};

export default Paginate;
