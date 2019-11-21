import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCvD-PTRswKCvmTECxl9lpDqebgEYpE4QI",
    authDomain: "third-eye-fashion.firebaseapp.com",
    databaseURL: "https://third-eye-fashion.firebaseio.com",
    projectId: "third-eye-fashion",
    storageBucket: "third-eye-fashion.appspot.com",
    messagingSenderId: "168527471406",
    appId: "1:168527471406:web:4df7b98181dd30dba910bf",
    measurementId: "G-KTD1LNNESS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;