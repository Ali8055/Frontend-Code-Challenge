import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h1 className="font-bold px-16 py-4 text-xl">Home</h1>
      <div className="w-full flex">
        <Link className="w-full h-[30vh] m-2" href="/all-products">
          <div className="w-[100%] h-[100%] flex justify-center items-center w-1/3   bg-blue-700 text-white hover:bg-blue-900  font-bold rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <h1 className="">All Products</h1>
          </div>
        </Link>
        <Link href="/add-products " className="w-full h-[30vh] m-2">
          <div className="w-[100%] h-[100%] flex justify-center items-center w-1/3  bg-blue-700 text-white hover:bg-blue-900 font-bold rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h1>Add Product</h1>
          </div>
        </Link>
        <Link href="/checkout" className="w-full h-[30vh] m-2">
          <div className="w-[100%] h-[100%] flex justify-center items-center w-1/3  bg-blue-700 text-white  hover:bg-blue-900 font-bold rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h1>Check Out</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
