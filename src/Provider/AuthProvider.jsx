import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    // google signIn
    const googleSign =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // create user
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in user
    const signInUser =(email, password) =>{
        setLoading(true);
        return  signInWithEmailAndPassword(auth,email, password)
    }

    // logout user
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

    // observer
    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observer', currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe()
        }
    }, [])
    
    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        googleSign,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;