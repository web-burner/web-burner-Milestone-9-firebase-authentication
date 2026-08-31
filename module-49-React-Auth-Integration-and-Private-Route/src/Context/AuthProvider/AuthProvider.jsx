import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../authContext/AuthContext";
import { auth } from "../../firebase-auth/firebase.info";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user)
        toast('Account Created Successfully!')
      })
      .catch((error) => console.error(error));
  };
  const userInfo = {
    createUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
