import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const UpdateJobApply = () => {
    const { data } = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateApplication = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const application = Object.fromEntries(formData.entries());

        axios.patch(`${import.meta.env.VITE_API_URL}/applications/${data._id}`, application)
            .then(response => {

                if (response?.data?.modifiedCount) {

                    toast.success('Application updated successfully!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });

                    setTimeout(() => {
                        navigate("/my-application");
                    }, 3000);

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
            })
            .catch(error => {
                console.error('Error adding job:', error);
            });

    };


    return (
        <section className='my-6 lg:my-10 space-y-6'>
            <Helmet>
                <title>CAREER-CODE | Update Job Application</title>
            </Helmet>

            <h1 className='poppins text-center text-3xl font-bold '>Update your Application Details</h1>

            <section className='flex justify-center'>
                <div className="card w-full max-w-sm ">
                    <div className="card-body border-2 rounded-2xl">
                        <form onSubmit={handleUpdateApplication} className="fieldset">
                            {/* Name */}
                            <div>
                                <label className="label">Name</label>
                                <input defaultValue={data?.name} name='name' type="text" className="input text-gray-400" placeholder="Type your name" readOnly />
                            </div>
                            {/* Email Address */}
                            <div>
                                <label className="label">Email</label>
                                <input defaultValue={data?.applicant} name='applicant' type="email" className="input text-gray-400" placeholder="type your email address" readOnly />
                            </div>
                            {/* Git-Hub Link */}
                            <div>
                                <label className="label">Git-Hub Link</label>
                                <input defaultValue={data?.github} name='github' type="url" className="input" placeholder="Paste your Git-Hub link" required />
                            </div>
                            {/* LinkedIn Profile Link */}
                            <div>
                                <label className="label">LinkedIn Profile Link</label>
                                <input defaultValue={data?.linkedIn} name='linkedIn' type="url" className="input" placeholder="Paste your LinkedIn Profile link" required />
                            </div>
                            {/* Portfolio Link */}
                            <div>
                                <label className="label">Portfolio Link</label>
                                <input defaultValue={data?.portfolio} name='portfolio' type="url" className="input" placeholder="Paste your Portfolio link" required />
                            </div>
                            {/* Resume Link */}
                            <div>
                                <label className="label">Resume Link</label>
                                <input defaultValue={data?.resume} name='resume' type="url" className="input" placeholder="Paste your Resume link" required />
                            </div>

                            <button type='submit' className="btn btn-neutral mt-4">Submit Details</button>
                        </form>
                    </div>
                </div>
            </section>

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
    );
};

export default UpdateJobApply;