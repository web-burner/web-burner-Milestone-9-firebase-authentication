import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/authContext/AuthContext";
import { toast } from "react-toastify";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebase-auth/firebase.info";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login clicked");
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("user login successfully");
        navigate(location.state || "/");
        // loading(false);
      })
      .catch((error) => console.log(error));
    e.target.reset();
  };
  

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero py-20">
      <div className="hero-content flex-col w-100">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <Link to={"/register"} className=" underline">
              Register Now
            </Link>
          </form>
          <button className="btn btn-neutral mt-4" onClick={handleGoogleSignIn}>
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
