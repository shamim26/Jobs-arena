import React, { useEffect, useState } from "react";
import SingleCategory from "./singleCategory";


const JobCategory = () => {
  const [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    fetch("categoryData.json")
      .then((res) => res.json())
      .then((data) => setAllCategory(data));
  }, []);
  return (
    <div className="mt-28">
      <h1 className="text-4xl font-bold text-center my-4">Job Category List</h1>
      <p className="text-center text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-4 gap-5 my-8 ">
        {
            allCategory.map(category => <SingleCategory key={category.category} cate={category}></SingleCategory>)
        }
      </div>
    </div>
  );
};

export default JobCategory;
