import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import google from '../../assets/google-icon.png'
import { toast } from "react-toastify";

const Login = () => {
    const{userLogin,setUser,signInWithGoogle}=useContext(AuthContext);
    const[error,setError]=useState({});
    //sending back user to the place/element,when he clicked it and login form shown
    const location=useLocation();
    const navigate=useNavigate();
    const handleLogin=e=>{
        e.preventDefault();
        //getting the form data
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        userLogin(email,password)
        .then(result=>{
         const user=result.user;
         setUser(user);
         toast.success('Successfully Logged In')
         //sending user to the desired place after successful login or homepage
         setTimeout(() => {
            navigate(location?.state ? location.state : "/");
        }, 2000);
        })
        .catch((err)=>{
           setError({...error,login:err.code});
           toast.error('Invalid Email or Password')
        })
    }
    //google sign in
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            const user=result.user;
            setUser(user);
            toast.success('Google Sign-In Successful!')
            //sending user to the desired place after successful login or homepage
            setTimeout(() => {
               navigate(location?.state ? location.state : "/");
           }, 2000);
        })
        .catch((err)=>{
            setError({...error,login:err.code});
            toast.error('Google Sign-In Failed!')
         })
    }
    return (
        <div  data-aos="zoom-in" className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-xl p-10">
                <h2 className="text-3xl text-[#3d84a8] font-semibold text-center mt-6">Login</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {error.login && (
                            <label className="label text-sm text-red-600 ">
                                {error.login}
                            </label>
                        )}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#3d84a8] text-sm lg:text-base text-gray-50 rounded-lg">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <div className="form-control">
                        <button onClick={handleGoogleSignIn}
                         className="btn bg-base-100 text-sm lg:text-base text-gray-800 rounded-lg">
                        <img className="w-7 h-7 rounded-full" src={google} alt="" srcset="" /> Sign in With Google</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Don't Have An Account ? <Link className="text-[#3d84a8]" to="/auth/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;