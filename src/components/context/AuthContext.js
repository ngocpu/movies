import { createContext, useContext, useEffect, useState } from "react";
import { auth,db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import{setDoc,doc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user,setUser] = useState({})

    // dk
    function SignUp(email, password){
      createUserWithEmailAndPassword(auth,email,password)
      setDoc(doc(db, "UIusers", email) ,{
        savedShows :[]
      })
    }

    // dang nhap
    function LogIn(email, password){
      return signInWithEmailAndPassword(auth,email,password)
    }

    // dang xuat
    function LogOut(){
      return signOut(auth)
    }

    useEffect(() =>{
      const unSubcribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
      })
      return () =>{
        unSubcribe()
      }
    })
  return <AuthContext.Provider value={{SignUp,LogIn,LogOut,user}}>{children}</AuthContext.Provider>;
}
export function UserAuth() {
  return useContext(AuthContext)

}
