import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#1A1919] font-sans">
      <div className="container w-9/12 mx-auto pt-16 md:pt-28 pb-16 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-10 items-start text-white">
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold">JobsArena</h1>
            <p className="text-[#FFFFFFB2] text-sm">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src="/Icons/Group-9969.png" alt="" />
          </div>
          <div className="space-y-3 text-sm text-[#FFFFFFB2]">
            <h3 className="text-xl font-semibold text-white">Company</h3>
            <p>About Us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Careers</p>
          </div>
          <div className="space-y-3 text-sm text-[#FFFFFFB2]">
            <h3 className="text-xl font-semibold text-white">Product</h3>
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integrations</p>
          </div>
          <div className="space-y-3 text-sm text-[#FFFFFFB2]">
            <h3 className="text-xl font-semibold text-white">Support</h3>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Developers</p>
          </div>
          <div className="space-y-3 text-sm text-[#FFFFFFB2]">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </div>
        </div>
        <div className=" flex justify-between 
        text-[#f4f4f47d] border-t border-[#7e8ffe7a] pt-10 mt-10" >
          <small>@2023 JobsArena. All Rights Reserved</small>
          <small>
            Powered by <span className="text-base">JobsArena</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
