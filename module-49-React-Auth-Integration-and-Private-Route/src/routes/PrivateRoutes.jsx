import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/authContext/AuthContext";
import { use } from "react";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation()
  const {pathname} = location;
  console.log(location)
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}  state={pathname}/>;
};

export default PrivateRoutes;
