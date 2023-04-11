import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    companyLogo,
    companyName,
    fulltimeOrParttime,
    jobTitle,
    remoteOrOnsite,
    location,
    salary,
  } = job;
  return (
    <div className="border border-gray-200 rounded-lg p-8">
      <img className="mb-8" src={companyLogo} alt="" />
      <div className="space-y-4">
        <h4 className="text-2xl font-semibold">{jobTitle}</h4>
        <h5 className="text-lg text-[#757575] font-medium">{companyName}</h5>
        <button className="py-2 px-4 font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-[#9873FF] rounded">
          {remoteOrOnsite}
        </button>
        <button className="py-2 px-4 font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-[#9873FF] rounded ml-4">
          {fulltimeOrParttime}
        </button>
        <p className="text-[#757575]">
          <span>
            <img
              className="inline"
              src="/Icons/Frame-4.png"
              alt=""
            />
            {location}
          </span>

          <span className="ml-5">
            <img
              className="inline"
              src="/Icons/Frame.png"
              alt=""
            />
            {salary}
          </span>
        </p>
        <button className="font-semibold text-white px-5 py-3 rounded-lg bg-gradient-to-r  from-[#7E90FE] to-[#9873FF]">
          <a href={`/job/${id}`}>View Details</a>
        </button>
      </div>
    </div>
  );
};

export default Job;
