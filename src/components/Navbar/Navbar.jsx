import { Link, NavLink } from 'react-router-dom';
import iconLogo from '../../assets/icon-2.png'
import { FaUserCircle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FiLogOut } from 'react-icons/fi';
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/campaign">Campaigns</NavLink>
                        <NavLink to="/help">How to Help</NavLink>
                    </ul>
                </div>
                <NavLink to="/"> <img className='w-44 md:w-48 lg:w-60' src={iconLogo} alt="" srcset="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 md:text-base lg:text-lg">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/campaigns">Campaigns</NavLink>
                    <NavLink to="/help">How to Help</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2 relative">
                {user?.email ? (
                    <div className="flex items-center gap-2 relative">
                        <h4>{user.displayName}</h4>
                        <img
                            className="w-10 h-10 rounded-full cursor-pointer"
                            src={user.photoURL}
                            alt="User"
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                        />
                        {/* Dropdown */}
                        {isDropdownOpen && (
                            <ul
                                className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[1] mt-2 w-52 p-2 shadow absolute right-0 top-full"
                                style={{ top: '3rem' }}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <li>
                                    <Link
                                        className="w-full text-end text-gray-700 hover:bg-gray-100 flex items-center justify-end"
                                        onClick={logout}>
                                      <FiLogOut/> Logout
                                    </Link>
                                    <Link className='w-full text-end text-gray-700 hover:bg-gray-100 flex items-center justify-end'
                                    >Dashboard</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <FaUserCircle className="text-4xl" />
                        <Link
                            to="/auth/login"
                            className="btn bg-[#3d84a8] text-sm lg:text-base text-gray-50"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;