import { use } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const {pathname} = useLocation();
  const { user } = use(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to={"/auth/login"} state={pathname} />;
};

export default PrivateRoutes;
