import React, { use } from 'react';
import Hot_Jobs from "./Hot_Jobs";


const Jobs = ({ job_promise }) => {

    const jobs_post = use(job_promise);

    return (
        <section className='flex flex-col justify-center items-center mx-auto px-4 md:px-6 lg:px-8 xl:px-10 mt-30'>
            <div className='mt-16 mb-12 text-center space-y-1.5'>
                <h2 className='poppins text-5xl font-bold'>Jobs of the day</h2>
                <p className='text-lg font-medium'>Search, explore and connect with the right candidates faster.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-self-center mx-auto mb-20 gap-2 lg:gap-5'>
                {jobs_post.map(job => <Hot_Jobs key={job._id} job={job}></Hot_Jobs>).slice(0, 8)}
            </div>
        </section>
    );
};

export default Jobs;