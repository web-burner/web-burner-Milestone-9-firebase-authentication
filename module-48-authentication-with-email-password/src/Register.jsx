import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "./firebase.info";
import { Link } from "react-router";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
const Register = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [terms, setTerms] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const term = e.target.terms.checked;
    console.log(email, password, term);
    setTerms(term);

    const minimum = /^.{8,}$/;
    const upperCase = /(?=.*[A-Z])/;
    const numeric = /(?=.*\d)/;
    const symbol = /(?=.*[!@#$%^&*])/;
    if (!minimum.test(password)) {
      setError("Password minimum 8 character");
      return;
    } else if (!upperCase.test(password)) {
      setError("At least one UpperCase needed");
      return;
    } else if (!numeric.test(password)) {
      setError("At least one number needed");
      return;
    } else if (!symbol.test(password)) {
      setError("At least one special character");
      return;
    }
    if (!terms) {
      setError("Please Accept our terms and conditions");
      return;
    }

    setSuccess(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        sendEmailVerification(result.user).then(()=> alert('please verify your email address'))
        setSuccess(true);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const [show, setShow] = useState(false);
  const handlePasswordEye = (e) => {
    e.preventDefault()
    setShow(!show);
    console.log("clicked");
  };
  return (
    <div className=" p-4 w-4/12 mx-auto flex justify-center items-center text-center flex-row-reverse gap-3">
      <h2 className=" font-bold text-4xl">Register Now</h2>
      <form onSubmit={handleRegister} className=" bg-base-300 p-5 rounded-xl">
        <input
          className=" border border-gray-400 rounded-xl p-2 mb-2 w-full "
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />
        <br />
        <div className=" border border-gray-400 rounded-xl p-2 mb-2 flex justify-center items-center">
          <input
            className=" outline-0"
            type={show ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            required
          />
          <p className=" btn btn-xs" onClick={handlePasswordEye}>
            {show ? <LuEyeClosed /> : <FaRegEye />}
          </p>
        </div>
        <br />
        <input type="checkbox" name="terms" id="terms" className=" mr-3" />
        <label>Accept Our Terms & Conditions</label>

        <input
          className=" w-full border border-gray-400 bg-black font-bold rounded-xl p-2"
          type="submit"
          value="Register"
        />
        {terms ? "": "you are not agreed with our terms and conditions"}
        {success && <p>User Logged In Successfully!</p>}
        {error !== null && <p>{error}</p>}
        <Link to={"/login"}>Already have an account ? Login</Link>
      </form>
    </div>
  );
};

export default Register;
