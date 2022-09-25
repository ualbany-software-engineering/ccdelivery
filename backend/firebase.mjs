
import firebase from './node_modules/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYKCEONKIMkzTxjnfweV3_AKsKsu55pjQ",
    authDomain: "ccdelivery-c95e9.firebaseapp.com",
    projectId: "ccdelivery-c95e9",
    storageBucket: "ccdelivery-c95e9.appspot.com",
    messagingSenderId: "612767739408",
    appId: "1:612767739408:web:a39742140acd3efb212495"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export default app;