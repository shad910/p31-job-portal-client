import React from 'react';
import { Navigate } from 'react-router';
import CategoryJobs from './CategoryJobs';
import { Helmet } from 'react-helmet-async';

const Category = () => {
    return <>
        <Helmet>
            <title>CAREER-CODE | Category Jobs</title>
        </Helmet>
        <Navigate to="/category/0" replace />
    </>;
};

export default Category;