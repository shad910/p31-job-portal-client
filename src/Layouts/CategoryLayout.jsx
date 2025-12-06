import React from 'react';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const CategoryLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='flex-1'>
                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CategoryLayout;