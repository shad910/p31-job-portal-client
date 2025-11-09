import React from 'react';
import { useLoaderData } from 'react-router';
import JobCards from '../Shared/JobCards';

const JobsPage = () => {

    const data = useLoaderData();
    console.log(data);

    data.map(job => { console.log(job) })


    return (
        <section>
            <div className='my-12 text-center space-y-1.5'>
                <h2 className='poppins text-5xl font-bold'>Jobs of the day</h2>
                <p className='text-lg font-medium'>Search, explore and connect with the right candidates faster.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-self-center mx-auto my-20 gap-2 lg:gap-5'>
                {data.map(job => <JobCards key={job._id} job={job}></JobCards>)}
            </div>
        </section>
    );
};

export default JobsPage;