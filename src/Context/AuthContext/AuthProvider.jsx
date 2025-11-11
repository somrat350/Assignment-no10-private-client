import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  reload,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const createUG = () => {
    setUserLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const createUEP = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async (updatedObj) => {
    setUserLoading(true);

    return updateProfile(auth.currentUser, updatedObj)
      .then(() => {
        return reload(auth.currentUser);
      })
      .then(() => {
        setUser(auth.currentUser);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  const loginUEP = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => {
      userState();
    };
  }, []);
  const authInfo = {
    user,
    userLoading,
    setUserLoading,
    createUG,
    createUEP,
    updateUser,
    loginUEP,
    logout,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
