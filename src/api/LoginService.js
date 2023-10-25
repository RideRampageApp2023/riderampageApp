import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app, db } from "./Firebase";
import { collection, query, where } from "firebase/firestore";

export const loginAuthentication = async (data) => {
  const auth = getAuth(app);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.get("username"),
      data.get("password")
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return null;
  }
};

export const createUser = async (data) => {
  const auth = getAuth(app);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.get("username"),
      data.get("password")
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return null;
  }
};

export const logOut = async (data) => {
  const auth = getAuth(app);
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};

