import React, { use, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router';


const ForgetPassword = () => {

    const { auth } = use(AuthContext)

    const [errorMessage, setErrorMessage] = useState("");

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);


        setErrorMessage("");

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent successfully. Please check your inbox.");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="max-w-md w-full p-8 space-y-6  rounded-2xl shadow-md">
                <div className="text-center">
                    <p className="text-sm text-blue-600 font-medium">Forgot Password</p>
                    <h2 className="text-3xl font-extrabold ">Reset Your Password</h2>
                    <p className="mt-1 text-xs text-base-400">Enter your email to receive password reset instructions.</p>
                </div>

                <form onSubmit={handleForgetPassword} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address <span className='text-red-500'>*</span></label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    </div>

                    {
                        errorMessage && <p className='text-red-400'>{errorMessage}</p>
                    }

                    <button type="submit" className="btn btn-primary w-full">Send Reset Link</button>

                    <p className="text-center text-sm text-gray-600">
                        Remember your password? <Link to="/auth/login" className="text-blue-600 hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;