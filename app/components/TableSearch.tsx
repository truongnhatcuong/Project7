"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const TableSearch = () => {
  const route = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (e.currentTarget[0] as HTMLInputElement).value;
    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    route.push(`${window.location.pathname}?${params.toString()}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="  flex md:w-auto items-center rounded-full ring-[1.5px] ring-gray-300 gap-2 text-sm px-1 py-1"
    >
      <Image src={"/search.png"} alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="search..."
        className="w-[200px] p-1.5 bg-transparent outline-none "
      />
    </form>
  );
};

export default TableSearch;
