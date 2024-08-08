/* eslint-disable no-undef */
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Create a new account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with google
  const signinWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Sign out
  const SignOUt = () => {
    signOut(auth);
  };

  //Update user
  const updateUser = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // check signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      axios.post("http://localhost:6001/jwt", userInfo).then((response) => {
        // console.log(response.data.token);
        if (response.data.token) {
          localStorage.setItem("access-token", response.data.token);
        }
      });
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logIn,
    signinWithGmail,
    SignOUt,
    updateUser,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
