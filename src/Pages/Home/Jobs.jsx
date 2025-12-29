import React, { use } from 'react';
import JobCards from '../../Shared/JobCards';
import { motion } from "motion/react";

const Jobs = ({ job_promise }) => {

    const jobs_post = use(job_promise);

    return (
        <section className='flex flex-col justify-center items-center mx-auto px-4 md:px-6 lg:px-8 xl:px-10 mt-30'>
            <div className='mt-16 text-center space-y-1.5'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.45,
                        easing: "ease-out",
                    }}
                    className="poppins text-5xl font-bold"
                >
                    Jobs of the day
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.45,
                        delay: 0.12,
                        easing: "ease-out",
                    }}
                    className="text-lg font-medium"
                >
                    Search, explore and connect with the right candidates faster.
                </motion.p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-self-center mx-auto my-16 gap-2 lg:gap-5'>
                {jobs_post.slice(0, 8).map((job, index) => (
                    <JobCards key={job._id} job={job} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Jobs;