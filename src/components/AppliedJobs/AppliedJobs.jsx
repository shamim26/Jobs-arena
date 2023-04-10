import React from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const data = useLoaderData();
    return (
        <div>
            <div>
                <CommonBanner>Applied Jobs</CommonBanner>
            </div>
            <div className='container w-9/12 mx-auto'>
                <select className='bg-[#F4F4F4] rounded-lg outline-none px-4 py-3 block mt-24 ml-auto' name="sort" id="">
                    <option value="">Filter By</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">Onsite</option>
                </select>
                {
                    data.map(job => <AppliedJob key={job.id} job ={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;