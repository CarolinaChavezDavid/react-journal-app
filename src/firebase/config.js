// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-qpLBhHAdHOJJEjEaBApv2-sZ8eH1DdY",
  authDomain: "learning-react-74028.firebaseapp.com",
  projectId: "learning-react-74028",
  storageBucket: "learning-react-74028.appspot.com",
  messagingSenderId: "689743430915",
  appId: "1:689743430915:web:ba507e9db89d255a9d5536",
  measurementId: "G-1JRH6R3WV5"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);