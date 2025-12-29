import React, { useEffect, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { app } from '../Firebase/Firebase.config';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import axios from 'axios';



const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, GitHubProvider)
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            console.log(currentUser);
            

            if (currentUser?.email) {
                const userData = { email: currentUser.email };
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, userData, { withCredentials: true })
                    .then(response =>  response.data)
                    .catch(error => console.log(error));
            };
        });

        return () => {
            unsubscribe();
        };
    }, [user, auth])

    const userInformation = {
        auth,
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        handleLogout,
    };

    return (
        <AuthContext value={userInformation}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;