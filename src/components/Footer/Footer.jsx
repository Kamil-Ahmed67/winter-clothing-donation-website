import { ImFacebook2 } from 'react-icons/im';
import logo from '../../assets/logo.png'
import { BsInstagram } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
import snow from '../../assets/snow.png'
const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800">
        <footer className="text-base-content p-10 mt-16">
            <div className="relative">
                {/*News Letter Section */}
                <div className="absolute  inset-x-0 -top-40 flex justify-center">
                    <div className="p-2 border-2 border-white rounded-2xl">
                        <div  style={{ backgroundImage: `url(${snow})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                         className="relative w-full md:w-[1200px]   p-10 rounded-xl bg-[#eff0f7]">
                            <div className="relative z-10 md:p-8">
                                <h3 className="text-lg md:text-3xl font-bold text-center text-gray-800 mb-2">Subscribe to Cozy Care</h3>
                                <p className="text-gray-600 text-sm md:text-base mb-4 text-center">Stay updated on how your small efforts make a big difference</p>
                                <div className="flex justify-center items-center gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="py-2 md:py-3 px-3 md:px-5 w-full md:w-[400px] text-sm md:text-lg rounded-xl  border border-gray-300"
                                    />
                                    <button className="py-2 md:py-3 px-3 md:px-5 text-sm md:text-lg bg-gradient-to-r from-[#6fb8d6] via-[#3d84a8] to-[#6fb8d6] text-gray-50 font-semibold rounded-xl">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* Main Footer Content */}
                <div className="pt-16 lg:pt-36">
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:mb-10'>
                        <img src={logo} alt="Logo" className=" h-40 w-44- lg:mb-4" />
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        {/* Column-1: About Us */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
                            <h3 className="text-gray-300 text-lg font-bold">Contact Us</h3>
                            <div className="text-sm text-gray-300 mt-8">
                                <div className='flex justify-center items-center gap-4'>
                                <ImFacebook2 className='text-3xl' />
                                <BsInstagram className='text-3xl' />
                                <FaSquareXTwitter className='text-3xl' />
                                </div>
                            </div>
                        </div>

                        {/* Column-2: Quick Links */}
                        <div className="flex flex-col items-center lg:items-start text-center text-white lg:text-left mb-8 lg:mb-0">
                           <h3 className="text-center font-bold text-gray-300 text-lg mb-2 w-full">Quick Links</h3>
                            <a className="hover:text-yellow-500 text-sm text-gray-300 cursor-pointer mb-2">Home</a>
                            <a className="hover:text-yellow-500 text-sm text-gray-300 cursor-pointer mb-2">Services</a>
                            <a className="hover:text-yellow-500 text-sm text-gray-300 cursor-pointer mb-2">About Us</a>
                            <a className="hover:text-yellow-500 text-sm text-gray-300 cursor-pointer">Contact</a>
                        </div>

                        {/* Column-3: Subscribe */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                            <h3 className="text-lg font-bold text-gray-300 mb-2">Subscribe</h3>
                            <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for the latest updates</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="py-3 px-5 w-full rounded-l-xl text-sm md:text-lg focus:outline-none border border-gray-300"
                                />
                                <button className="py-3 px-5 text-sm md:text-lg bg-gradient-to-r from-[#6fb8d6] via-[#3d84a8] to-[#6fb8d6] text-gray-50 font-bold rounded-r-xl">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider and Footer Bottom Text */}
            <hr className="border-t border-gray-100 w-full my-8" />
            <p className="text-center text-sm text-gray-300 p-5">
                &copy; 2024 CozyCare All Rights Reserved
            </p>
        </footer>
    </div>

    );
};

export default Footer;