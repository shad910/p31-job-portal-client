import React from 'react';
import useAuth from './UseAuth';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const UseAxiosSecure = () => {

    const { user, handleLogout } = useAuth();

    const Logout = () => {
        handleLogout()
    };

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user?.accessToken}`;
        return config;
    });

    axiosInstance.interceptors.response.use(
        response => response,
        error => {
            console.log(error);
            if (error.response.status === 401 || error.response.status === 403) {
                Logout();
            }
            return Promise.reject(error);
        }
    );
    return axiosInstance;
};

export default UseAxiosSecure;