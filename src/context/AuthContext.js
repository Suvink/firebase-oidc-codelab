import { createContext, useContext, useEffect, useState } from "react";
import { OAuthProvider, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signInWithAsgardeo = () => {
        const oidcProvider = new OAuthProvider('oidc.asgardeo');
        return signInWithPopup(auth, oidcProvider);
    }

    const signOutFromAsgardeo = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return <authContext.Provider value={{ user, loading, signInWithAsgardeo, signOutFromAsgardeo }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => {
    return useContext(authContext);
}

export { AuthContextProvider, useAuth };