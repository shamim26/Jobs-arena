import React from "react";
import bg1 from "../../assets/All-Images/Vector.png";
import bg2 from "../../assets/All-Images/Vector-1.png";

const CommonBanner = ({ children }) => {
  return (
    <div className="bg-no-repeat flex justify-between items-center bg-gradient-to-l from-[#7E90FE0D] from-5% to-[#9873FF0D] to-5%">
      <img src={bg1} alt="" />
      <h1 className="text-2xl font-bold text-center">{children}</h1>
      <img src={bg2} alt="" />
    </div>
  );
};

export default CommonBanner;
