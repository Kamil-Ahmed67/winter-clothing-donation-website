import donateOne from '../../assets/donate-1.jpg'
import donateTwo from '../../assets/how-it-works-2.jpg'

const HowItWorks = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 how-it-works py-12 gap-6">
            {/* How to Donate & Collection Points Section */}
            <div className='lg:col-span-8 space-y-4'>
                <div className="card lg:card-side bg-base-100">
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
                <div className="card lg:card-side bg-base-100 ">
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
            <div className='col-span-4 bg-green-500'>
                Divisions
            </div>
        </section>
    );
};

export default HowItWorks;
