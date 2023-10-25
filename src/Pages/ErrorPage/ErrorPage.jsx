
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div>
            <div className="bg-white text-center pt-[400px]">
            <h2 className="text-[40px] text-red-500 font-bold ">Oops! 404 not found</h2>
        </div>
        <Link to='/' className="btn btn-primary mt-6 mx-[710px]"><button>Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;