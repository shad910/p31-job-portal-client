import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import error from "../assets/Error.png"
const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center  px-4 text-center">
            <div>
                <img className="w-60" src={error} alt="" />
            </div>
            {/* <h1 className="text-6xl font-bold text-[#ABB8CC] mb-4">404</h1> */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 max-w-md mb-6">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <button
                onClick={() => navigate("/")}
                className="btn btn-outline flex items-center gap-2 text-[#3B82F6] border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white mb-5"
            >
                <FaArrowLeft />
                Go Home
            </button>
        </div>
    );
};

export default Error;
