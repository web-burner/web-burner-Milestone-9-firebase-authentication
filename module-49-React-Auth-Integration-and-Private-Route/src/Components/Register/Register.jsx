import { Link } from "react-router";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase-auth/firebase.info";
// import { toast } from "react-toastify";
import { use } from "react";
import { AuthContext } from "../../Context/authContext/AuthContext";
import { toast } from "react-toastify";
const Register = () => {
  const {createUser}=use(AuthContext)
  const handleRegister = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email,password)
    .then((result) => {
            console.log(result.user)
            toast('Account Created Successfully!')
          })
          .catch((error) => console.error(error));

  }
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const name = e.target.name.value;
  //   console.log(name,email, password);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       toast("Registered as user successfully!");
  //     })
  //     .catch((error) => console.error(error));
  // };
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col w-100">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* name field  */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="input"
              />
              {/* email field  */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Email"
              />
              {/* password field  */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Password"
              />
              {/* check box field  */}
              <div className="flex gap-2">
                <input type="checkbox" id="terms" name="checkbox" />
                <label htmlFor="terms" className=" label">Terms & Conditions</label>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className=" underline">
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
