import axios from 'axios';
import React from 'react';
import Lottie from 'lottie-react';
import NoDataFound from "../assets/lottieFiles/NoDataFound.json";
import { FaGithub, FaLink, FaLinkedin } from 'react-icons/fa';
import { IoDocumentAttach, IoDocumentAttachOutline } from "react-icons/io5";
import { GrStatusUnknown } from "react-icons/gr";
import { Link, useLoaderData } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const ViewApplication = () => {

    const { data } = useLoaderData();

    const handleStatusChange = (e, applicationID) => {
        e.preventDefault();
        const newStatus = e.target.value;

        axios.patch(`${import.meta.env.VITE_API_URL}/applications/${applicationID}`, { status: newStatus })
            .then(response => {

                if (response.data.modifiedCount > 0) {

                    toast.success('Status updated successfully!', {
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
                } else {
                    toast.error('Error!', {
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

            }).catch(error => console.log(error));

    }


    if (data.length === 0) {
        return (
            <section className='my-8 space-y-5'>

                <Helmet>
                    <title>CAREER-CODE | View Application Details</title>
                </Helmet>

                <div className='flex justify-center'>
                    <Lottie style={{ width: '300px' }} animationData={NoDataFound} loop={true} />
                </div>
                <h2 className='text-3xl font-bold text-center'>There are no applicants for this particular job</h2>
                <div className='flex justify-center'>
                    <Link to="/my-posted-jobs" className='btn btn-primary btn-outline'>Back</Link>
                </div>
            </section>
        )
    }

    else {
        return (
            <div className='space-y-5 my-8'>

                <Helmet>
                    <title>CAREER-CODE | View Application Details</title>
                </Helmet>

                <h1 className='poppins text-xl md:text-2xl lg:text-3xl text-center font-medium'>Applicant List</h1>
                <div className="overflow-x-auto">
                    <table className="table w-11/12 mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="whitespace-nowrap">#</th>
                                <th className="whitespace-nowrap">Applicant Name</th>
                                <th className="whitespace-nowrap">Applicant Email</th>
                                <th className="whitespace-nowrap"><div className="flex items-center gap-1"><FaGithub /> GitHub</div></th>
                                <th className="whitespace-nowrap"><div className="flex items-center gap-1"><FaLinkedin /> LinkedIn</div></th>
                                <th className="whitespace-nowrap"><div className="flex items-center gap-1"><IoDocumentAttach /> Portfolio</div></th>
                                <th className="whitespace-nowrap"><div className="flex items-center gap-1"><IoDocumentAttachOutline /> Resume</div></th>
                                <th className="whitespace-nowrap"><div className="flex items-center gap-1"><GrStatusUnknown /> Status</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {data.map((application, index) =>
                                <tr key={index} className='hover:bg-base-300'>
                                    <th>{index + 1}</th>
                                    <td>{application?.name}</td>
                                    <td className='text-sm'>{application.applicant}</td>
                                    <td>
                                        <Link to={`${application?.github}`} className='text-sm text-blue-500 flex justify-center gap-1'>
                                            Git-Hub <FaLink /></Link>
                                    </td>
                                    <td>
                                        <Link to={`${application?.linkedIn}`} className='text-sm text-blue-500 flex justify-center gap-1'>
                                            LinkedIn <FaLink /></Link>
                                    </td>
                                    <td>
                                        <Link to={`${application?.portfolio}`} className='text-sm text-blue-500 flex justify-center gap-1'>
                                            Portfolio <FaLink /></Link>
                                    </td>
                                    <td>
                                        <Link to={`${application?.resume}`} className='text-sm text-blue-500 flex justify-center gap-1'>
                                            Resume <FaLink /></Link>
                                    </td>
                                    <td className='text-xs'>
                                        <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application?.status} className="select select-sm">
                                            <option disabled={true}>{application?.status}</option>
                                            <option>Pending</option>
                                            <option>Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            )}
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
            </div>
        );
    }
};

export default ViewApplication;