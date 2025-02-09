import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const authContext = createContext();

const AuthProvider = ({ routes }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
    }
    const handleLogout = () => {
        signOut(auth);
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        user,
        setUser,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);

            return () => {
                unsubscribe();
            }
        })
    }, [])

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    routes
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;