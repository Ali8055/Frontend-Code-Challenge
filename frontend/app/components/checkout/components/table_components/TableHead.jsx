import React from "react";

const TableHead = () => {
  return (
    <div className="flex w-full border-b-2 font-bold">
      <div className="text-center w-1/4">
        <h2>#</h2>
      </div>
      <div className="text-center w-1/4">
        <h2> Name</h2>
      </div>
      <div className="text-center w-1/4">
        <h2> Picture</h2>
      </div>
      <div className="text-center w-1/4">
        <h2> Unit Price</h2>
      </div>
    </div>
  );
};

export default TableHead;
