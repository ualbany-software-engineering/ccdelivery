import { FacebookAuthProvider } from "firebase/auth";

import { getAuth } from "firebase/auth";
function login() { // Credit https://firebase.google.com/docs/auth/web/facebook-login#web-version-9
	provider = new FacebookAuthProvider();
	auth = getAuth();
	getRedirectResult(auth)
  		.then((result) => {
    	// This gives you a Facebook Access Token. You can use it to access the Facebook API.
    	credential = FacebookAuthProvider.credentialFromResult(result);
    	token = credential.accessToken;

    	user = result.user;
  	}).catch((error) => {
    	// Handle Errors here.
    	errorCode = error.code;
    	errorMessage = error.message;
    	// The email of the user's account used.
    	email = error.customData.email;
    	// AuthCredential type that was used.
    	credential = FacebookAuthProvider.credentialFromError(error);
    	// ...
  });
}

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('hello!');
});

app.listen(8080);