import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        return <div className="flex-col justify-center my-[200px] text-center">
            <progress className="progress w-56 "></progress>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/signIn' replace> </Navigate>

    
};

export default PrivetRoute;