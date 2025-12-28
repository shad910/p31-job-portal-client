import axios from "axios";

export const myApplicationPromise = (email, accessToken) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/applications?email=${email}`,
        {
            headers: { Authorization: `Bearer ${accessToken}` },
            withCredentials: true
        });
}
