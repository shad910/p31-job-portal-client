import axios from "axios";

export const myApplicationPromise = (email) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/applications?email=${email}`);
}
