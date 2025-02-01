import React, { createContext, useEffect, useState } from 'react';      
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';



export const authContext = createContext(null)
const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
   const [user, setUser] = useState('string')

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
             setUser(currentUser)
           //console.log(currentUser)
            if (currentUser) {
                setUser({
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL,
                });
            } else {
                setUser(null);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [auth])

    const authInfo = {
        createUser,
        logout,
        login,
        user,
        setUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;

