import React from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../Hooks/UseAuth';
import Lottie from 'lottie-react';
import notebook from '../assets/lottieFiles/notebook.json';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const JobApply = () => {
    const { user } = useAuth();
    const { data } = useLoaderData();
    const id = data._id;


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        if (formData.entries().next().done) {
            console.log("Form is empty");
            return;
        }

        const application = Object.fromEntries(formData.entries());
        application.jobID = id;
        application.status = 'Pending';

        axios.post(`${import.meta.env.VITE_API_URL}/applications`, application)
            .then(response => {
                
                if (response.data.insertedId) {

                    toast.success('Job added successfully!', {
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

                    form.reset();
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
    }


    return (
        <section>
            <section className='my-10 space-y-6 mx-2.5'>
                <h1 className='poppins text-xl md:text-2xl lg:text-3xl text-center font-medium'>Apply for <b className='font-semibold'>{data.title}</b></h1>
                <section className='flex justify-center'>
                    <div className="card w-full max-w-sm ">
                        <div className="card-body border-2 rounded-2xl">
                            <form onSubmit={handleSubmit} className="fieldset">
                                {/* Name */}
                                <div>
                                    <label className="label">Name</label>
                                    <input defaultValue={user?.displayName} name='name' type="text" className="input" placeholder="Type your name" readOnly />
                                </div>
                                {/* Email Address */}
                                <div>
                                    <label className="label">Email</label>
                                    <input defaultValue={user?.email} name='applicant' type="email" className="input" placeholder="type your email address" readOnly />
                                </div>
                                {/* Git-Hub Link */}
                                <div>
                                    <label className="label">Git-Hub Link</label>
                                    <input name='github' type="url" className="input" placeholder="Paste your Git-Hub link" required/>
                                </div>
                                {/* LinkedIn Profile Link */}
                                <div>
                                    <label className="label">LinkedIn Profile Link</label>
                                    <input name='linkedIn' type="url" className="input" placeholder="Paste your LinkedIn Profile link" required/>
                                </div>
                                {/* Portfolio Link */}
                                <div>
                                    <label className="label">Portfolio Link</label>
                                    <input name='portfolio' type="url" className="input" placeholder="Paste your Portfolio link" required/>
                                </div>
                                {/* Resume Link */}
                                <div>
                                    <label className="label">Resume Link</label>
                                    <input name='resume' type="url" className="input" placeholder="Paste your Resume link" required/>
                                </div>

                                <button type='submit' className="btn btn-neutral mt-4">Submit Details</button>
                            </form>
                        </div>
                    </div>
                </section>
            </section>

            {/* For 1024px Display */}
            <section className='absolute right-10 top-60 hidden lg:flex xl:hidden'>
                <Lottie style={{ width: '300px' }} animationData={notebook} loop={true} />
            </section>
            {/* For 1280px Display */}
            <section className='absolute right-10 top-44 hidden xl:flex'>
                <Lottie style={{ width: '500px' }} animationData={notebook} loop={true} />
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

export default JobApply;