import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
const MainLayout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1300,
            once: true,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="font-poppins bg-[#eff0f7] ">
            <header className="bg-[#eff0f7]  backdrop-blur-lg sticky top-0 z-50 ">
                <nav className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="min-h-[calc(350vh-200px)]">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>  
            <ToastContainer position="top-center"  />
        </div>
        
    );
};

export default MainLayout;