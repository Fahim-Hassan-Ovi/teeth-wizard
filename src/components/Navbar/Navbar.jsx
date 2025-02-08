import "./Navbar.css";
import logo from "../../assets/logo.webp"
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="min-h-20 bg-blue-950 text-white flex justify-between items-center">
            <div>
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
                <button className="btn btn-neutral">Login</button>
            </div>
        </div>
    );
};

export default Navbar;