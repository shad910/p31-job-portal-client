import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import Categories from '../Pages/Category/Categories';

const CategoryLayout = () => {

     const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='flex-1'>
                <Categories></Categories>
                <br />
                {isNavigating && <Loading></Loading>}
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CategoryLayout;