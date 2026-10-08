import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const  Auth = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Auth;