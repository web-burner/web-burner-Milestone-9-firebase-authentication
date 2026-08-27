import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="">
      <h1 className=" text-center text-3xl font-bold">Email Password Auth</h1>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Root;
