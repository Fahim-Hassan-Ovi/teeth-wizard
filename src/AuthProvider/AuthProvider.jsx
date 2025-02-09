import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const authContext = createContext();

const AuthProvider = ({ routes }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const manageProfile = (name, image) =>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: image
        })
    }
    const handleLogout = () => {
        return signOut(auth);
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        manageProfile,
        handleLogout,
        user,
        setUser,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            if(currentUser){
                setUser(currentUser);
            }
            else{
                setUser(null);
            }

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