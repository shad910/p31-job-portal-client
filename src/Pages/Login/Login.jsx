import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Lottie from "lottie-react";
import login from "../../assets/lottieFiles/Login.json";
import AuthContext from '../../Contexts/AuthContext';
import { Bounce, toast } from 'react-toastify';


const Login = () => {

    const { loginUser, setUser, googleLogin } = use(AuthContext);

    const [eye, setEye] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // const emailRef = useRef();

    let navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage("");
        setSuccessMessage(false);

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                setSuccessMessage(true);
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`${errorMessage}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                setErrorMessage(errorMessage);
            });

    }

    const handleGoogleLogin = () => {
        googleLogin().then((result) => {
            const user = result.user;
            setUser(user);
            navigate("/")
        }).catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage)
            toast.error(`${errorMessage}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        });
    }

    return (

        <div className='relative'>

            <Helmet>Login</Helmet>

            <section className='absolute right-8 top-28 hidden md:flex'>
                <Lottie style={{ width: '400px' }} animationData={login} loop={true} />
            </section>

            <section className="min-h-screen flex items-center justify-center px-4">
                <div className="max-w-md w-full md:p-8 space-y-6  rounded-2xl ">
                    <div className="text-center">
                        <p className="text-sm text-blue-600 font-medium">Welcome back!</p>
                        <h2 className="text-3xl font-extrabold text-gray-900">Member Login</h2>
                        <p className="mt-1 text-sm text-gray-500">Access to all features. No credit card required.</p>
                    </div>

                    <section className='space-y-2.5'>
                        {/* Google */}
                        <button onClick={handleGoogleLogin} className="btn w-full bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        {/* GitHub */}
                        <button className="btn w-full bg-black text-white border-black">
                            <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                            Login with GitHub
                        </button>
                    </section>


                    <div className="flex items-center my-2">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="mx-2 text-sm text-gray-500">Or continue with</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email address *</label>
                            <input
                            name='email'
                                type="text"
                                placeholder="Enter your email address"
                                className="input input-bordered w-full mt-1"
                                required
                            />
                        </div>

                        <div className='relative'>
                            <label className="block text-sm font-medium text-gray-700">Password *</label>
                            <input
                            name='password'
                                type="password"
                                placeholder="enter your password"
                                className="input input-bordered w-full mt-1"
                                required
                            />
                            <button onClick={() => setEye(!eye)} type="button" className='btn btn-xs top-8 right-1 absolute z-10'>{eye ? <FaEyeSlash /> : <FaEye />}</button>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm" /> Remember me
                            </label>
                            <Link to="/auth/login/forget-password" className="text-blue-600 hover:underline">Forgot Password</Link>
                        </div>

                        {
                            errorMessage && <p className='text-red-400'>{errorMessage}</p>
                        }
                        {
                            successMessage && <p className='text-green-400'>User created successfully</p>
                        }

                        <button type="submit" className="btn btn-primary w-full">Login</button>

                        <p className="text-center text-sm text-gray-600">
                            Don't have an Account? <Link to="/auth/register" className="text-blue-600 hover:underline">Register</Link>
                        </p>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Login;