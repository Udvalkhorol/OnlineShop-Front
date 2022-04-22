import React from "react";

const Navbar = () => {
  return (
    <div className="flex row h-20 w-full bg-gray-100 items-center justify-around">
      <div className="">NG Shoppy</div>
      <input
        className="flex bg-[#F6F6F6] h-9 w-96"
        type="text"
        placeholder="Эндээс хайх"
      ></input>
    </div>
  );
};

export default Navbar;
