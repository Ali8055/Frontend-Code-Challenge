"use client";
import React from "react";
import { useSelector } from "react-redux";

const TableBody = ({ props }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return cartItems.map((item, index) => (
    <div className="flex w-full">
      <div className=" text-center w-1/4">
        <h2>{index + 1}</h2>
      </div>
      <div className=" text-center w-1/4">
        <h2> {item.name}</h2>
      </div>
      <div className=" text-center w-1/4">
        <h2> {item.picture}</h2>
      </div>
      <div className=" text-center w-1/4">
        <h2> {item.price}</h2>
      </div>
    </div>
  ));
};

export default TableBody;
