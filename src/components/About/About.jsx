const About = () => {
    return (
        <div>
            {/* Title */}
            <div>
                <h3 className="text-2xl text-center md:text-3xl lg:text-5xl font-semibold lg:font-bold text-gray-900">
                    About Us
                </h3>
            </div>
            {/* Description */}
            <div className="mt-4 w-full lg:w-11/12 mx-auto">
                <p data-aos="flip-up" className="text-sm lg:text-base text-gray-600 text-center">
                    Cozy Care is a charitable foundation dedicated to spreading warmth and kindness across Bangladesh during the cold winter months.
                    Our mission is to collect and distribute winter clothing to those in need, particularly in under-served communities,
                    where harsh winters can be a struggle for many. By providing warm coats, sweaters, and blankets, Cozy Care aims to
                    ensure that no one has to endure the chill of winter without proper clothing. We believe that every person deserves to feel
                    the comfort and warmth of the season, and through the generosity of donors and volunteers, we work together to make this vision
                    a reality. Join us in making a difference and helping those less fortunate experience a warmer, more comfortable winter
                </p>
            </div>
        </div>
    );
};

export default About;