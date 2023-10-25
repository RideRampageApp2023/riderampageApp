import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SchemaIcon from "@mui/icons-material/Schema";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";
import "./SidebarStyles.css";
import { logOut } from "../../api/LoginService";
import AddCompetitorDialog from "../../pages/addCompetitorsDialog/AddCompetitorsDialog";
import { closeTournament } from "../../api/TournamentService";
import { observeCookie } from "../../api/CookiesService";

const Sidebar = ({ open, onClose }) => {
  const [addCompetitorDialogOpen, setAddCompetitorDialogOpen] = useState(false);
  const [tournamentState, setTournamentState] = useState(false);
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const initialValue = cookies.get("tournamentData");

    if (
      initialValue &&
      typeof initialValue === "object" &&
      Object.keys(initialValue).length > 0
    ) {
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

  const logout = async () => {
    const logout = await logOut();

    if (logout) {
      cookies.remove("userId");
      cookies.remove("loginTime");
      window.alert("Cierre de sesión exitoso");
      setTimeout(navigate("/"), 9000);
    } else {
      window.alert("Error cerrando sesión");
      setTimeout(navigate("/"), 9000);
    }
  };

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    onClose();
  };

  const openAddCompetitorDialog = () => {
    setAddCompetitorDialogOpen(true);
  };

  const closeTournamentMethod = async () => {
    if (window.confirm("¿Estás seguro de que desea cerrar el torneo?")) {
      const close = await closeTournament();
      if (close) {
        cookies.remove("tournamentId");
        cookies.remove("tournamentData");
        window.alert("Torneo Cerrado!");
        setTimeout(navigate("/"), 1000);
      } else {
        window.alert("Error Cerrando El Torneo!");
      }
    } else {
      window.alert("Error Cerrando El Torneo!");
    }
  };

  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      className="sidebarContainer"
    >
      <div />
      <div className="titleContainer">
        <p>MENU</p>
      </div>
      <List>
        <ListItem>
          <Link className="linkSidebar" to="/">
            <ListItemButton className="listSidebar">
              <ListItemIcon>
                <SchemaIcon />
              </ListItemIcon>
              Tablero Del Torneo
            </ListItemButton>
          </Link>
        </ListItem>

        <Divider />

        {tournamentState ? (
          <>
            <ListItem>
              <ListItemButton
                className="listSidebar"
                onClick={openAddCompetitorDialog}
              >
                <ListItemIcon>
                  <DesignServicesIcon />
                </ListItemIcon>
                Agregar Competidores
              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem>
              <Link className="linkSidebar" onClick={closeTournamentMethod}>
                <ListItemButton className="listSidebar">
                  <ListItemIcon>
                    <PeopleAltIcon />
                  </ListItemIcon>
                  Cerrar torneo
                </ListItemButton>
              </Link>
            </ListItem>

            <Divider />
          </>
        ) : (
          <></>
        )}

        <ListItem onClick={logout}>
          <ListItemButton className="listSidebar">
            <ListItemIcon className="linkSidebar">
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              Cerrar Sesión
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        {list()}
      </Drawer>
      <AddCompetitorDialog
        open={addCompetitorDialogOpen}
        onClose={() => setAddCompetitorDialogOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
