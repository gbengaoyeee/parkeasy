// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {} from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDNBQwE3SyNfCOseSc4DGORoeME26R8SXA",
  authDomain: "parkeasy-dev-e4fdc.firebaseapp.com",
  projectId: "parkeasy-dev-e4fdc",
  storageBucket: "parkeasy-dev-e4fdc.appspot.com",
  messagingSenderId: "908623138205",
  appId: "1:908623138205:web:d432e7234d6af1df7e7374"
};


// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const analytics = getAnalytics(FIREBASE_APP);
const FIREBASE_AUTH = auth;

export { FIREBASE_APP, FIREBASE_AUTH };