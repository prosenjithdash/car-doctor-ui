import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="my-[200px]">
            <h2 className="text-[150px] font-extrabold text-center text-orange-700">404</h2>
            <div className="text-center ">
                <Link to='/'>
                    <button className="text-[20px] text-center text-orange-600 font-bold border-2 border-black p-4 rounded-xl">Go to homepage.</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;