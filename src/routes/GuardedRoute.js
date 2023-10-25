import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Cookies from "universal-cookie";
import { app } from "../api/Firebase";
import { logOut } from "../api/LoginService";

const GuardedRoute = ({
  path,
  element: Element,
  protected: isProtected,
  ...props
}) => {

  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      cookies.remove("id");
      cookies.remove("loginTime");
    }
  });

  const cookies = new Cookies();

  /* Validar el tiempo de loggeo */
  const loginTime = cookies.get("loginTime");
  const twentyFourHours = 24 * 60 * 60 * 1000;
  const currentTime = new Date().getTime();

  if (currentTime - loginTime >= twentyFourHours) {
    cookies.remove("id");
    cookies.remove("loginTime");
    logOut();
  }

  const user = cookies.get("userId");

  if (user) {
    return (
      <Routes>
        <Route path="/" element={Element} />
      </Routes>
    );
  } else {
    window.alert("Debes Loggearte Para Acceder A Este Lugar");
    return <Navigate to="/login" replace />;
  }
};

export default GuardedRoute;
