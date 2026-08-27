const Login = () => {
  return (
    <div className="">
      <form>
        <input
          className=" rounded-xl border border-gray-400 p-2"
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <input
          className=" rounded-xl border border-gray-400 p-2"
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <input
          className=" rounded-xl border border-gray-400 p-2"
          type="submit"
          value="Log In"
        />
      </form>
    </div>
  );
};

export default Login;
