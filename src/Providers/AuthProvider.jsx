import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";



export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState([]);

    //createUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //signIn
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    //signOut
    const signOut = () => {
        return signOut(auth)
    }

    const userInfo = {
        user,
        createUser,
        logIn,
        signOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;