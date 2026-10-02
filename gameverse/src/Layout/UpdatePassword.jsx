import { use, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const UpdatePassword = () => {
  const { user, handleUpdatePassword } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const updatePassword = (e) => {
    e.preventDefault();
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
    console.log(password);
    handleUpdatePassword(user, password)
      .then(() => {
        toast("Password updated successfully");
        navigate("/profile");
      })
      .catch(() => {
        toast('Invalid Credentials');
      });
  };
  return (
    <div className=" h-120  w-2/5 mx-auto flex justify-center items-center">
      <form
        onSubmit={updatePassword}
        className="space-y-3 bg-white px-10 rounded-2xl py-10"
      >
        <label htmlFor="password" className="label text-black">
          Type New Password
        </label>
        <input
          type="password"
          className="input w-full"
          name="password"
          id="password"
          placeholder="Enter New Password"
        />
        <p className="text-red-800">{error}</p>
        <input
          type="submit"
          className="btn w-full hover:bg-violet-800 hover:text-white"
          value="Save"
        />
      </form>
    </div>
  );
};

export default UpdatePassword;
