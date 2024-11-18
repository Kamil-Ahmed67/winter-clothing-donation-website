import { FaArrowRight } from 'react-icons/fa6';
import slideOne from '../../assets/slide-1.jpg'
import slideTwo from '../../assets/slide-2.jpg'
import slideThree from '../../assets/slide-3.jpg'
import slideFour from '../../assets/slide-4.jpg'
const Banner = () => {
    return (
        <div className='mt-8 lg:mt-0'>
            <div className="relative  flex flex-col items-center justify-center mx-auto px-6 lg:px-0">
                <div className="carousel w-full lg:h-[650px] rounded-xl lg:rounded-none">
                    {/* Slide-1 */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slideOne} className="w-full" alt="Slide 1" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    {/* Slide-2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slideTwo} className="w-full" alt="Slide 2" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    {/* Slide-3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slideThree} className="w-full" alt="Slide 3" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    {/* Slide-4 */}
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={slideFour}
                            className="w-full"
                            alt="Slide 4"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>

                {/* Glass-Effect Box */}
                <div className="flex flex-col space-y-4 mt-4 w-full lg:absolute lg:space-y-4 lg:space-x-4">
                    <div data-aos="fade-left" className="lg:absolute lg:bottom-10 lg:right-20 lg:w-1/3 space-y-4 py-3 glass lg:bg-slate-900 bg-blue-400 px-3 text-white rounded-xl lg:bg-opacity-5 bg-opacity-1 lg:backdrop-blur-sm backdrop-blur-none">
                        <h6 className="text-2xl font-extrabold text-slate-50">Share the Warmth, Spread the Love.</h6>
                        <p>
                        Together, let’s keep winter warmer for all by donating clothes to those in need. 
                        A simple act of kindness can provide comfort, warmth, and hope during the chilly months.
                        </p>
                    </div>
                    <div data-aos="fade-right" className="lg:absolute lg:top-12 lg:left-20 lg:w-1/3 glass space-y-4 py-3 lg:bg-slate-900 bg-blue-400 px-3 text-white lg:text-gray-200 rounded-xl lg:bg-opacity-5 bg-opacity-1 lg:backdrop-blur-sm backdrop-blur-none">
                        <h6 className="text-2xl font-extrabold">Over 5000+ Donations!!</h6>
                        <p>
                        Your small efforts can make a huge difference
                        </p>
                        <button className='btn bg-[#eff0f7] text-gray-900 text-base lg:text-lg'>
                        <FaArrowRight />Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;