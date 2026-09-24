import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Root = () => {
    return (
        <div>
            <div className=" border-b border-gray-400 sticky top-0 bg-white z-50">
                <Navbar/>
            </div>
            <div className=" bg-[#f0ebff8b] py-12">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Root;