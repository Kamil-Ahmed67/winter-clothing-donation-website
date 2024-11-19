import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    //Register New User
    const registerNewUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }
    //observer to track and hold the user
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return()=>{
            unsubscribe();
        }
    },[]);
    //logout user
    const logout=()=>{
        return signOut(auth);
    }
    //Login User
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo ={
     user,
     setUser,
     registerNewUser,
     logout,
     userLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;