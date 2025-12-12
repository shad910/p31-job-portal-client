import React, { Suspense, use } from 'react';
import Loading from '../../Shared/Loading';
import AuthContext from '../../Contexts/AuthContext';
import { myApplicationPromise } from '../../api/ApplicationsAPI';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import { Bounce, ToastContainer } from 'react-toastify';

const MyApplication = () => {

    const { user } = use(AuthContext);

    return (
        <section>
            <ApplicationStats></ApplicationStats>
            <h1 className='poppins text-center text-3xl font-bold my-10'>My Applications</h1>
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