import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            });
    }, []);

    return (
        <div className='flex justify-center mt-1'>
            {categories.map((category, index) => (
                <ul key={index} className="menu menu-horizontal bg-base-200 ">
                    <li>
                        <NavLink to={`/category/${category.categoryID}`} className='menu'>{category.categoryName}</NavLink>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default Categories;