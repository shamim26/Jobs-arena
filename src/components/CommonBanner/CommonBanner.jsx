import React from "react";
import bg1 from "../../assets/All-Images/Vector.png";
import bg2 from "../../assets/All-Images/Vector-1.png";

const CommonBanner = ({ children }) => {
  return (
    <div className=" flex justify-between items-center bg-gradient-to-l from-[#7E90FE0D] from-5% to-[#9873FF0D] to-5%">
      <img className="w-1/3 md:w-auto" src={bg1} alt="" />
      <h1 className="text-2xl font-bold text-center">{children}</h1>
      <img className="w-1/3 md:w-auto" src={bg2} alt="" />
    </div>
  );
};

export default CommonBanner;
