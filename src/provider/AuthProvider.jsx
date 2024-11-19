import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    //state to hold the data for every load/refresh
    const [loading, setLoading] = useState(true)
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
    const authInfo ={
     user,
     setUser,
     registerNewUser,
     logout,
     userLogin,
     loading,
     updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;