import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Login = () => {
    const {handleGoogleLogin} = useContext(authContext);
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
             New to the website? Please <NavLink to="/register">Register</NavLink>
        </div>
    );
};

export default Login;