import { useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //   user sign with google
  const googleProvider = new GoogleAuthProvider();
  const handleUserSignUpWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   user sign out
  const userSignOut = () => {
    return signOut(auth);
  };

  //   auth state provider
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  //   set context value in this object
  const userIno = { handleUserSignUpWithGoogle, user, setUser, userSignOut };

  return <AuthContext value={userIno}>{children}</AuthContext>;
};

export default AuthProvider;
