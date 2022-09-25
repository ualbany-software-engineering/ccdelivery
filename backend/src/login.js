import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "./firebase.js";

app;
export class LoginSystem {
  Login() {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      document.getElementById("email").value,
      document.getElementById("password").value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.replace("../../frontend/public/index.html");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorCode + ": " + errorMessage);
      });
  }
  SignUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      document.getElementById("email").value,
      document.getElementById("password").value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.replace("../../frontend/public/index.html");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorCode + ": " + errorMessage);
        // ..
      });
  }

  SignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        document.getElementById("myDIV").style.backgroundColor = "red";
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
