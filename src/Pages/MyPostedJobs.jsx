import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AuthContext from '../Contexts/AuthContext';
import axios from 'axios';
import Lottie from 'lottie-react';
import NoDataFound from "../assets/lottieFiles/NoDataFound.json";

const MyPostedJobs = () => {

    const { user } = use(AuthContext);
    const data = useLoaderData();
    const [postedJobs, setPostedJobs] = useState([])

    const handleDeleteJob = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/job/${id}`);
            console.log('Delete successful:', response.data);
            setPostedJobs(prevJobs => prevJobs.filter(job => job._id !== id));
        } catch (error) {
            console.error('Error deleting item:', error.response?.data || error.message);
        }
    }

    useEffect(() => {
        if (data && user) {
            const MyPostedJobs = data.filter(job => job?.hr_email === user?.email);
            setPostedJobs(MyPostedJobs);
        } else {
            setPostedJobs([]);
        }
    }, [user, data]);

    if (postedJobs.length === 0) {
        return (
            <section className='my-14 space-y-5'>
                <div className='flex justify-center'>
                    <Lottie style={{ width: '300px' }} animationData={NoDataFound} loop={true} />
                </div>
                <h2 className='text-3xl font-bold text-center'>You have not posted any jobs yet.</h2>
                <div className='flex justify-center'>
                    <Link to="/add-jobs" className='btn btn-primary btn-outline'>Add a new job</Link>
                </div>
            </section>
        )
    } else {
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
                            {postedJobs.map((job, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.jobType}</td>
                                    <td>{job.company}</td>
                                    <td>{job.location}</td>
                                    <td>
                                        <Link to={`/jobDetails/${job._id}`} className='btn btn-xs btn-primary mr-2'>Details</Link>
                                        <Link to={`/update-job/${job._id}`} className='btn btn-xs btn-success mr-2'>Edit</Link>
                                        <button onClick={() => handleDeleteJob(job._id)} className='btn btn-xs btn-error'>Delete</button>
                                    </td>
                                </tr>)}

                        </tbody>

                    </table>
                </div>
            </section>
        )
    }
};

export default MyPostedJobs;