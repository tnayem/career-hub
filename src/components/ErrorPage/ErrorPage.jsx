import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-center text-5xl mt-72 font-bold">Oopps !!!</h1>
            <div className="text-center mt-3">
            <Link className="btn" to='/'>Go to Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;