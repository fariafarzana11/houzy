
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { authContext } from "../../Providers/AuthProviders";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {
    const { login, user,setUser } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("User state updated:", user);
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        login(email, password)
            .then((result) => {
                toast.success("Login Successfully");
                console.log("Logged-in user:", result.user);
                navigate("/");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const userInfo = result.user;
            setUser(userInfo); 
            toast.success("Google login successful!");
            navigate("/");
        } catch (error) {
            console.error("Google login error:", error);
            toast.error("Google login failed. Please try again.");
        }
    };
    

    const loginWithGithub = async () => {
        const githubProvider = new GithubAuthProvider()
        try{
           await signInWithPopup(auth, githubProvider)
                // const githubUser = result.user;
                // setUser(githubUser)
                // console.log(githubUser)
                toast.success("Google login successful!");
                navigate("/");
        }catch (error) {
            toast.error("Github login failed. Please try again.");
        }
    }
    
    return (
            <div className="flex justify-center items-center h-screen max-w-7xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md rounded-lg p-8 w-96 text-white">
                    <h2 className="text-2xl font-bold text-center mb-5">Login</h2>

                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className="input input-bordered text-gray-900"
                                required
                            />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative w-full">
                                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" name="password" className="input input-bordered w-full pr-10 text-gray-900" required />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </button>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        <div className="form-control mt-5">
                            <button className="btn btn-neutral w-full">Login</button>
                        </div>
                    </form>

                    <div className="">
                        <button className="btn btn-neutral w-full p-5" onClick={handleGoogleLogin}>Login with Google</button>

                        <button className="btn btn-neutral w-full p-5 mt-4" onClick={loginWithGithub} >Login with Github</button>

                        <p className="text-center mt-3">
                            Don't have an account?{" "}
                            <Link to="/register">
                                <span className="text-gray-300" >Register</span>
                            </Link>
                        </p>
                    </div>
                </div>

                <ToastContainer />
            </div>
        );
    };

 export default Login;









