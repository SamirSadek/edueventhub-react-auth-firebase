/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext= createContext(null)


const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider()

    const googleSignIn =() =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("state Changed")
            setUser(currentUser)
            setLoading(false)

          })
          return () =>{
            unSubscribe();
        }
    },[])

    const logOut = ()=>{
        return signOut(auth)
    }

    const authInfo ={
        googleSignIn,
        createUser,
        logIn,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;