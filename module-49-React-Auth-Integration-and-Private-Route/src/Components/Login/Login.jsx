import { Link } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login clicked");
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
        </div>
      </div>
    </div>
  );
};

export default Login;
