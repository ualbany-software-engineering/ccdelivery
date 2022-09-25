// Credit https://firebase.google.com/docs/auth/web/facebook-login#web-version-9
import { getAuth, signInWithPopup, FacebookAuthProvider } from "./node_modules/firebase/auth";
import app from "./firebase.mjs";
import React, {useState, useEffect} from "./node_modules/react";
import { FirebaseError } from "./node_modules/firebase/app";

export function LoginSystem () {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    function Login () {
    	var email = document.getElementById("email").getAttribute("value");
		  var password = document.getElementById("password").getAttribute("value"); // Get username and password

		  window.alert(email + " " + password);

	}

    /**
     * Sign Up Features
     * Accounts for weak password/username not valid or in use
     */
      function SignUpstory () {
      app.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => { //in case of an error in username and password
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
     };

     /**
      * Handles Signout for user
      */
     function SignOutstory () {
      app.auth().SignOut(); //Signs out of current account
     }

     /**
      * Once Logged in through firebase, user has to be set to it still explicitly
      * So we will implement an authentication listener
      */
     function AuthListener(){
      app.auth().onAuthStateChanged((user) => {
        if(user){
          setUser(user)
        } //meaning if user is valid, we setting it as the current user
        else{
          setUser("");
        }
      })
     }

     useEffect(() => {
      AuthListener
     }, []);

  }

  export function Login() {
    LoginSystem.Login();
  }

  export default function() {
    alert("Module loaded (export default)!");
  }
