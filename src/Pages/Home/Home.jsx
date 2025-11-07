import React from 'react';
import Banner from './Banner';
import Counter from './Counter';
import Jobs from './Jobs';

const job_promise = fetch('http://localhost:5000/jobs').then(res => res.json());

const Home = () => {


    return (
        <div className='my-10'>
           <Banner></Banner>
           <Jobs job_promise={job_promise}></Jobs>
           <Counter></Counter>
        </div>
    );
};

export default Home;