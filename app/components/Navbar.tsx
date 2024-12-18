import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Search */}
      <div className=" hidden sm:flex items-center rounded-full ring-[1.5px] ring-gray-300 gap-2 text-sm px-2 py-1">
        <Image src={"/search.png"} alt="" width={17} height={18} />
        <input
          type="text"
          placeholder="search..."
          className="w-[200px] p-1.5 bg-transparent outline-none "
        />
      </div>
      {/* Icon and User */}
      <div className="flex items-center gap-4 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src={"/message.png"} alt="" width={20} height={20} />
        </div>
        <div className=" relative bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src={"/announcement.png"} alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-2 w-5 h-5 flex bg-purple-500 justify-center text-white rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-bold"> Nhat Cuong</span>
          <span className="text-[10px] text-right text-gray-500">Admin</span>
        </div>
        <Image
          src={"/avatar.png"}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
