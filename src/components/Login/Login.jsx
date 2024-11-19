import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin=e=>{
        e.preventDefault();
    }
    return (
        <div  data-aos="zoom-in" className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-xl p-10">
                <h2 className="text-2xl text-[#3d84a8] font-semibold text-center mt-6">Login your account</h2>
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
                        {/* {error.login && (
                            <label className="label text-sm text-red-600 ">
                                {error.login}
                            </label>
                        )} */}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#3d84a8] text-sm lg:text-base text-gray-50 rounded-lg">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <div className="form-control">
                        <button className="btn bg-[#3d84a8] text-sm lg:text-base text-gray-50 rounded-lg">Login With Google</button>
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