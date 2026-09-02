import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { AuthContext } from "../authContext/AuthContext";
import { auth } from "../../firebase-auth/firebase.info";
import { useEffect, useState } from "react";
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle =()=>{
    return signInWithPopup(auth,googleProvider)    
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    // clear the observer on unmount
    return () => {
      unSubscribe();
    };
  }, []);

  const signOutUser = ()=>{
    return signOut(auth)
  }
  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
