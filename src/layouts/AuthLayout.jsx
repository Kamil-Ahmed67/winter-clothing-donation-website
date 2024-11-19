import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AuthLayout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1300,
            once: true,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="font-poppins bg-[#eff0f7] ">
            <header className="bg-[#eff0f7] ">
                <nav className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>
            </header>
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div> 
        </div>
    );
};

export default AuthLayout;