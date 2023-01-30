import React, { createContext, useContext, useEffect, useState } from 'react';
import { Auth, db } from '../firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setuser] = useState({});

  //signin

  function signup(email, password) {
    createUserWithEmailAndPassword(Auth, email, password);

    setDoc(doc(db, 'users', email), {
      savedshows: [],
    });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(Auth, email, password);
  }

  function logout() {
    return signOut(Auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (curuser) => {
      setuser(curuser);
    });

    return () => unsubscribe();
  });

  return (
    <AuthContext.Provider value={{ signup, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
