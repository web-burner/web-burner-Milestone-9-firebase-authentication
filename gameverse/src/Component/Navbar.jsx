import { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Navbar = () => {
  const { user, setUser, userSignOut } = use(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/discover"}>Discover</NavLink>
      <NavLink to={"/arcade"}>Arcade Nights</NavLink>
    </>
  );
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        setUser(null);
        toast("User Logged Out Successfully!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setUser(user);
      });
  };
  return (
    <nav className="navbar p-5 w-11/12 mx-auto ">
      <div className="navbar-start w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow navlinks"
          >
            {links}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0.2, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to={"/"} className="text-2xl font-bold">
            <span>
              GAME<span className=" text-violet-700">VERSE</span>
            </span>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0.2, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="navbar-start ml-5 hidden lg:flex"
      >
        <ul className="menu menu-horizontal px-1 flex gap-3 navlinks">
          {links}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.2, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="navbar-end gap-2"
      >
        {user ? (
          <>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.8, y: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
              onClick={() => navigate("/profile")}
              className=" flex justify-center items-center gap-2 p-1 pr-2 cursor-pointer border border-gray-200 rounded-xl"
            >
              <img
                src={user.photoURL}
                className="w-8 rounded-lg"
                alt="userImage"
              />
              <p>{user.displayName}</p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.8, y: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className=" cursor-pointer btn rounded-xl p-1"
              onClick={handleSignOut}
            >
              Sign Out
            </motion.button>
          </>
        ) : (
          <>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.8, y: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <Link
                to={"/login"}
                className="btn bg-violet-100 text-violet-800 border-0 rounded-xl"
              >
                Login
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.8, y: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <Link
                to={"/register"}
                className="btn text-white bg-violet-600 border-0 rounded-xl"
              >
                Create Account
              </Link>
            </motion.div>
          </>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
