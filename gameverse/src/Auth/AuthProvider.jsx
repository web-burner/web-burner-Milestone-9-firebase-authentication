import { useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(false)

 
  //   user sign with google
  const googleProvider = new GoogleAuthProvider();
  const handleUserSignInWithGoogle = () => {
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
      setLoading(true)
    });
    return () => unSubscribe();
  }, []);

  // create user with email and password
  const handleCreateUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login with email and password
  const handleEmailPasswordLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (name, imageURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageURL,
    });
  };

  // reset password 
  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth , email)
  }
  // update password 
  const handleUpdatePassword = (user,newPassword)=> {
    return updatePassword(user,newPassword)
  }
  //   set context value in this object
  const userIno = {
    handleUserSignInWithGoogle,
    user,
    setUser,
    userSignOut,
    handleEmailPasswordLogin,
    handleCreateUserWithEmailAndPassword,
    updateUserProfile,
    resetPassword,
    handleUpdatePassword,
    loading
  };

  return <AuthContext value={userIno}>{children}</AuthContext>;
};

export default AuthProvider;
