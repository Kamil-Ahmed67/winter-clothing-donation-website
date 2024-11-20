import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    //state to hold the data for every load/refresh
    const [loading, setLoading] = useState(true)
    //google auth provider
    const googleProvider = new GoogleAuthProvider();
    //Register New User
    const registerNewUser=(email,password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    //observer to track and hold the user
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);
    //logout user
    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }
    //Login User
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //update user profile,set name and photo
    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    //signin with google
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const authInfo ={
     user,
     setUser,
     registerNewUser,
     logout,
     userLogin,
     loading,
     updateUserProfile,
     signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;