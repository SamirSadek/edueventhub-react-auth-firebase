import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext= createContext(null)


const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState()


    const googleProvider = new GoogleAuthProvider()

    const googleSignIn =() =>{
        return signInWithPopup(auth,googleProvider)
    }
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("state Changed")
            setUser(currentUser)

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
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;