// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0DQ7D9bKVDdKh5REnnLG5ecaP2-EQJew",
  authDomain: "eshop-be001.firebaseapp.com",
  projectId: "eshop-be001",
  storageBucket: "eshop-be001.appspot.com",
  messagingSenderId: "218925464083",
  appId: "1:218925464083:web:e3faa6ce0c234357e99de6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp