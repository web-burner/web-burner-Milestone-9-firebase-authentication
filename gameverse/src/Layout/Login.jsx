import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-transparent min-h-150 px-10">
      <div className="hero-content items-start flex-col px-5 py-10 rounded-2xl w-1/2">
        <div className="card w-full p-10 bg-white">
          <div className=" text-start">
            <p className="  text-[#1FD7DD] font-bold">GAMEVERSE ACCOUNT</p>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="py-2">Sign in to your saved games and profile.</p>
          </div>
          <form className="card-body p-0 rounded-2xl">
            <fieldset className="fieldset">
              
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full outline-0"
                placeholder="Enter Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full outline-0"
                placeholder="Enter Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-2">Login</button>
              <p>
                New Here?{" "}
                <Link className=" hover:underline" to={"/register"}>
                   Create an account
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
        <div className=" flex flex-col gap-2 w-full">
          <p className=" text-center text-gray-400">Or</p>

          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Sign In with Google
          </button>
          {/* Apple */}
          <button className="btn bg-black text-white border-black">
            <svg
              aria-label="Apple logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1195 1195"
            >
              <path
                fill="white"
                d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"
              ></path>
            </svg>
            Sign In with Apple
          </button>
          {/* GitHub */}
          <button className="btn bg-black text-white border-black">
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            Sign In with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
