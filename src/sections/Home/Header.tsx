import React from "react";
import headerImg from "../../../Public/headerImage.png";

const Header = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${headerImg.src})` }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full"></div>
    </div>
  );
};

export default Header;
