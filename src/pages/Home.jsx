import About from "../components/About/About";
import Banner from "../components/Banner/Banner";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-12 md:mt-16lg:mt-20">
                <About></About>
            </div>
        </div>
    );
};

export default Home;