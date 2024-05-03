import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";



export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    //createUser
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //signIn
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //signOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //User active or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('Current User : ', currentUser)
            setLoading(false);

        });
        return () => {
            return unsubscribe();
        }
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
        
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;