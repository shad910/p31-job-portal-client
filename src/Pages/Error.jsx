import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import error from "../assets/lottieFiles/Error.json";
import Lottie from "lottie-react";
const Error = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex flex-col justify-center items-center  px-4 text-center">
            {/* <div>
                <div>
                    <img className="w-60" src={error} alt="" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-gray-600 max-w-md mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
            </div> */}

            <section>
                <Lottie style={{ width: '500px' }} animationData={error} loop={true} />
                <p className="text-gray-600 mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
            </section>
            <button
                onClick={() => navigate("/")}
                className="btn btn-outline flex items-center gap-2 text-[#3B82F6] border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white mb-5"
            >
                <FaArrowLeft />
                Go Home
            </button>
        </section>
    );
};

export default Error;
