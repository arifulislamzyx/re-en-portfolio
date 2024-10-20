import React from "react";

const NavHelmat = () => {
  return (
    <div className="bg-black">
      <div className="container flex justify-center text-center items-center gap-2 py-2 ">
        <p className="text-white">Hey, welcome to my portfolio!</p>
        <a
          href="mailto:arifulislamzyx@gmail.com"
          className="border-2 border-white text-white py-1 px-2 rounded"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default NavHelmat;
