import donateOne from '../../assets/donate-1.jpg'
import donateTwo from '../../assets/how-it-works-2.jpg'

const HowItWorks = () => {
    return (
        <section>
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
                <div data-aos="fade-down" className='col-span-8 lg:col-span-4 bg-[#e1eeff] rounded-2xl '>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
