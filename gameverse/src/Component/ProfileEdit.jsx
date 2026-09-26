import { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";

const ProfileEdit = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <p className=" text-3xl font-bold text-center mb-4">Edit Profile</p>
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
      <div>
        <form className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input w-full" placeholder="Name" />
          <div>
            <label className="label">Gender</label>
            <label className="label">Date Of Birth</label>
            <input type="date" className="input w-full" placeholder="Name" />
          </div>
          <label className="label">Photo URL</label>
          <input
            type="file"
            name="photo"
            className="input w-full"
          />
          <label className="label">Phone</label>
          <input type="phone" className="input w-full" placeholder="Phone" />
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />

          <div className=" flex justify-between gap-2">
            <button className="btn flex-1 " onClick={() => navigate(-1)}>
              Go Back
            </button>
            <button className="btn flex-1 bg-violet-800 text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileEdit;
