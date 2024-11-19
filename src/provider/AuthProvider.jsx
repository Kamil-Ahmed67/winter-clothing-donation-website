import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    //Register New User
    const registerNewUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={
     user,
     setUser,
     registerNewUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;