// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNBQwE3SyNfCOseSc4DGORoeME26R8SXA",
  authDomain: "parkeasy-dev-e4fdc.firebaseapp.com",
  projectId: "parkeasy-dev-e4fdc",
  storageBucket: "parkeasy-dev-e4fdc.appspot.com",
  messagingSenderId: "908623138205",
  appId: "1:908623138205:web:d432e7234d6af1df7e7374"
};

const app = initializeApp(firebaseConfig);
const firAuth = getAuth(app);

export { firAuth }