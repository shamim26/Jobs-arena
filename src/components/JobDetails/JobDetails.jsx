import React, { useEffect, useState } from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/localDB";

const JobDetails = () => {
  const { id } = useParams();
  const jobDet = useLoaderData();

  const [singleJob, setSingleJob] = useState({});
  useEffect(() => {
    if (jobDet) {
      const foundData = jobDet.find((job) => job.id == id);
      setSingleJob(foundData);
    }
  }, [jobDet]);

  return (
    <div>
      <div>
        <CommonBanner>Job Details</CommonBanner>
      </div>
      <div className="container w-9/12 mx-auto grid grid-cols-1 md:grid-cols-custom gap-4 my-24">
        <div className="space-y-4">
          <p className="text-[#757575]">
            <span className="font-semibold text-black">Job Description:</span>{" "}
            {singleJob.jobDescription}
          </p>
          <p className="text-[#757575]">
            <span className="font-semibold text-black">
              Job Responsibility:{" "}
            </span>
            {singleJob.jobResponsibility}
          </p>
          <p className="font-semibold text-black">Educational Requirements:</p>
          <p className="text-[#757575]">{singleJob.educationalRequirements}</p>
          <p className="font-semibold text-black">Experiences:</p>
          <p className="text-[#757575]">{singleJob.experiences}</p>
        </div>
        <div>
          <div className="rounded-lg bg-[#7E90FE1A] p-5 space-y-4 ">
            <h5 className="font-semibold pb-2 border-b-2">Job Details</h5>
            <p className="text-[#757575] font-medium">
              <img
                className="inline"
                src="../../../public/Icons/Frame.png"
                alt=""
              />{" "}
              <span className="text-black">Salary:</span>
              {singleJob.salary}
            </p>
            <p className="text-[#757575]">
              <img
                className="inline"
                src="../../../public/Icons/Frame-1.png"
                alt=""
              />{" "}
              <span className="text-black">Job Title:</span>
              {singleJob.jobTitle}
            </p>
            <h5 className="font-semibold pb-2 border-b-2">
              Contact Information
            </h5>
            <p className="text-[#757575]">
              <img
                className="inline"
                src="../../../public/Icons/Frame-2.png"
                alt=""
              />{" "}
              <span className="text-black">Phone:</span> {singleJob.phone}
            </p>
            <p className="text-[#757575]">
              <img
                className="inline"
                src="../../../public/Icons/Frame-3.png"
                alt=""
              />{" "}
              <span className="text-black">Email:</span> {singleJob.email}
            </p>
            <p className="text-[#757575]">
              <img
                className="inline"
                src="../../../public/Icons/Frame-4.png"
                alt=""
              />{" "}
              <span className="text-black">Address:</span> {singleJob.location}
            </p>
          </div>
          <button onClick={() => addToDb(singleJob.id)} className="font-semibold text-white rounded-lg bg-gradient-to-tl from-[#7E90FE] to-[#9873FF] py-3 px-24 mt-6">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
