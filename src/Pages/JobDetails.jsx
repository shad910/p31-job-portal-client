import React from "react";
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {

    const jobDetails = useLoaderData();

    const {
        _id,
        title,
        company,
        location,
        jobType,
        salaryRange,
        postedDate,
        deadline,
        experience,
        description,
        requirements,
        responsibilities,
        company_logo,
    } = jobDetails;

    return (
        <section className="bg-base-100 text-base-content py-10 px-6 md:px-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="bg-base-200 rounded-2xl shadow-md overflow-hidden">
                        <img src={company_logo} alt={company} className="w-full h-64 object-cover" />
                        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-1">{title}</h2>
                                <p className="text-sm flex items-center gap-2 opacity-80">
                                    <FaMapMarkerAlt /> {location}
                                </p>
                            </div>
                            <Link to={`/job-apply/${_id}`} className="btn btn-primary btn-sm mt-4 md:mt-0">Apply Now</Link>
                        </div>
                    </div>

                    {/* Employment Information */}
                    <div className="bg-base-200 border border-base-300 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold mb-4">Employment Information</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <FaBriefcase className="text-primary" />
                                <span>{jobType}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock className="text-primary" />
                                <span>{experience} Experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaDollarSign className="text-primary" />
                                <span>BDT {salaryRange?.min} - {salaryRange?.max}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-primary" />
                                <span>Posted: {postedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-primary" />
                                <span>Deadline: {deadline}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-primary" />
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-base-200 border border-base-300 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold mb-3">Welcome to {company} Team</h3>
                        <p className="text-sm opacity-80 mb-4">{description}</p>

                        <h4 className="font-semibold mt-4 mb-2">Essential Knowledge, Skills, and Experience</h4>
                        <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
                            {requirements?.map((req, i) => <li key={i}>{req}</li>)}
                        </ul>

                        {responsibilities && (
                            <>
                                <h4 className="font-semibold mt-4 mb-2">Responsibilities</h4>
                                <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
                                    {responsibilities.map((pref, i) => <li key={i}>{pref}</li>)}
                                </ul>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    {/* Company Info Card */}
                    <div className="bg-base-200 border border-base-300 rounded-xl p-5 shadow-sm">
                        <h3 className="font-semibold mb-2">About {company}</h3>
                        <img src={company_logo} alt={company} className="w-full h-28 object-contain mb-3 rounded-lg" />
                        <p className="text-sm opacity-80">
                            {company} is a growing tech company focusing on scalable web and app solutions.
                        </p>
                        <div className="mt-3 text-sm opacity-70">
                            <p><strong>Location:</strong> {location}</p>
                            <p><strong>Founded:</strong> 2018</p>
                            <p><strong>Employees:</strong> 100+</p>
                        </div>
                    </div>

                    {/* Similar Jobs */}
                    <div className="bg-base-200 border border-base-300 rounded-xl p-5 shadow-sm">
                        <h3 className="font-semibold mb-4">Similar Jobs</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                "UI/UX Designer",
                                "Frontend Developer",
                                "Backend Engineer",
                                "Product Designer",
                                "Data Analyst",
                            ].map((role, index) => (
                                <li key={index} className="flex items-center justify-between">
                                    <span>{role}</span>
                                    <button className="btn btn-outline btn-xs">View</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Buttons
            <div className="mt-10 flex justify-center gap-3">
                <button className="btn btn-primary">Apply Now</button>
                <button className="btn btn-outline">Save Job</button>
            </div> */}
        </section>
    );
};

export default JobDetails;