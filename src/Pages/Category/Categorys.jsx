import React from 'react';
import { Navigate } from 'react-router';
import CategoryJobs from './CategoryJobs';

const Category = () => {
    return <Navigate to="/category/0" replace />;
};

export default Category;