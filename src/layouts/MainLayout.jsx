import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <header className="bg-[#eff0f7] ">
                <nav className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>

            </header>
        </div>
    );
};

export default MainLayout;