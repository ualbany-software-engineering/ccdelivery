import { initializeApp } from "firebase/app";
import {
  getAuth,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYKCEONKIMkzTxjnfweV3_AKsKsu55pjQ",
  authDomain: "ccdelivery-c95e9.firebaseapp.com",
  projectId: "ccdelivery-c95e9",
  storageBucket: "ccdelivery-c95e9.appspot.com",
  messagingSenderId: "612767739408",
  appId: "1:612767739408:web:a39742140acd3efb212495",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function logInWithEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}
export async function registerWithEmailAndPassword(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}
export async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}
export function logout() {
  signOut(auth);
}
