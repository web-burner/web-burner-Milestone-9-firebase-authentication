import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { handleCreateUserWithEmailAndPassword, setUser, updateUserProfile } =
    use(AuthContext);
  const [error, setError] = useState("");
  const createUserWithGoogle = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const imageUrl = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const uppercaseRegex = /(?=.*[A-Z])/;
    const lowercaseRegex = /(?=.*[a-z])/;
    const lengthRegex = /.{6,}/;

    if (!uppercaseRegex.test(password)) {
      setError("At least one UpperCase required!");
      return;
    }
    if (!lowercaseRegex.test(password)) {
      setError("At least one lowerCase required");
      return;
    }
    if (!lengthRegex.test(password)) {
      setError("Minimum 6 character required");
      return;
    }
    setError("");
    handleCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        updateUserProfile(name, imageUrl)
          .then((currentUser) => {
            setUser({ ...currentUser, displayName: name, photoURL: imageUrl });
          })
          .catch(() => {
        toast('Invalid Credentials');
          });
      })
      .catch(() => {
        toast('Invalid Credentials');
      });
  };
  return (
    <div className="hero bg-transparent min-h-150 px-10">
      <title>Create GameVerse Account </title>
      <div className="hero-content items-start flex-col px-5 py-10 rounded-2xl w-1/2">
        <div className="card w-full p-10 bg-white">
          <div className=" text-start">
            <p className="  text-[#1FD7DD] font-bold">GAMEVERSE ACCOUNT</p>
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="py-2">Join a community that plays with intention.</p>
          </div>
          <form
            onSubmit={createUserWithGoogle}
            className="card-body p-0 rounded-2xl"
          >
            <fieldset className="fieldset">
              <label className="label">First Name</label>
              <input
                type="text"
                name="name"
                className="input w-full outline-0"
                placeholder="Enter First Name"
              />
              <label className="label">Image URL</label>
              <input
                type="text"
                name="image"
                className="input w-full outline-0"
                placeholder="Enter Image URL"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full outline-0"
                placeholder="Enter Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full outline-0"
                placeholder="Enter Password"
              />
              {error === null ? (
                <span></span>
              ) : (
                <p className=" text-red-700">{error}</p>
              )}

              <button className="btn btn-neutral mt-2">Create Account</button>
              <p>
                Already have an Account?{" "}
                <Link className=" hover:underline" to={"/login"}>
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
