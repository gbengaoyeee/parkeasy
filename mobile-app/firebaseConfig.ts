// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_5VbLgG0avQbfojPLWbqXOE2o8-OBY2U",
  authDomain: "parkeasy-dev-ca06c.firebaseapp.com",
  projectId: "parkeasy-dev-ca06c",
  storageBucket: "parkeasy-dev-ca06c.appspot.com",
  messagingSenderId: "576853234150",
  appId: "1:576853234150:web:61bd3f5298b93c5ac98627",
  measurementId: "G-J918H3GH00"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH };