import { Outlet, useNavigation } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { ToastContainer } from "react-toastify";
import Spinner from "../Component/Spinner";
const Root = () => {
  const location = useNavigation();
  return (
    <div>
      <div className=" border-b border-gray-400 sticky top-0 bg-white z-50">
        <Navbar />
      </div>
      <div className=" bg-[#f0ebff8b] py-3 md:py-12">
        {location.state !== "idle" ? <Spinner /> : <Outlet />}
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Root;
