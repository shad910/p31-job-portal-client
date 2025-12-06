import React from 'react';
import { Outlet, useNavigation } from "react-router"
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import { Bounce, ToastContainer } from 'react-toastify';
import Loading from '../Shared/Loading';

const HomeLayout = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <section className='flex flex-col min-h-screen'>
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

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </section>
    );
};

export default HomeLayout;