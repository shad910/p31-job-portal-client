import { FaMapMarkerAlt, FaLock, FaClock } from "react-icons/fa";
import { useLoaderData } from "react-router";

const Card = () => {
  const data = useLoaderData();

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-self-center mx-auto my-20 gap-2 lg:gap-5'>
      {data.map((job, index) => <div
        key={index}
        className="w-72 flex flex-col bg-base-100 text-base-content shadow-lg rounded-2xl p-5 border border-base-300 hover:shadow-xl transition duration-300"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 flex-1">
          <img
            src={job.company_logo}
            alt={job.company}
            className="w-10 h-10 rounded-lg"
          />
          <div>
            <h3 className="font-semibold">{job.company}</h3>
            <div className="flex items-center text-sm opacity-80">
              <FaMapMarkerAlt className="mr-1 text-blue-500" />
              {job.location}
            </div>
          </div>
        </div>

        {/* Job Info */}
        <h4 className="text-lg font-semibold mb-1">{job.title}</h4>
        <div className="flex items-center gap-3 text-sm opacity-80 mb-3">
          <div className="flex items-center">
            <FaLock className="mr-1 text-gray-400 dark:text-gray-500" /> {job.jobType}
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1 text-gray-400 dark:text-gray-500" /> {job.status}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm opacity-80 mb-4 flex-1">
          {job.description.slice(0, 100)}...
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {job.requirements.map((req, index) => (
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
          <span className="text-blue-500 font-bold">BDT {job.salaryRange.max}</span>
          <span className="text-xs opacity-70">/Hour</span>
          <button className="btn btn-primary btn-sm ml-auto">Apply Now</button>
        </div>
      </div>

      )}
    </section>
  );
};

export default Card;
