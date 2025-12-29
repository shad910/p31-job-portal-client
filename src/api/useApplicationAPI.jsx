import React from 'react';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const useApplicationAPI = () => {
    const axiosSecure = UseAxiosSecure();

    const myApplicationPromise = (email) => {
        return axiosSecure.get(`/applications?email=${email}`, {withCredentials: true})
            .then(res => res.data);
    }

    return { myApplicationPromise }
};

export default useApplicationAPI;