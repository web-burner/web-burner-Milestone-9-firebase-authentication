import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import {ToastContainer} from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <ToastContainer/>
        </div>
    );
};

export default Root;