import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            });
    }, []);

    return (
        <div className='flex justify-center mt-1'>

            <Helmet>
                <title>CAREER-CODE | Category Jobs</title>
            </Helmet>

            {categories.map((category, index) => (
                <ul key={index} className="hidden lg:menu Lg:menu-horizontal bg-base-200 ">
                    <li>
                        <NavLink to={`/category/${category.categoryID}`} className='menu'>{category.categoryName}</NavLink>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default Categories;