import { useEffect, useState } from "react";
import { auth } from "../Firebase Info/firebase.config";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const handleLogin = (email , password)=>{
     return signInWithEmailAndPassword(auth, email, password)
    
  }

  const handleSignOut = ()=>{
     return signOut(auth)
    .then(result => {
      // console.log(result)
      alert('user sign out successfully')
    })
    .catch(error =>{ 
      // console.log(error)
    }
    )
  }
  const updateUserProfile = (details)=>{
    return updateProfile(auth.currentUser,details)
  }
  const userInfo = {
    user,
    setUser,
    registerUser,
    handleSignOut,
    handleLogin,
    updateUserProfile
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
