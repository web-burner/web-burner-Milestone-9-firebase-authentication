import { useNavigate } from "react-router";
import {
  CiSettings,
  CiShoppingCart,
  CiLock,
  CiCircleQuestion,
  CiLogout,
} from "react-icons/ci";
import { use } from "react";
import { AuthContext } from "../Auth/AuthContext";
const ProfileSettings = () => {
  const { user } = use(AuthContext);
  console.log(user)
  const navigate = useNavigate();
  return (
    <>
      <p className=" text-3xl font-bold text-center mb-4">Profile</p>
      <div className=" flex flex-col justify-center items-center gap-2  ">
        <figure>
          <img
            src={user.photoURL}
            className=" rounded-full w-30 h-30 outline-2 outline-offset-1"
            alt="Profile image"
          />
        </figure>
        <div className=" text-center">
          <p className=" text-3xl font-bold">{user.displayName}</p>
          <p className=" text-gray-400">{user.email}</p>
        </div>
      </div>
      <div className=" flex justify-center border-b pb-3.5 border-gray-200">
        <button
          onClick={() => navigate("/profile/edit")}
          className="btn hover:bg-violet-800 hover:text-white"
        >
          Edit Profile
        </button>
      </div>
      <div className=" flex flex-col items-start gap-1 font-semibold">
        <button className=" cursor-pointer hover:text-violet-800 flex gap-1 items-center">
          <CiSettings /> <span>Settings</span>
        </button>
        <button className=" cursor-pointer hover:text-violet-800 flex gap-1 items-center">
          <CiShoppingCart />
          <span>My Cart</span>
        </button>
        <button className=" cursor-pointer hover:text-violet-800 flex gap-1 items-center">
          <CiLock />
          <span>Change Password</span>
        </button>
        <button className=" cursor-pointer hover:text-violet-800 flex gap-1 items-center">
          <CiCircleQuestion />
          <span>Help & support</span>
        </button>
        <button className=" cursor-pointer hover:text-violet-800 flex gap-1 items-center">
          <CiLogout className=" rotate-180" />
          <span>Log Out</span>
        </button>
      </div>
    </>
  );
};

export default ProfileSettings;
