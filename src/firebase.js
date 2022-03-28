import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDlpgCDCqOXI_RZUezzvYveRxyLe0gvRe0",
  authDomain: "netflix-367ff.firebaseapp.com",
  projectId: "netflix-367ff",
  storageBucket: "netflix-367ff.appspot.com",
  messagingSenderId: "106645417769",
  appId: "1:106645417769:web:bcaf3adea6ead0e1115138",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;

// export function signUp(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password);
// }

// export function signin(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

// export function useAuth() {
//   const [currentUser, setCurretuser] = useState();

//   useEffect(() => {
//     const sub = onAuthStateChanged(auth, (user) => setCurretuser(user));
//     return sub;
//   }, []);

//   return currentUser;
// }
