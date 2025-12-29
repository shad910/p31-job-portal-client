import React from 'react';
import { useParams, useLoaderData } from 'react-router';
import JobCards from '../../Shared/JobCards';
import { Helmet } from 'react-helmet-async';

const CategoryJobs = () => {
    const { id } = useParams();
    const idINT = parseInt(id)



    // Safety: If useLoaderData is undefined, default to an empty object
    const response = useLoaderData() || {};
    const jobs = response.data || [];

    // Filter jobs based on category ID
    const filteredJobs = id === "0"
        ? jobs
        : jobs.filter((job) => job.categoryID === idINT);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-self-center mx-auto my-16 gap-2 lg:gap-5'>

            <Helmet>
                <title>CAREER-CODE | Category Jobs</title>
            </Helmet>

            {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                    <JobCards key={job.id || index} job={job} index={index} />
                ))
            ) : (
                <p>No jobs found for this category.</p>
            )}
        </div>
    );
};

export default CategoryJobs;