"use client";
// import React from "react";
// import { useSelector } from "react-redux";

// const TableFooter = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   return (
//     <div className="flex w-full justify-end border-t-2">
//       <div className="text-center w-1/6">
//         <h2> Gross Total</h2>
//       </div>
//       <div className="text-center w-1/6">
//         <h2>196</h2>
//       </div>
//     </div>
//   );
// };

// export default TableFooter;
import React from "react";
import { useSelector } from "react-redux";

const TableFooter = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate the total by multiplying all the prices
  const total = cartItems.reduce((accumulator, item) => {
    const itemPrice = parseInt(item.price);
    return accumulator + itemPrice;
  }, 0);

  return (
    <div className="flex w-full justify-end border-t-2">
      <div className="text-center font-bold w-1/4">
        <h2> Gross Total</h2>
      </div>
      <div className="text-center w-1/4">
        <h2>{total}</h2>
      </div>
    </div>
  );
};

export default TableFooter;
