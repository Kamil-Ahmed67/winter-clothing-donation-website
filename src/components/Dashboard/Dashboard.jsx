import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="font-poppins bg-[#eff0f7] ">
            <header className="bg-[#eff0f7] " >
                <nav className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="bg-[#eff0f7]">
                <div className="w-11/12 mx-auto mt-10">
                    {user ? (
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Welcome, {user.displayName || 'User'}!
                            </h1>

                            <div className="flex items-center mt-5">
                                <img
                                    src={user.photoURL || 'default-profile.png'}  // Fallback to a default image if photoURL is not available
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover mr-5"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold">{user.displayName || 'No name set'}</h2>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                    <Link
                                        to="/update-profile"
                                        className="btn mt-3 bg-blue-500 text-white hover:bg-blue-600"
                                    >
                                        Update Profile
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h3 className="text-xl font-semibold">Profile Information</h3>
                                <ul className="space-y-2 mt-3">
                                    <li className="text-gray-700">Email: {user.email}</li>
                                    <li className="text-gray-700">Name: {user.displayName || 'No name set'}</li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-700">Loading or No User Data Available...</div>
                    )}
                </div>
            </main>

        </div>
    );
};

export default Dashboard;