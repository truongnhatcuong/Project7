import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="  flex md:w-auto items-center rounded-full ring-[1.5px] ring-gray-300 gap-2 text-sm px-1 py-1">
      <Image src={"/search.png"} alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="search..."
        className="w-[200px] p-1.5 bg-transparent outline-none "
      />
    </div>
  );
};

export default TableSearch;
