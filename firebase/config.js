// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaFg9eNIcVAvDUtKctH-4oYe4VjnuAFPo",
  authDomain: "galileodee.firebaseapp.com",
  projectId: "galileodee",
  storageBucket: "galileodee.appspot.com",
  messagingSenderId: "777603054906",
  appId: "1:777603054906:web:8b15c6397fcf899c86e403",
  measurementId: "G-VGH7P05MLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const twitterAuth = new TwitterAuthProvider();
// const analytics = getAnalytics(app);
