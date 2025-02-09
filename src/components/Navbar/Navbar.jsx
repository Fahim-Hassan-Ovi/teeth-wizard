import "./Navbar.css";
import logo from "../../assets/logo.webp"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
    const { user, handleLogout } = useContext(authContext);
    return (
        <div className="min-h-20 bg-blue-950 text-white flex justify-between items-center">
            <div className="ml-4">
                <img className="w-15 h-15" src={logo} alt="" />
            </div>
            <div>
                <NavLink to="/"

                >
                    Home
                </NavLink>
                <NavLink to="/allTreatments" className="ml-4" >
                    All Treatments
                </NavLink>
                <NavLink to="/myAppointments" className="ml-4">
                    My Appointments
                </NavLink>
                <NavLink to="/profile" className="ml-4">
                    Profile
                </NavLink>
            </div>
            <div>


                {
                    user?.email ?
                        <div className="flex flex-col items-center justify-center ">
                            <img className="w-10 h-10" src={user.photoURL} alt="" />
                            <button onClick={handleLogout} className="btn btn-neutral mr-4">Logout</button>
                        </div>
                        :
                        <NavLink to="/login">
                            <button className="btn btn-neutral mr-4">Login</button>
                        </NavLink>


                }
            </div>
        </div>
    );
};

export default Navbar;