import React, { useState } from "react";
import {
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./styles.css";
import {
  DateField,
  DatePicker,
  DemoContainer,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { createNewTournament } from "../../api/TournamentService";
import { v4 as uuidv4 } from "uuid";

function CreateTournament() {
  const [numOfJumps, setNumOfJumps] = useState(0);
  const [fields, setFields] = useState({
    uuid: uuidv4(),
    tournamentName: "",
    location: "",
    tournamentDate: null,
    modality: "",
    category: "",
    description: "",
    trackName: "",
    jumps: 0,
    riders: [],
    state: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const cookies = new Cookies();

  const areFieldsValid = Object.values(fields).every((value) => value !== "");
  let navigate = useNavigate();

  const handleFieldChange = (fieldName) => (event) => {
    const value = event.target.value;
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: value,
    }));
  };

  const handleNumOfJumpsChange = (event) => {
    const value = event.target.value;
    fields.jumps = value;
    setNumOfJumps(value);
  };

  const handleDateChange = (date) => {
    setFields((prevFields) => ({
      ...prevFields,
      tournamentDate: date,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const numOfJumpsValid = numOfJumps >= 0;

    if (areFieldsValid && numOfJumpsValid) {
      try {
        createNewTournament(fields);
        window.alert(`El torneo: ${fields.tournamentName} ha sido creado`);
        setTimeout(navigate("/"), 1000);
      } catch (error) {
        console.log("No Enviado");
      }
    } else {
      // Handle validation errors
      console.log("No Enviado");
    }
  };

  return (
    <div>
      <Navbar title="CREAR TORNEO" />
      <Container>
        <Typography variant="h4" sx={{ mt: 3, mb: 2 }} className="formTitle">
          Nuevo torneo
        </Typography>

        <Divider className="divider" />

        <form onSubmit={handleFormSubmit}>
          {/* General Information */}
          <Typography variant="subtitle1" sx={{ mt: 2 }} className="subTitles">
            Información General Del Torneo
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Nombre del Torneo"
                fullWidth
                margin="normal"
                className={`standarTextField ${formSubmitted && fields.tournamentName === ""
                  ? "invalidField"
                  : ""
                  }`}
                value={fields.tournamentName}
                onChange={handleFieldChange("tournamentName")}
                error={formSubmitted && fields.tournamentName === ""}
                helperText={
                  formSubmitted && fields.tournamentName === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Ubicación"
                fullWidth
                margin="normal"
                className={`standarTextField ${formSubmitted && fields.location === "" ? "invalidField" : ""
                  }`}
                value={fields.location}
                onChange={handleFieldChange("location")}
                error={formSubmitted && fields.location === ""}
                helperText={
                  formSubmitted && fields.location === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Fecha del Torneo"
                  fullWidth
                  className={`standarTextField ${formSubmitted && !fields.tournamentDate
                    ? "invalidField"
                    : ""
                    }`}
                  sx={{ width: "100%", marginTop: 2 }}
                  value={fields.tournamentDate}
                  onChange={handleDateChange}
                  error={formSubmitted && !fields.tournamentDate}
                  helperText={
                    formSubmitted && !fields.tournamentDate
                      ? "Este campo es obligatorio"
                      : ""
                  }
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <Divider sx={{ mt: 3 }} className="divider" />

          {/* Tournament Details */}
          <Typography variant="subtitle1" sx={{ mt: 2 }} className="subTitles">
            Detalles del Torneo
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Modalidad"
                fullWidth
                margin="normal"
                className={`standarTextField ${formSubmitted && fields.modality === "" ? "invalidField" : ""
                  }`}
                value={fields.modality}
                onChange={handleFieldChange("modality")}
                error={formSubmitted && fields.modality === ""}
                helperText={
                  formSubmitted && fields.modality === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
              />
              <TextField
                label="Categoría"
                fullWidth
                margin="normal"
                className={`standarTextField ${formSubmitted && fields.category === "" ? "invalidField" : ""
                  }`}
                value={fields.category}
                onChange={handleFieldChange("category")}
                error={formSubmitted && fields.category === ""}
                helperText={
                  formSubmitted && fields.category === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Descripción"
                multiline
                rows={4.5}
                fullWidth
                margin="normal"
                className={`standarTextField ${formSubmitted && fields.description === ""
                  ? "invalidField"
                  : ""
                  }`}
                value={fields.description}
                onChange={handleFieldChange("description")}
                error={formSubmitted && fields.description === ""}
                helperText={
                  formSubmitted && fields.description === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
              />
            </Grid>
          </Grid>

          <Divider sx={{ mt: 3 }} className="divider" />

          {/* Track Details */}
          <Typography variant="subtitle1" sx={{ mt: 2 }} className="subTitles">
            Detalles De La Pista
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Nombre de Pista"
                fullWidth
                margin="normal"
                className={`standarTextField ${formSubmitted && fields.trackName === "" ? "invalidField" : ""
                  }`}
                value={fields.trackName}
                onChange={handleFieldChange("trackName")}
                error={formSubmitted && fields.trackName === ""}
                helperText={
                  formSubmitted && fields.trackName === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Modulos"
                type="number"
                fullWidth
                value={numOfJumps}
                onChange={handleNumOfJumpsChange}
                margin="normal"
                className={`standarTextField ${formSubmitted && numOfJumps < 0 ? "invalidField" : ""
                  }`}
                error={formSubmitted && numOfJumps < 0}
                helperText={
                  formSubmitted && numOfJumps < 0
                    ? "Debe ser un valor positivo"
                    : ""
                }
              />
            </Grid>
          </Grid>

          <Divider sx={{ mt: 3 }} className="divider" />

          {formSubmitted &&
            (!areFieldsValid || numOfJumps < 0 || numOfJumps < 0) && (
              <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                Por favor, complete todos los campos obligatorios y válidos.
              </Typography>
            )}
          <Button
            variant="contained"
            sx={{ mt: 4, mb: 6 }}
            type="submit"
            className="sendButton"
          >
            Crear Torneo
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default CreateTournament;
