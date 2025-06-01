import React from 'react';
import { Outlet } from "react-router"
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;