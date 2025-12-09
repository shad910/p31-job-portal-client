import React, { Suspense, use } from 'react';
import Loading from '../../Shared/Loading';
import AuthContext from '../../Contexts/AuthContext';
import { myApplicationPromise } from '../../api/ApplicationsAPI';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';

const MyApplication = () => {

    const { user } = use(AuthContext);

    return (
        <section>
            <ApplicationStats></ApplicationStats>
            <h1 className='poppins text-center text-3xl font-bold my-10'>My Applications</h1>
            <Suspense fallback={<Loading></Loading>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user?.email)}></ApplicationList>
            </Suspense>
        </section>
    );
};

export default MyApplication;