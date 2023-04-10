import React, { useEffect, useState } from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const data = useLoaderData();
  const [storedJobs, setStoredJobs] = useState(data);
  const [renderJobs, setRenderJobs] = useState([]);

  useEffect(() => {
    setRenderJobs(storedJobs);
  }, [storedJobs]);
  const handleSort = (selected) => {
    if (selected === "") {
      setRenderJobs(data);
    } else {
      const sorted = storedJobs.filter(
        (job) => job.remoteOrOnsite === selected
      );
      setRenderJobs(sorted);
    }
  };
  return (
    <div>
      <div>
        <CommonBanner>Applied Jobs</CommonBanner>
      </div>
      <div className="container w-9/12 mx-auto">
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="bg-[#F4F4F4] rounded-lg outline-none px-4 py-3 block mt-24 ml-auto"
          name="sort"
          id=""
        >
          <option value="" selected disabled>
            Filter By
          </option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
        {renderJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
