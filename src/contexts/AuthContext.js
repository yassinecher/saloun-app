import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail as updateEmaill, updatePassword as updatePasswordd } from "firebase/auth";
import { collection, addDoc, getDoc,doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [statu, setStatu] = useState("")
  const [role, setRole] = useState()

  function signup(email, password) {

    return createUserWithEmailAndPassword(auth, email, password)
  }

  async function addnewaccount() {

    try {
      const docRef = await setDoc(doc(db, "users",auth.currentUser.uid), {
        email: auth.currentUser.email,
        stat: 'Waiting for username',
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  }

  function login(email, password) {

    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function updateEmail(email) {
    return updateEmaill(auth.currentUser, email)
  }

  function updatePassword(password) {

    return updatePasswordd(auth.currentUser, password)
  }





  async function checkstat() {
   const docSnap = await getDoc(doc(db, "users",auth.currentUser.uid));
    try {
  
     
      if(docSnap.exists()) {
         return undefined
      } else return undefined
      return docSnap.data().stat
     
   
  } catch(error) {
    return docSnap.data()
  }finally{
return docSnap.data().stat
  }


  }
  function addusername() {

  }
  function addphone() {

  }
  function getuser() {

  }









  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
      if (auth.currentUser) {

      }

    })

    return unsubscribe
  }, [])







  const value = {
    currentUser,
    checkstat,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    addnewaccount,

  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
