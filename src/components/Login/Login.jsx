import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
    const {handleGoogleLogin, handleLogin, handleLogout} = useContext(authContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        handleLogin(email, password);
        
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                        {/* {
                            error.login && (
                                <>
                                <label className="label  text-sm text-red-600">
                                    {error.login}
                                </label>
                                <br />
                                </>
                            )
                        } */}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full bg-[#403F3F] border-none shadow-none">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Dont’t Have An Account ? <Link className="text-red-500" to="/register">Register</Link></p>
                <button onClick={handleLogout}>Log-out</button>
            </div>
        </div>
    );
};

export default Login;