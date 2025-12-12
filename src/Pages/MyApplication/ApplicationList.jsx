import React, { use, useState } from 'react';
import Lottie from 'lottie-react';
import NoDataFound from "../../assets/lottieFiles/NoDataFound.json";
import ApplicationRow from './ApplicationRow';
import axios from 'axios';
import { Link } from 'react-router';
import { Bounce, toast } from 'react-toastify';

const ApplicationList = ({ myApplicationPromise }) => {

    const jobData = use(myApplicationPromise);
    const initialApplications = jobData?.data || [];
    const [applications, setApplications] = useState(initialApplications);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/applications/${id}`
            );

            if (response.data.deletedCount > 0) {
                toast.warn('Application deleted successfully', {
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
                setApplications(prev => prev.filter(app => app._id !== id));
            } else {
                toast.error('Delete failed', {
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
            console.error("Delete failed:", error);

        }
    };


    if (applications.length === 0) {
        return (
            <section className='my-14 space-y-5'>
                <div className='flex justify-center'>
                    <Lottie style={{ width: '300px' }} animationData={NoDataFound} loop={true} />
                </div>
                <h2 className='text-3xl font-bold text-center'>You haven’t applied for any jobs yet.</h2>
                <div className='flex justify-center'>
                    <Link to="/category/0" className='btn btn-primary btn-outline'>Apply for Job</Link>
                </div>
            </section>
        )
    } else {
        return (
            <section className='mx-10 my-14'>
                <div className="overflow-x-auto">
                    <table className="table w-10/12 mx-auto">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Company Information</th>
                                <th>Job Information</th>
                                <th>Salary Range</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application, index) =>
                                <ApplicationRow key={index}
                                    application={application}
                                    index={index} handleDelete={handleDelete}>
                                </ApplicationRow>)}
                        </tbody>

                    </table>
                </div>

            </section>
        );
    }
};

export default ApplicationList;