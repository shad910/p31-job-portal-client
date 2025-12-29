import React, { Suspense } from 'react';
import Loading from '../../Shared/Loading';
import useAuth from '../../Hooks/UseAuth';
// import { myApplicationPromise } from '../../api/ApplicationsAPI';
import useApplicationAPI from '../../api/useApplicationAPI';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import { Bounce, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const MyApplication = () => {

    const { user } = useAuth();
    const { myApplicationPromise } = useApplicationAPI();

    return (
        <section>

            <Helmet>
                <title>CAREER-CODE | My Applications</title>
            </Helmet>

            <ApplicationStats></ApplicationStats>
            <h1 className='poppins text-center text-3xl font-bold my-8'>My Applications</h1>
            <Suspense fallback={<Loading></Loading>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user?.email)}></ApplicationList>
            </Suspense>

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
                theme="colored"
                transition={Bounce}
            />
        </section>
    );
};

export default MyApplication;