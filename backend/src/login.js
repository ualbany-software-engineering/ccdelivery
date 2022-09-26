import { stringLength } from "@firebase/util";
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
        document.getElementById("error").innerHTML = error.message;
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
      })
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
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

export function check() {
  var email = document.getElementById("email").value;
  var emailTwo = document.getElementById("emailTwo").value;
  var password = document.getElementById("password").value;
  var passwordTwo = document.getElementById("passwordTwo").value;
  if (
    stringLength(email) == 0 ||
    stringLength(emailTwo) == 0 ||
    stringLength(password) == 0 ||
    stringLength(passwordTwo) == 0
  )
    return false;
  if (password === passwordTwo) {
    if (email === emailTwo) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
