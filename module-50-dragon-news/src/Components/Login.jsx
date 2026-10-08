import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  // console.log(location.state);
  const { handleLogin, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location.state || "/");
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <div className="hero flex justify-center items-center h-180 w-1/2 mx-auto ">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Here</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUserLogin} className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                required
                className="input"
                placeholder="Password"
              />
              {/* forgot password */}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className=" text-red-600">{
                error && 'Invalid Credentials'
                }</p>
            </fieldset>
            <p>
              Don't have an account?{" "}
              <Link className=" underline" to={"/auth/register"}>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
