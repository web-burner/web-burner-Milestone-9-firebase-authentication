import { Link, useNavigate } from "react-router";
import AuthContext from "../Context/AuthContext";
import { use } from "react";

const Register = () => {
  const { registerUser, user, setUser, updateUserProfile } = use(AuthContext);
  // console.log(user);
  const navigate = useNavigate();
  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    registerUser(email, password)
      .then(() => {
        updateUserProfile({ displayName: name, photoURL: image })
          .then(() => setUser({ ...user, displayName: name, photoURL: image }))
          .catch(() => setUser(user));
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div className="hero flex justify-center items-center h-190 w-1/2 mx-auto">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">Welcome Here. Let's Start a Journey with us</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleCreateUser} className="card-body">
            <fieldset className="fieldset">
              {/*  name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder=" Name"
              />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="image"
                className="input"
                placeholder="Photo URL"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Email"
              />
              {/* password */}
              <label className="label">Create Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Password"
              />
              {/* forgot password */}
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p>
              Already have an account?{" "}
              <Link className=" underline" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
