import React, { use } from 'react';
import JobCards from '../../Shared/JobCards';


const Jobs = ({ job_promise }) => {

    const jobs_post = use(job_promise);

    return (
        <section className='flex flex-col justify-center items-center mx-auto px-4 md:px-6 lg:px-8 xl:px-10 mt-30'>
            <div className='mt-16 text-center space-y-1.5'>
                <h2 className='poppins text-5xl font-bold'>Jobs of the day</h2>
                <p className='text-lg font-medium'>Search, explore and connect with the right candidates faster.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-self-center mx-auto my-16 gap-2 lg:gap-5'>
                {jobs_post.map(job => <JobCards key={job._id} job={job}></JobCards>).slice(0, 8)}
            </div>
        </section>
    );
};

export default Jobs;