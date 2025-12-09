import React from 'react';
import { Link } from 'react-router';

const ApplicationRow = ({ index, application, handleDelete }) => {

    const { _id, company_logo, company, location, title, jobType, salaryRange, jobID, } = application;

    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                alt={company} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
                <br />
                <span className="badge badge-ghost badge-sm">{jobType}</span>
            </td>
            <td className='font-medium'>
                <span>Min: {salaryRange?.min} {salaryRange?.currency?.toUpperCase()}</span>
                <br />
                <span>Max: {salaryRange?.max} {salaryRange?.currency?.toUpperCase()}</span>
            </td>
            <td>
                <Link to={`/jobDetails/${jobID}`} className='btn btn-xs btn-primary mr-2'>Details</Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">
                    Delete
                </button>
            </td>
        </tr>

    );
};

export default ApplicationRow;