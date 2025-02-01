
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, login } = useContext(authContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const image = form.get("photoUrl");
        const email = form.get("email");
        const password = form.get("password");

        console.log(name, image, email, password);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return toast.error("Password must have an uppercase, lowercase, and be at least 6 characters!");
        }

        try {
            // Register user
            const result = await createUser(email, password);
            console.log(result.user);

            // Update user profile with name and image
            await updateProfile(result.user, {
                displayName: name,
                photoURL: image,
            });

            // Log the user in immediately after registration
            await login(email, password);

            toast.success("Registration Successful!");
            navigate("/login");  // Redirect to login after successful registration
        } catch (err) {
            console.error("Error:", err.message);
            toast.error(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 max-w-7xl mx-auto">
            <div className="shadow-md rounded-lg p-8 w-96 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                <h2 className="text-2xl font-bold text-center mb-5">Register</h2>

                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered text-gray-700" name='name' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Enter Image link" name='photoUrl' className="input input-bordered text-gray-700" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" name='email' className="input input-bordered text-gray-700" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                name="password"
                                className="input input-bordered w-full pr-10 text-gray-900"
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>

                    <p className='text-center mt-3'>
                        Already have an account? 
                        <Link to='/login'>
                            <span className='text-white'> Login</span>
                        </Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
