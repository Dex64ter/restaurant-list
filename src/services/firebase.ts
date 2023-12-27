// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDZ2Snn4lOznNTjU1UR9OhHlP772xCXP2Q",
  authDomain: "restaurant-list-d730e.firebaseapp.com",
  projectId: "restaurant-list-d730e",
  storageBucket: "restaurant-list-d730e.appspot.com",
  messagingSenderId: "353275489251",
  appId: "1:353275489251:web:0f4a16569e1e2a5e910ed6",
  measurementId: "G-4CDNY93X72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);