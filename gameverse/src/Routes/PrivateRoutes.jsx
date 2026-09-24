import { use } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = use(AuthContext);
  if (user) {
    return children
  }
  else{
    <Navigate to={'/login'}></Navigate>
  }
};

export default PrivateRoutes;
