import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Footer from "../Footer/Footer";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="font-poppins bg-[#eff0f7] ">
            <header className="bg-[#eff0f7]  backdrop-blur-lg sticky top-0 z-50 " >
                <nav className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="bg-[#eff0f7] w-11/12 mx-auto flex justify-center items-center mt-10">
                <div >
                    {user ? (
                        <div>
                            <h1 className="text-3xl lg:text-4xl text-center mb-2 font-bold text-gray-800">
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
                                        className="btn  mt-3 bg-[#3d84a8] text-gray-50 hover:bg-gray-600"
                                    >
                                        Update Profile
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl text-center font-semibold">Profile Information</h3>
                                <ul className="space-y-2 mt-3">
                                    <li className="text-gray-700 text-center">Email: {user.email}</li>
                                    <li className="text-gray-700 text-center">Name: {user.displayName || 'No name set'}</li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-700">Loading or No User Data Available...</div>
                    )}
                </div>
            </main>
         <footer className="mt-48">
            <Footer></Footer>
         </footer>
        </div>
    );
};

export default Dashboard;