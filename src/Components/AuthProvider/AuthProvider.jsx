import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import {
    GoogleAuthProvider,
    GitHubAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";


const googleAuthProvider = new GoogleAuthProvider();
const gitHubAuthProvider = new GitHubAuthProvider();

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return                          createUserWithEmailAndPassword(auth, email, password);
      };
      const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };
    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubAuthProvider);
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            console.log(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        setUser,
        signIn,
        signInWithGoogle,
        signInWithGitHub,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;