import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-2/3 h-96 mx-auto">
            <img className="w-2/3 h-96 mx-auto" src="https://i.ibb.co/mXtxv9k/undraw-Page-not-found-re-e9o6.png" alt="" />
            <h2 className="text-center text-5xl font-bold text-blue-gray-800">You Are Lost</h2>
            <Link to="/" ><button className="w-full mx-auto mt-9 btn">Go Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;