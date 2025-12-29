import { FaMapMarkerAlt, FaLock, FaClock } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";


const JobCards = ({ job, index }) => {

  const { _id, company_logo, company, location, title, jobType, description, requirements, salaryRange, status } = job;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.10,
        delay: index * 0.10,
        easing: "ease-out",
      }}
      whileHover={{
        y: -4,
        scale: 1.0,
        transition: {
          duration: 0.18,
          easing: "ease-out",
        },
      }}
      className="w-72 flex flex-col bg-base-100 text-base-content shadow-lg rounded-2xl p-5 border border-base-300 hover:shadow-xl transition"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 flex-1">
        <img
          src={company_logo}
          alt={company}
          className="w-10 h-10 rounded-lg"
        />
        <div>
          <h3 className="font-semibold">{company}</h3>
          <div className="flex items-center text-sm opacity-80">
            <FaMapMarkerAlt className="mr-1 text-blue-500" />
            {location}
          </div>
        </div>
      </div>

      {/* Job Info */}
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <div className="flex items-center gap-3 text-sm opacity-80 mb-3">
        <div className="flex items-center">
          <FaLock className="mr-1 text-gray-400 dark:text-gray-500" /> {jobType}
        </div>
        <div className="flex items-center">
          <FaClock className="mr-1 text-gray-400 dark:text-gray-500" /> {status}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm opacity-80 mb-4 flex-1">
        {description.slice(0, 100)}...
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {requirements?.map((req, index) => (
          <span
            key={index}
            className="badge badge-outline badge-sm border-base-300 text-base-content opacity-90"
          >
            {req}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center flex-1">
        <span className="text-blue-500 font-bold">BDT {salaryRange.max}</span>
        <span className="text-xs opacity-70">/Hour</span>
        <Link to={`/jobDetails/${_id}`} className="btn btn-primary btn-soft btn-sm ml-auto">Details</Link>
      </div>
    </motion.div>
  );
};

export default JobCards;
