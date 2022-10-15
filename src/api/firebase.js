import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1QXHM_p74lJ5IjPp2xkKia7bM0Ek9ax4",
  authDomain: "ccdelivery-4752f.firebaseapp.com",
  projectId: "ccdelivery-4752f",
  storageBucket: "ccdelivery-4752f.appspot.com",
  messagingSenderId: "609192068170",
  appId: "1:609192068170:web:54ea74db2201a33f8dd2b3",
  measurementId: "G-3YFBKMS28D"
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