import React, { useContext, useState } from "react";
import { jobContext } from "../Home/Home";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const jobs = useContext(jobContext);
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="mb-32">
      <div>
        <h1 className="text-4xl font-bold text-center my-4">Featured Jobs</h1>
        <p className="text-center text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {showAll
          ? jobs.map((job) => <Job key={job.id} job={job}></Job>)
          : jobs.slice(0, 4).map((job) => <Job key={job.id} job={job}></Job>)}
      </div>
      <button
        onClick={() => setShowAll(true)}
        className={`font-semibold text-white px-6 py-4 mx-auto rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ${
          showAll ? "hidden" : "block"
        }`}
      >
        See All Jobs
      </button>
    </div>
  );
};

export default FeaturedJobs;
