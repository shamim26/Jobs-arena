import React, { createContext, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

export const jobContext = createContext();

const Home = () => {
    const jobs = useLoaderData();
    
    return (
        <jobContext.Provider value={jobs}>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </jobContext.Provider>
    );
};

export default Home;