import React from "react";
import { aclonica } from "../../../app/layout";

const Header: React.FC = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${"https://ssl.gstatic.com/atari/images/simple-header-blended-small.png"})`,
          backgroundSize: "cover",
          height: "400px",
          backgroundRepeat: "no-repeat",
        }}
        className="mx-auto text-center py-28"
      >
        <h3 className={`text-xl md:text-6xl text-white ${aclonica.className}`}>
          Curriculum Vitae
        </h3>
      </div>
    </div>
  );
};

export default Header;
