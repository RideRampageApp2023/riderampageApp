import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS-1iywI8MdH3C2XSox79z82KKV8zsnaQ",
  authDomain: "riderampageapp-1b577.firebaseapp.com",
  projectId: "riderampageapp-1b577",
  storageBucket: "riderampageapp-1b577.appspot.com",
  messagingSenderId: "136215376894",
  appId: "1:136215376894:web:4b9b0326a5eb973d3406af"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
