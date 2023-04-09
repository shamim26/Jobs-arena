import React from "react";

const SingleCategory = (props) => {
  const { logo, category, jobsAvailable } = props.cate;

  return (
    <div className="p-10 bg-gradient-to-t from-[#7E90FE0D] from-5% to-[#9873FF0D] to-5%">
      <img className="p-4 rounded-lg bg-gradient-to-l from-[#7E90FE1A] from-10% to-[#9873FF0D] to-10%" src={logo} alt={category} />
      <h4>{category}</h4>
      <p>{jobsAvailable}</p>
    </div>
  );
};

export default SingleCategory;
