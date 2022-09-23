// Credit https://firebase.google.com/docs/auth/web/facebook-login#web-version-9
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
export function login () {
	const auth = getAuth();
	signInWithPopup(auth, provider)
  		.then((result) => {
    	// The signed-in user info.
    	const user = result.user;

    	// This gives you a Facebook Access Token. You can use it to access the Facebook API.
    	const credential = FacebookAuthProvider.credentialFromResult(result);
    	const accessToken = credential.accessToken;

    // ...
  	})
  	.catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);


    // ...
  });
}