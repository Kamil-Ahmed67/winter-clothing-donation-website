import donateOne from '../../assets/donate-1.jpg'
import donateTwo from '../../assets/how-it-works-2.jpg'
import blanket from '../../assets/blanket.jpg'
import jacket from '../../assets/jaxcketjpg.jpg'
import sweater from '../../assets/sweat.jpg'
import { ImFacebook2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { FaSquareXTwitter } from 'react-icons/fa6'
const HowItWorks = () => {
    return (
        <section className="mt-8">
            <h2 className="text-2xl lg:text-4xl text-center font-semibold lg:font-bold text-gray-800 ">How It Works</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 how-it-works py-8 gap-6">
                {/* How to Donate & Collection Points div */}
                <div className='col-span-8 space-y-4'>
                    <div data-aos="fade-right" className="card lg:card-side bg-base-100">
                        <figure>
                            <img className='w-full h-full object-cover'
                                src={donateOne}
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">How to Donate</h2>
                            <ul className="list-inside list-decimal space-y-2">
                                <li>
                                    Gather your gently used winter clothes (coats, sweaters, blankets, etc.).
                                </li>
                                <li>
                                    Visit one of our collection points or schedule a pickup online.
                                </li>
                                <li>
                                    Drop off your donations at any of our designated locations or wait for your scheduled pickup.
                                </li>
                                <li>
                                    Your donations will be distributed to communities in need across Bangladesh.
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div data-aos="fade-right" className="card lg:card-side bg-base-100 ">
                        <div className="card-body lg:w-1/2">
                            <h2 className="card-title">Collection Points</h2>
                            <ul className="list-inside list-disc space-y-2">
                                <li>Dhaka - Cozy Care Center, Dhanmondi</li>
                                <li>Chittagong - Cozy Care Drop-off, GEC Circle</li>
                                <li>Rajshahi - Cozy Care Hub, Shaheb Bazar</li>
                                <li>Khulna - Cozy Care Station, Rupsha</li>
                                <li>Barisal - Cozy Care Corner, Kacharipara</li>
                            </ul>
                        </div>
                        <figure className="lg:w-1/2">
                            <img className="w-full h-full object-cover " src={donateTwo} alt="Album" />
                        </figure>
                    </div>
                </div>
                <div data-aos="fade-down" className='col-span-8 lg:col-span-4 bg-base-100 rounded-2xl '>
                    <div className='p-5' >
                        <h3 className="text-2xl font-semibold mb-4">Supported Divisions</h3>
                        <p className="mb-4">
                            Cozy Care is proud to serve the following divisions, ensuring that your donation reaches the people who need it most:
                        </p>
                        <ul className="list-inside list-disc space-y-2">
                            <li>Dhaka Division</li>
                            <li>Chittagong Division</li>
                            <li>Rajshahi Division</li>
                            <li>Khulna Division</li>
                            <li>Barisal Division</li>
                            <li>Rangpur Division</li>
                            <li>Sylhet Division</li>
                            <li>Rajshahi Division</li>
                        </ul>
                        <div className="flex flex-col items-start text-center lg:text-left mt-4 mb-4 lg:mb-0">
                            <h3 className="text-gray-800 text-lg font-bold">Find Us With</h3>
                            <div className="text-sm text-gray-800 mt-4">
                                <div className='flex justify-center items-center gap-4'>
                                    <ImFacebook2 className='text-3xl cursor-pointer' />
                                    <BsInstagram className='text-3xl cursor-pointer' />
                                    <FaSquareXTwitter className='text-3xl cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Donation Items */}
            <h3 className="text-2xl lg:text-4xl text-center font-semibold lg:font-bold text-gray-800 mt-8 lg:mt-20 mb-10">Donation Items</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-20 mb-24 ">
                {/* Card 1 */}
                <div className="flex flex-col items-center">
                    <img data-aos="flip-left"
                        src={blanket}
                        alt="Card 1"
                        className="w-40 h-40 bg-[#eff0f7] rounded-full object-cover"
                    />
                    <h3 className="mt-4 text-center text-lg font-semibold">Blanket</h3>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col items-center">
                    <img data-aos="flip-left"
                        src={sweater}
                        alt="Card 2"
                        className="w-40 h-40 bg-[#eff0f7]  rounded-full object-cover"
                    />
                    <h3 className="mt-4 text-center text-lg font-semibold">Sweater</h3>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-center">
                    <img data-aos="flip-left"
                        src={jacket}
                        alt="Card 3"
                        className="w-40 h-40 bg-[#eff0f7] rounded-full object-cover"
                    />
                    <h3 className="mt-4 text-center text-lg font-semibold">Jacket</h3>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
