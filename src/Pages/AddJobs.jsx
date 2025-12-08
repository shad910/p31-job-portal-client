import React, { use } from 'react';
import AuthContext from '../Contexts/AuthContext';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';

// 1. Define the Categories with their IDs
const categories = [
    { "categoryID": 0, "categoryName": "All" },
    { "categoryID": 1, "categoryName": "Teaching" },
    { "categoryID": 2, "categoryName": "Data" },
    { "categoryID": 3, "categoryName": "Design" },
    { "categoryID": 4, "categoryName": "Development" },
    { "categoryID": 5, "categoryName": "Marketing" },
    { "categoryID": 6, "categoryName": "Management" },
    { "categoryID": 7, "categoryName": "Finance" },
    { "categoryID": 8, "categoryName": "Engineering" },
    { "categoryID": 9, "categoryName": "HR" },
    { "categoryID": 10, "categoryName": "Support" }
];

const AddJobs = () => {

    const { user } = use(AuthContext);

    const handleAddJob = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const { min, max, currency, ...newJobData } = data;
        
        // --------------------------------------------------------
        // START: Logic to Auto-Assign Category ID
        // --------------------------------------------------------
        const selectedCategory = categories.find(cat => cat.categoryName === newJobData.category);
        if (selectedCategory) {
            newJobData.categoryID = selectedCategory.categoryID;
        } else {
            newJobData.categoryID = 0; // Default fallback
        }
        // --------------------------------------------------------
        // END: Logic
        // --------------------------------------------------------

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

        newJobData.status = "active";

        axios.post('http://localhost:5000/jobs', newJobData)
            .then(response => {
                if (response.data.result.insertedId) {

                    toast('🦄 Job added successfully!', {
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
                    toast.warn('Error', {
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
        <section className="card bg-base-100 w-full shrink-0  mb-20">
            <div className="card-body">
                <form onSubmit={handleAddJob} className="fieldset">
                    <legend className='poppins text-center text-2xl font-bold my-4'>Add new jobs</legend>

                    {/* Job title */}
                    <div>
                        <label className="label">Job Title</label>
                        <input name='title' type="text" className="input w-full" placeholder="Type the job title" />
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="label">Company Name</label>
                        <input name='company' type="text" className="input w-full" placeholder="Type the Company Name" />
                    </div>

                    {/* Company Logo */}
                    <div>
                        <label className="label">Company Logo</label>
                        <input name='company_logo' type="url" className="input w-full" placeholder="Paste the logo url" />
                    </div>

                    {/* Company Location */}
                    <div>
                        <label className="label">Location</label>
                        <input name='location' type="text" className="input w-full" placeholder="type the location" />
                    </div>

                    <section className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>
                        {/* Job Type */}
                        <div>
                            <legend className="label mb-1">Job Type</legend>
                            <div className="filter ">
                                <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                                <input className="btn" type="radio" name="jobType" aria-label="On-Site" value="On-Site" />
                                <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
                                <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
                            </div>
                        </div>

                        {/* Job Category - UPDATED TO USE MAP */}
                        <div>
                            <legend className="label mb-1">Job Category</legend>
                            <select name="category" defaultValue="Job Category" className="select w-full">
                                <option disabled={true}>Job Category</option>
                                {categories.map((cat) => (
                                    cat.categoryName !== "All" && (
                                        <option key={cat.categoryID} value={cat.categoryName}>
                                            {cat.categoryName}
                                        </option>
                                    )
                                ))}
                            </select>
                        </div>

                        {/* Job Deadline */}
                        <div>
                            <legend className="label mb-1">Application Deadline</legend>
                            <input name='applicationDeadline' type="date" className="input w-full" />
                        </div>
                    </section>

                    {/* Salary Range */}
                    <section className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>
                        {/* Min Salary */}
                        <div>
                            <label className="label mb-1">Minimum Salary</label>
                            <input name='min' type="number" className="input w-full" placeholder="type the Minimum Salary" />
                        </div>
                        {/* Max Salary */}
                        <div>
                            <label className="label mb-1">Maximum Salary</label>
                            <input name='max' type="number" className="input w-full" placeholder="type the Maximum Salary" />
                        </div>
                        {/* Currency */}
                        <div>
                            <legend className="label mb-1">Currency</legend>
                            <select name='currency' defaultValue="Select Currency" className="select w-full">
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
                        <textarea name='description' className="textarea w-full my-2.5" placeholder="Job Description"></textarea>
                    </div>

                    {/* Job Requirement */}
                    <div>
                        <legend>Job Requirement</legend>
                        <textarea name='requirements' className="textarea w-full my-2.5" placeholder="Requirement (Separated by comma)"></textarea>
                    </div>

                    {/* Job Responsibilities */}
                    <div>
                        <legend>Job Responsibilities</legend>
                        <textarea name='responsibilities' className="textarea w-full my-2.5" placeholder="Responsibilities (Separated by comma)"></textarea>
                    </div>

                    <section className='grid grid-cols-1 md:grid-cols-2 gap-2.5'>
                        {/* HR Name */}
                        <div>
                            <label className="label">HR Name</label>
                            <input name='hr_name' defaultValue={user?.displayName} type="text" className="input w-full" placeholder="Type the job title" readOnly />
                        </div>

                        {/* HR Email */}
                        <div>
                            <label className="label">HR Email</label>
                            <input name='hr_email' defaultValue={user?.email} type="email" className="input w-full" placeholder="Type the Company Name" readOnly />
                        </div>
                    </section>

                    <button type='submit' className="btn btn-neutral mt-4">Add Job</button>
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

export default AddJobs;