import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import CardSlider from "../components/CardSlider/CardSlider";
import HowItWorks from "../components/HowItWorks/HowItWorks";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-12 md:mt-16lg:mt-20">
                <About></About>
            </div>
            <div className="w-11/12 mx-auto mt-8">
                <HowItWorks></HowItWorks>
            </div>
            <div className="w-11/12 mx-auto mt-16 mb-60">
              <CardSlider></CardSlider>
            </div>
        </div>
    );
};

export default Home;