import React from 'react';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const UpdateJobDetails = () => {

    const { data } = useLoaderData()
    const id = data._id;

    const handleAddJob = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Process the salary range object
        const { min, max, currency, ...newJobData } = data;
        newJobData.salaryRange = {
            min, max, currency
        }

        // process requirements
        const requirementsString = newJobData.requirements;
        const requirementsDirty = requirementsString.split(',');
        const requirementsClean = requirementsDirty.map(req => req.trim());
        newJobData.requirements = requirementsClean;

        // process responsibilities
        newJobData.responsibilities = newJobData.responsibilities.split(',').map(res => res.trim())

        try {
            const updatedDoc = { ...newJobData };

            const response = await axios.patch(`${import.meta.env.VITE_API_URL}/jobs/${id}`, updatedDoc);

            if (response?.data?.modifiedCount) {
                toast(`${updatedDoc.title || 'Job details'} has been updated successfully.`, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'light',
                    transition: Bounce,
                });

            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Failed to update product', {
                position: 'top-right',
                autoClose: 5000,
                theme: 'light',
            });
        }
    }

    return (
        <section className="card bg-base-100 w-full shrink-0  mb-20">

            <Helmet>
                <title>CAREER-CODE | Update Job Details</title>
            </Helmet>

            <div className="card-body">
                <form onSubmit={handleAddJob} className="fieldset">
                    <legend className='poppins text-center text-2xl font-bold my-4'>Update Job Details</legend>

                    {/* Job title */}
                    <div>
                        <label className="label">Job Title</label>
                        <input defaultValue={data.title} name='title' type="text" className="input w-full" placeholder="Type the job title" />
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="label">Company Name</label>
                        <input defaultValue={data.company} name='company' type="text" className="input w-full" placeholder="Type the Company Name" />
                    </div>

                    {/* Company Logo */}
                    <div>
                        <label className="label">Company Logo</label>
                        <input defaultValue={data.company_logo} name='company_log' type="url" className="input w-full" placeholder="Paste the logo url" />
                    </div>

                    {/* Company Location */}
                    <div>
                        <label className="label">Location</label>
                        <input defaultValue={data.location} name='location' type="text" className="input w-full" placeholder="type the location" />
                    </div>

                    <section className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>
                        {/* Job Type */}
                        <div>
                            <legend className="label mb-1">Job Type</legend>
                            <div className="filter">
                                <input
                                    className="btn filter-reset"
                                    type="radio"
                                    name="jobType"
                                    aria-label="All"
                                    value=""
                                    defaultChecked={data.jobType === "" || !data.jobType}
                                />

                                <input
                                    className="btn"
                                    type="radio"
                                    name="jobType"
                                    aria-label="On-Site"
                                    value="On-Site"
                                    defaultChecked={data.jobType === "On-Site"}
                                />

                                <input
                                    className="btn"
                                    type="radio"
                                    name="jobType"
                                    aria-label="Remote"
                                    value="Remote"
                                    defaultChecked={data.jobType === "Remote"}
                                />

                                <input
                                    className="btn"
                                    type="radio"
                                    name="jobType"
                                    aria-label="Hybrid"
                                    value="Hybrid"
                                    defaultChecked={data.jobType === "Hybrid"}
                                />
                            </div>
                        </div>

                        {/* Job Category */}
                        <div>
                            <legend className="label mb-1">Job Category</legend>
                            <select name="category" defaultValue={data.category} className="select w-full">
                                <option disabled={true}>Job Category</option>
                                <option value="Teaching">Teaching</option>
                                <option value="Data">Data</option>
                                <option value="Design">Design</option>
                                <option value="Development">Development</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Management">Management</option>
                                <option value="Finance">Finance</option>
                                <option value="Engineering">Engineering</option>
                                <option value="HR">HR</option>
                                <option value="Support">Support</option>
                            </select>
                        </div>

                        {/* Job Deadline */}
                        <div>
                            <legend className="label mb-1">Application Deadline</legend>
                            <input defaultValue={data.applicationDeadline} name='applicationDeadline' type="date" className="input w-full" />
                        </div>
                    </section>

                    {/* Salary Range */}
                    <section className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>
                        {/* Min Salary */}
                        <div>
                            <label className="label mb-1">Minimum Salary</label>
                            <input defaultValue={data.salaryRange.min} name='min' type="number" className="input w-full" placeholder="type the Minimum Salary" />
                        </div>
                        {/* Max Salary */}
                        <div>
                            <label className="label mb-1">Maximum Salary</label>
                            <input defaultValue={data.salaryRange.max} name='max' type="number" className="input w-full" placeholder="type the Maximum Salary" />
                        </div>
                        {/* Currency */}
                        <div>
                            <legend className="label mb-1">Currency</legend>
                            <select name='currency' defaultValue={data.currency} className="select w-full">
                                <option disabled={true}>Select Currency</option>
                                <option value="BDT">BDT</option>
                                <option value="INR">INR</option>
                                <option value="Dollar">Dollar</option>
                            </select>
                        </div>
                    </section>

                    {/* Job Description */}
                    <div>
                        <legend>Job Description</legend>
                        <textarea defaultValue={data.description} name='description' className="textarea w-full my-2.5" placeholder="Job Description"></textarea>
                    </div>

                    {/* Job Requirement */}
                    <div>
                        <legend>Job Requirement</legend>
                        <textarea defaultValue={data.requirements} name='requirements' className="textarea w-full my-2.5" placeholder="Requirement (Separated by comma)"></textarea>
                    </div>

                    {/* Job Responsibilities */}
                    <div>
                        <legend>Job Responsibilities</legend>
                        <textarea defaultValue={data.responsibilities} name='responsibilities' className="textarea w-full my-2.5" placeholder="Responsibilities (Separated by comma)"></textarea>
                    </div>

                    <section className='grid grid-cols-1 md:grid-cols-2 gap-2.5'>
                        {/* HR Name */}
                        <div>
                            <label className="label">HR Name</label>
                            <input name='hr_name' defaultValue={data.hr_name} type="text" className="input w-full" placeholder="Type the job title" readOnly />
                        </div>

                        {/* HR Email */}
                        <div>
                            <label className="label">HR Email</label>
                            <input name='hr_email' defaultValue={data.hr_email} type="email" className="input w-full" placeholder="Type the Company Name" readOnly />
                        </div>
                    </section>

                    <button type='submit' className="btn btn-neutral mt-4">Update Job Details</button>
                </form>
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
    );
};

export default UpdateJobDetails;
