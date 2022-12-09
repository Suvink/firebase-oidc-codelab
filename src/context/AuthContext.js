import { createContext, useContext, useEffect, useState } from "react";
import { OAuthProvider, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // (2): Implement the signInWithAsgardeo() method



    // (3): Implement the signOutFromAsgardeo() method




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    // (4): Pass the login and logout methods to the context provider.
    return <authContext.Provider value={{ user, loading }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => {
    return useContext(authContext);
}

export { AuthContextProvider, useAuth };