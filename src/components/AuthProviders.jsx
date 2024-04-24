import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";






export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true)

    // create user email and password  
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

 
    // signIn user 

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current value of the user :", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    

    const userInfo = {
        user,
        loading,
        createUser,
        // singInUser,
        signIn,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;