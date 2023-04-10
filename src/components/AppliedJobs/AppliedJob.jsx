import React from "react";

const AppliedJob = ({ job }) => {
  console.log(job);
  const {
    id,
    companyLogo,
    companyName,
    location,
    salary,
    jobTitle,
    remoteOrOnsite,
    fulltimeOrParttime,
  } = job;
  return (
    <div className="flex items-center rounded-lg border my-6 p-8">
      <img
        className="bg-[#F4F4F4] rounded-lg mr-6 px-8 py-16"
        src={companyLogo}
        alt=""
      />
      <div className="flex-grow space-y-3">
        <h2 className="font-semibold text-xl">{jobTitle}</h2>
        <button className="py-1 px-3 font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-[#9873FF] rounded">
          {remoteOrOnsite}
        </button>
        <button className="py-1 px-3 font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-[#9873FF] rounded ml-4">
          {fulltimeOrParttime}
        </button>

        <h4 className="text-[#757575]">{companyName}</h4>
        <p className="text-[#757575]">
          <span>
            <img
              className="inline"
              src="../../../public/Icons/Frame-4.png"
              alt=""
            />
            {location}
          </span>

          <span className="ml-5">
            <img
              className="inline"
              src="../../../public/Icons/Frame.png"
              alt=""
            />
            {salary}
          </span>
        </p>
      </div>
      <button className="font-semibold text-white px-5 py-3 rounded-lg bg-gradient-to-r  from-[#7E90FE] to-[#9873FF]">
        <a href={`/job/${id}`}>View Details</a>
      </button>
    </div>
  );
};

export default AppliedJob;
