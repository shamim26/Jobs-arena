import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const data = useLoaderData();
    
    const jobId = useParams();
    console.log(jobId);
  return (
    <div>
      <div>
        <CommonBanner>Job Details</CommonBanner>
      </div>

    </div>
  );
};

export default JobDetails;
