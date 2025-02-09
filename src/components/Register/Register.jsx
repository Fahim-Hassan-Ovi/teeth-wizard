import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const { handleRegister } = useContext(authContext);
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        const conPassword = form.get("conPassword");
        if (password.length < 6) {
            setError("Password must contain at least 6 character");
        }
        if (password !== conPassword) {
            setError("Password didn't match")
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter");
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter");
            return
        }
        console.log(name, photo, email, password);
        handleRegister(email, password, conPassword);
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    {/* {
                        error.name && (
                            <label className="label text-red-500 text-xs">
                                {error.name}
                            </label>
                        )
                    } */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
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
                            error.password && (
                                <label className="label text-red-500 text-xs">
                                    {error.password}
                                </label>
                            )
                        } */}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Confirm Password</span>
                        </label>
                        <input type="password" name="conPassword" placeholder="confirm password" className="input input-bordered bg-[#F3F3F3]" required />
                        {/* {
                            error.password && (
                                <label className="label text-red-500 text-xs">
                                    {error.password}
                                </label>
                            )
                        } */}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full bg-[#403F3F] border-none shadow-none">Register</button>
                    </div>
                </form>
                {
                    error && <p className="text-red-500 text-sm font-semibold text-center">{error}</p>
                }
                <p className="text-center font-semibold">Already Have An Account ? <Link className="text-red-500" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;