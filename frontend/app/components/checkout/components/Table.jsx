import React from "react";
import TableBody from "./table_components/TableBody";
import TableHead from "./table_components/TableHead";
import TableFooter from "./table_components/TableFooter";

const Table = () => {
  return (
    <div className="p-4 m-auto w-2/4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {/* Head */}
      <TableHead />
      {/* Body */}
      <TableBody data="data" />
      {/* Conclusion */}
      <TableFooter />
    </div>
  );
};

export default Table;
