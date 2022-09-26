import {
  getAuth,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase.js";

app;
export class LoginSystem {
  Login() {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence);
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
        //document.getElementById("myDIV").style.backgroundColor = "red";
      })
      .catch((error) => {
        // An error happened.
      });
  }
}

// Helpers
export function check() {
  var email = document.getElementById("email").value;
  var emailTwo = document.getElementById("emailTwo").value;
  var password = document.getElementById("password").value;
  var passwordTwo = document.getElementById("passwordTwo").value;
  if (
    email.length == 0 ||
    emailTwo.length == 0 ||
    password.length == 0 ||
    passwordTwo.length == 0
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
export function isSignedIn() {
  getAuth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("login").innerHTML = "Signout";
      document.getElementById("login").href = "javascript:new libpack.LoginSystem().SignOut();";
      document.getElementById("lisetting").className  = "list-item";
      document.getElementById("setting").className = "list-link";
      document.getElementById("setting").href = "./settings.html"
      document.getElementById("setting").innerHTML = "Settings";
    } else {
      document.getElementById("login").innerHTML = "Login/Signup";
      document.getElementById("login").href = "../public/login.html";
      document.getElementById("lisetting").className  = "";
      document.getElementById("setting").className = "";
      document.getElementById("setting").href = ""
      document.getElementById("setting").innerHTML = "";
    }
  });
}
