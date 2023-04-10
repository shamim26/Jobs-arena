import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex justify-between mt-12 container w-9/12 mx-auto">
      <h2 className=" text-4xl font-bold"><Link to='/'>JobsArena</Link></h2>
      <div
        className={`flex flex-col md:flex-row absolute md:static transition-all duration-200 ease-in right-0  w-full md:w-auto pb-3 md:pb-0 bg-white items-center justify-between ${
          open ? "top-14" : "-top-72"
        }`}
      >
        <nav className="flex items-center justify-between flex-col md:flex-row gap-8 font-medium">
          <Link to="/statistic">Statistics</Link>
          <Link to="/applied-jobs">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
          <button className="font-semibold md:ml-80 text-white px-5 py-4 rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Start Applying
          </button>
        </nav>
      </div>
      <button onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </span>
      </button>
    </div>
  );
};

export default Header;
