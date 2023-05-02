// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD81_f7iE_Dx_95xUsZib-C6eZCq0LVdI8",
  authDomain: "my-podcasts-journal.firebaseapp.com",
  projectId: "my-podcasts-journal",
  storageBucket: "my-podcasts-journal.appspot.com",
  messagingSenderId: "466867493381",
  appId: "1:466867493381:web:63578289b2df3ae1a0da6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instantiate providers
const provider = new GoogleAuthProvider();

// get current auth instance
export const auth = getAuth(app);


// set up auth functions
export function login() {
    return signInWithPopup(auth, provider);
}

export function logout() {
    return signOut(auth);
}