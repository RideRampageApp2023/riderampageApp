import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0T5gEsuWefV9aTUYlWkBa0mlhxtO2npo",
  authDomain: "riderampageapp.firebaseapp.com",
  projectId: "riderampageapp",
  storageBucket: "riderampageapp.appspot.com",
  messagingSenderId: "859844458108",
  appId: "1:859844458108:web:c1b475a1aad397e0c6fbf9",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
