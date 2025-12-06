import React from 'react';
import { Outlet, useNavigation } from "react-router"
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';

const AuthLayout = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='flex-1'>
                {isNavigating && <Loading></Loading>}
                <Outlet />
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;