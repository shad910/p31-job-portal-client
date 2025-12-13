import axios from 'axios';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ViewApplication = () => {
    const id = useParams()
    const { data } = useLoaderData();

    const handleStatusChange = (e, applicationID) => {
        e.preventDefault();
        const newStatus = e.target.value;
        console.log(newStatus, applicationID);

        axios.patch(`${import.meta.env.VITE_API_URL}/applications/${applicationID}`, { status: newStatus })
            .then(response => {
                console.log(response.data);
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

    return (
        <div className='space-y-5 my-12'>
            <h1 className="text-2xl text-center"><q className='font-medium'>{data.length}</q> Job application details for <q>{id.id}</q></h1>
            <div className="overflow-x-auto">
                <table className="table w-11/12 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Applicant Name</th>
                            <th>Applicant Email</th>
                            <th>Git-Hub Link</th>
                            <th>LinkedIn Link</th>
                            <th>Portfolio Link</th>
                            <th>Resume Link</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {data.map((application, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{application?.name}</td>
                                <td className='text-sm'>{application.applicant}</td>
                                <td><Link to={`${application?.github}`} className='text-xs text-blue-500'>{application.github}</Link></td>
                                <td><Link to={`${application?.linkedIn}`} className='text-xs text-blue-500'>{application.linkedIn}</Link></td>
                                <td><Link to={`${application?.portfolio}`} className='text-xs text-blue-500'>{application.portfolio}</Link></td>
                                <td><Link to={`${application?.resume}`} className='text-xs text-blue-500'>{application.resume}</Link></td>
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
};

export default ViewApplication;