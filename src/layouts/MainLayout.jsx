import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <header className="bg-[#eff0f7] ">
                <nav className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="min-h-[calc(120vh-200px)]">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;