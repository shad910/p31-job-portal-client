import React from 'react';

const MyApplication = () => {
    return (
        <section className='mx-10 my-10'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Job Type</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {postedJobs.map((job, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.jobType}</td>
                                <td>{job.company}</td>
                                <td>{job.location}</td>
                                <td>
                                    <Link to={`/jobDetails/${job._id}`} className='btn btn-xs btn-primary mr-2'>Details</Link>
                                    <button className='btn btn-xs btn-success mr-2'>Edit</button>
                                    <button className='btn btn-xs btn-error'>Delete</button>
                                </td>
                            </tr>)} */}

                    </tbody>

                </table>
            </div>
        </section>
    );
};

export default MyApplication;