import { use } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();
  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        console.log(email);
        toast("Password reset email sent");
        e.target.email.value = "";
        navigate(location.state || '/')
      })
      .catch(() => {
        toast('Invalid Credentials');
      });
  };
  return (
    <div className=" h-120 flex justify-center items-center">
      <div className=" w-2/5 mx-auto bg-white p-10 rounded-2xl ">
        <h1 className=" text-2xl font-bold text-center mb-10">
          Change Password
        </h1>
        <form onSubmit={handleReset}>
          <label className="label">Enter Email</label>
          <input
            type="email"
            className="input w-full"
            name="email"
            placeholder="Email"
          />
          <input
            type="submit"
            className=" btn w-full mt-2 bg-violet-800 text-white"
            value="Get Reset Email"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
