import React from "react";
import { aclonica } from "../../../app/layout";

const Header: React.FC = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
          backgroundSize: "cover",
          height: "500px",
          backgroundRepeat: "no-repeat",
        }}
        className="mx-auto text-center py-28"
      >
        <h3 className={`text-xl md:text-6xl text-white ${aclonica.className}`}>
          Contact Information
        </h3>
      </div>
    </div>
  );
};

export default Header;
