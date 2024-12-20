import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import google from '../../assets/google-icon.png'
import { toast } from "react-toastify";
const Register = () => {
    const { registerNewUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        //getting data from the Form
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters long.");
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
            );
            return;
        }
        registerNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Successfully Registered!");
                        navigate("/")
                    })
                    .catch(err => {
                        console.log(err);
                        toast.error("Failed to update profile.");
                    })
            })
            .catch(error => {
                console.log("ERROR OCCUR", error.message);
                toast.error("Registration failed. Please try again.");
            })
    }
    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Google Sign-In Successful!");
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Google Sign-In Failed. Please try again.");
            })
    }
    return (
        <div data-aos="zoom-in" className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-lg p-10">
                <h2 className="text-2xl text-[#3d84a8] font-semibold text-center mt-6">Register your account</h2>
                <form onSubmit={handleRegister}
                    className="card-body">
                    {/* Your Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered " required />
                    </div>
                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered " required />
                    </div>
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered " required />
                    </div>
                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn bg-[#3d84a8] text-gray-50 rounded-lg">Register</button>
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <button onClick={handleGoogleSignIn}
                            className="btn w-full bg-base-100 text-sm lg:text-base text-gray-800 rounded-lg">
                            <img className="w-7 h-7 rounded-full" src={google} alt="" srcset="" /> Sign in With Google</button>
                    </div>
                </form>

                <p className="text-center font-semibold">
                    Already Have An Account ? <Link className="text-[#3d84a8]" to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;