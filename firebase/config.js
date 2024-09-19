import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBaFg9eNIcVAvDUtKctH-4oYe4VjnuAFPo",
  authDomain: "galileodee.firebaseapp.com",
  projectId: "galileodee",
  storageBucket: "galileodee.appspot.com",
  messagingSenderId: "777603054906",
  appId: "1:777603054906:web:8b15c6397fcf899c86e403",
  measurementId: "G-VGH7P05MLB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
