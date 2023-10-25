import React, { useState, useEffect } from "react";
import "./LayoutStyles.css";
import Navbar from "../../components/navbar/Navbar";
import Cookies from "universal-cookie";
import CreateTournament from "../createTournament/CreateTournament";
import DashboardCreatedTournament from "../dashboardCreatedTournament/DashboardCreatedTournament";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../api/Firebase";
import { observeCookie } from "../../api/CookiesService";
import { FormatColorResetRounded } from "@mui/icons-material";
import ParticlesBg from "../../components/Particles/ParticlesBg";

export default function Layout() {
  const cookies = new Cookies();
  const [tournamentState, setTournamentState] = useState(false);

  useEffect(() => {
    // Obtener el valor inicial de la cookie "tournamentData"
    const initialValue = cookies.get("tournamentData");

    // Verificar si el valor inicial es un objeto y si tiene al menos una propiedad
    if (initialValue && typeof initialValue === "object" && Object.keys(initialValue).length > 0) {
      setTournamentState(true);
    } else {
      setTournamentState(false);
    }

    const stopObserving = observeCookie("tournamentData", (newValue) => {
      if (newValue) {
        setTournamentState(true);
        console.log("Setting tournamentState to true");
      } else {
        setTournamentState(false);
        console.log("Setting tournamentState to false");
      }
    });

    return () => {
      stopObserving(); // Cleanup on unmount
    };
  }, []);





  return (
    <>
      <ParticlesBg />
      {tournamentState ? <DashboardCreatedTournament /> : <CreateTournament />}
    </>
  );
}
