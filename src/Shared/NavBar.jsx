import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../Contexts/AuthContext';
import ThemeController from './ThemeController';


const NavBar = () => {

    const { user, handleLogout } = use(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/company">Company</NavLink></li>
        {
            user ? <li><NavLink to="/my-listings">My Listings</NavLink></li> : ""
        }
    </>

    const Logout = () => {
        handleLogout()
        setIsHovered(false);
    };

    return (
        <nav className="md:w-11/12 mx-auto navbar  ">
            <section className="navbar-start">
                <Link to="/" className='flex items-center'>
                    <img className='w-7' src="https://i.ibb.co/vpwhhpt/logo.png" alt="logo" />
                    <span className="text-xl font-bold">
                        <span className='text-blue-400'>
                            CAREER-</span>CODE
                    </span>
                </Link>
            </section>

            <section className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal rounded-none gap-2.5 px-1">
                    {links}
                </ul>
            </section>

            <section className="navbar-end gap-1.5 md:gap-5">
                <ThemeController></ThemeController>

                {user ? (
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                    >
                        <div className="avatar">
                            <div className="ring-gray-100 ring-offset-base-100 w-9 p-0.5 rounded-full ring-2 ring-offset-2">
                                <img className='rounded-full' src={user?.photoURL} data-reference="no-reference" alt="User avatar" />
                            </div>
                        </div>
                        {isHovered && (
                            <div onMouseLeave={() => setIsHovered(false)} className="absolute right-0 mt-2 p-4 bg-gray-800 text-white rounded-lg shadow-lg z-10">
                                <p>{user?.displayName || 'User'}</p>
                                <p>{user?.email}</p>
                                <button className="btn btn-error btn-sm mt-2" onClick={Logout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="hidden md:flex gap-2.5">
                        <Link to="/auth/login" className="btn btn-sm btn-primary">Login</Link>
                        <Link to="/auth/register" className="btn btn-sm btn-secondary">Register</Link>
                    </div>
                )}

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-sm lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </section>
        </nav>
    );
};

export default NavBar;