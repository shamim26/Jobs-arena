import React from "react";
import banner from "../../assets/All-Images/P3OLGJ1-copy-1.png";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 items-center my-10">
      <div className="space-y-3">
        <h1 className="heading text-5xl md:text-7xl font-bold md:leading-[90px]">
          One Step <br />
          Closer To Your{" "}
          <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
            Dream Job
          </span>
        </h1>
        <p className="text-[#757575]">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all <br /> your job
          application from start to finish.
        </p>
        <button className="font-semibold text-white px-5 py-4 rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          Get Started
        </button>
      </div>
      <img src={banner} className="hidden md:inline" alt="" />
    </div>
  );
};

export default Banner;
