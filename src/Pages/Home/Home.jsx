import React from 'react';
import Banner from './Banner';
import Counter from './Counter';
import Jobs from './Jobs';
import { Helmet } from 'react-helmet-async';

const job_promise = fetch(`${import.meta.env.VITE_API_URL}/jobs`, { credentials: 'include' }).then(res => res.json());

const Home = () => {


    return (
        <div className='my-10'>

            <Helmet>
                <title>CAREER-CODE | Home</title>
            </Helmet>

            <Banner></Banner>
            <Jobs job_promise={job_promise}></Jobs>
            <Counter></Counter>
        </div>
    );
};

export default Home;