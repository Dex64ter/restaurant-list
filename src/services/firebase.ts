
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh6C5Ee7nC8aO7-UWEq23foceN8_Hi8bw",
  authDomain: "restaurant-reviews-c66ce.firebaseapp.com",
  projectId: "restaurant-reviews-c66ce",
  storageBucket: "restaurant-reviews-c66ce.appspot.com",
  messagingSenderId: "1016023485080",
  appId: "1:1016023485080:web:c388a6ff3b57ec17159eed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);