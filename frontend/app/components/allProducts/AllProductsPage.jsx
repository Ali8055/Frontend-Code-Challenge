"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./components/ItemCard";
import { getAllItemsAPI } from "@/app/utils/api/api";
const AllProductsPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getAllItemsAPI()
      .then((data) => {
        setAllProducts(data.data);
        console.log(data, "response data");
      })
      .catch((error) => {
        console.log(error, "Error 404: Empty Response ");
      });

    return () => {
      setAllProducts([]);
    };
  }, []);

  return (
    <div>
      <h1 className="font-bold px-16 py-4 text-xl">ALL Products</h1>
      <div className="flex flex-wrap">
        {allProducts.length > 0 ? (
          <ItemCard items={allProducts} />
        ) : (
          <p>Skeleton</p>
        )}
        {/* <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard /> */}
      </div>
    </div>
  );
};

export default AllProductsPage;
