import { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";

const ProfileEdit = () => {
  const { user, updateUserProfile, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageUrl = e.target.image.value;
    updateUserProfile(name, imageUrl)
      .then((currentUser) => {
        setUser({ ...currentUser, displayName: name, photoURL: imageUrl });
        navigate('/profile')
      })
      .catch(() => {
        toast('Invalid Credentials');

      });
  };
  return (
    <div className=" bg-white space-y-3 px-10 w-2/5 mx-auto rounded-2xl py-5">
      <p className=" text-3xl font-bold text-center mb-4">Edit Profile</p>
      <div className=" flex flex-col justify-center items-center gap-2  ">
        <figure>
          <img
            src={user?.photoURL}
            className=" rounded-full w-30 h-30 outline-2 outline-offset-1"
            alt="Profile image"
          />
        </figure>
        <div className=" text-center">
          <p className=" text-3xl font-bold">{user?.displayName}</p>
          <p className=" text-gray-400">{user?.email}</p>
        </div>
      </div>
      <div>
        <form className="fieldset" onSubmit={handleSubmit}>
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Name"
          />

          {/* photo url */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="image"
            className=" input w-full"
            placeholder="Photo"
          />
          <div className=" flex justify-between gap-2">
            <button className="btn flex-1 " onClick={() => navigate(-1)}>
              Go Back
            </button>
            <button
              onClick={() => updateUserProfile}
              className="btn flex-1 bg-violet-800 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
