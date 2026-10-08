import { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Navigate, useLocation} from "react-router";

const PrivateRouter = ({children}) => {
    const location = useLocation()
    // console.log(location)
    const {user , loading } = use(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={location.pathname}/>
};

export default PrivateRouter;