import React from 'react';
import { Outlet, useNavigation } from "react-router"
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const AuthLayout = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                {isNavigating && <GlobalSpinner />}
                <Outlet />
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;