import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <div className="w-[80%] max-w-[1200px]  mx-auto mt-10 md:mt-20 flex items-center justify-center">
            <span className="loading loading-infinity scale-[4] "></span>
        </div>
    }
    if(!user){
        return <Navigate state={{from: location.pathname}} to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;