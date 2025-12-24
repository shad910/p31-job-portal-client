import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AuthContext from '../Contexts/AuthContext';
import axios from 'axios';
import Lottie from 'lottie-react';
import NoDataFound from "../assets/lottieFiles/NoDataFound.json";
import { Bounce, toast, ToastContainer } from 'react-toastify';

const MyPostedJobs = () => {

    const { user } = use(AuthContext);
    const { data } = useLoaderData();
    const [postedJobs, setPostedJobs] = useState([]);

    const handleDeleteJob = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/job/${id}`);

            if (response.data.deletedCount > 0) {
                toast.warn('Job deleted successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setPostedJobs(prevJobs => prevJobs.filter(job => job._id !== id));
            } else {
                toast.error(`Delete failed`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
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
            <section className='my-8 space-y-5'>
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
            <section className='my-5 lg:my-10 space-y-6'>
                <h1 className='poppins text-center text-3xl font-bold'>My Posted Jobs</h1>
                <div className="overflow-x-auto">
                    <table className="table w-10/12 mx-auto">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Company Information</th>
                                <th>Job Information</th>
                                <th>Salary Range</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postedJobs.map((job, index) =>
                                <tr key={index} className="hover:bg-base-300">
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job?.company_logo}
                                                        alt={job?.company} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job?.company}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job?.title}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{job?.jobType}</span>
                                    </td>
                                    <td className='font-medium'>
                                        <span>Min: {job?.salaryRange?.min} {job?.salaryRange?.currency?.toUpperCase()}</span>
                                        <br />
                                        <span>Max: {job?.salaryRange?.max} {job?.salaryRange?.currency?.toUpperCase()}</span>
                                    </td>
                                    <td>
                                        <Link to={`/applications/${job._id}`} className='btn btn-xs btn-success mr-2'>View Applications</Link>
                                        <Link to={`/jobDetails/${job._id}`} className='btn btn-xs btn-primary mr-2'>Details</Link>
                                        <Link to={`/update-job/${job._id}`} className='btn btn-xs btn-warning mr-2'>Edit</Link>
                                        <button onClick={() => handleDeleteJob(job._id)} className='btn btn-xs btn-error'>Delete</button>
                                    </td>
                                </tr>)}

                        </tbody>

                    </table>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
            </section>
        )
    }
};

export default MyPostedJobs;