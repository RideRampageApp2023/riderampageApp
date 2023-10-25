import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
} from "@mui/material";
import "./AddCompetitorsDialogStyles.css";
import { addCompetitors } from "../../api/TournamentService";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export default function AddCompetitorDialog({ open, onClose }) {
  const cookies = new Cookies();
  const [tournamentState, setTournamentState] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    setTournamentState(cookies.get("tournamentId"));
  }, []);

  const [competitorData, setCompetitorData] = useState({
    name: "",
    id: "",
    number: "",
    age: "",
    city: "",
    club: "",
    eps: "",
    numberPersonInCharge: "",
    socialNetworks: "",
    score: [
      {
        firstScore: 0,
        secondScore: 0,
        tirthScore: 0,
        finalScore: 0,
      },
    ],
  });

  const resetForm = () => {
    setCompetitorData({
      name: "",
      id: "",
      number: "",
      age: "",
      city: "",
      club: "",
      eps: "",
      numberPersonInCharge: "",
      socialNetworks: "",
      score: [
        {
          firstScore: 0,
          secondScore: 0,
          tirthScore: 0,
          finalScore: 0,
        },
      ],
    });
    setFormSubmitted(false); // Reinicia el estado de formSubmitted
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSave = async () => {
    // Validar los campos antes de guardar
    const areFieldsValid = Object.values(competitorData).every(
      (value) => value !== ""
    );
    if (areFieldsValid) {
      console.log(competitorData);
      const add = await addCompetitors(tournamentState, competitorData);
      if (add) {
        window.alert(
          `El corredor: ${competitorData.name} ha sido inscrito, bienvenido al torneo!`
        );
        setTimeout(() => {
          resetForm(); // Llama a la función resetForm después de cerrar el diálogo
          navigate("/layout");
        }, 1000);
        onClose();
      } else {
        window.alert("ERROR");
        setTimeout(navigate("/layout"), 1000);
      }
    } else {
      // Handle validation errors
      setFormSubmitted(true);
    }
  };

  const handleChange = (e) => {
    // Maneja los cambios en los campos del formulario
    const { name, value } = e.target;
    setCompetitorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle className="addCompetitorsDialogTitle">
        Agregar Competidor
      </DialogTitle>
      <DialogContent>
        <form>
          <Grid container spacing={2} sx={{ pt: 2 }}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                label="Nombre"
                fullWidth
                sx={{ width: "100%" }}
                name="name"
                value={competitorData.name}
                onChange={handleChange}
                error={formSubmitted && competitorData.name === ""}
                helperText={
                  formSubmitted && competitorData.name === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
                className={`standarTextField ${formSubmitted && competitorData.name === ""
                  ? "invalidField"
                  : ""
                  }`}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                label="Documento"
                fullWidth
                sx={{ width: "100%" }}
                name="id"
                value={competitorData.id}
                onChange={handleChange}
                error={formSubmitted && competitorData.id === ""}
                helperText={
                  formSubmitted && competitorData.id === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
                className={`standarTextField ${formSubmitted && competitorData.id === ""
                  ? "invalidField"
                  : ""
                  }`}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                label="Teléfono"
                fullWidth
                sx={{ width: "100%" }}
                name="number"
                value={competitorData.number}
                onChange={handleChange}
                error={formSubmitted && competitorData.number === ""}
                helperText={
                  formSubmitted && competitorData.number === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
                className={`standarTextField ${formSubmitted && competitorData.number === ""
                  ? "invalidField"
                  : ""
                  }`}
                inputProps={{
                  type: "number",
                  pattern: "[0-9]+",
                  onKeyPress: (event) => {
                    if (event.target.value.length >= 12) {
                      event.preventDefault();
                    }
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                label="Edad"
                fullWidth
                sx={{ width: "100%" }}
                name="age"
                value={competitorData.age}
                onChange={handleChange}
                error={formSubmitted && competitorData.age === ""}
                helperText={
                  formSubmitted && competitorData.age === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
                className={`standarTextField ${formSubmitted && competitorData.age === ""
                  ? "invalidField"
                  : ""
                  }`}
                inputProps={{
                  type: "number",
                  pattern: "[0-9]+",
                  onKeyPress: (event) => {
                    if (event.target.value.length >= 2) {
                      event.preventDefault();
                    }
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                label="Ciudad"
                fullWidth
                sx={{ width: "100%" }}
                name="city"
                value={competitorData.city}
                onChange={handleChange}
                error={formSubmitted && competitorData.city === ""}
                helperText={
                  formSubmitted && competitorData.city === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
                className={`standarTextField ${formSubmitted && competitorData.city === ""
                  ? "invalidField"
                  : ""
                  }`}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                label="Club"
                fullWidth
                sx={{ width: "100%" }}
                name="club"
                value={competitorData.club}
                onChange={handleChange}
                error={formSubmitted && competitorData.club === ""}
                helperText={
                  formSubmitted && competitorData.club === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
                className={`standarTextField ${formSubmitted && competitorData.club === ""
                  ? "invalidField"
                  : ""
                  }`}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                label="EPS"
                fullWidth
                sx={{ width: "100%" }}
                name="eps"
                value={competitorData.eps}
                onChange={handleChange}
                error={formSubmitted && competitorData.eps === ""}
                helperText={
                  formSubmitted && competitorData.eps === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
                className={`standarTextField ${formSubmitted && competitorData.eps === ""
                  ? "invalidField"
                  : ""
                  }`}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                label="Teléfono del Responsable"
                fullWidth
                sx={{ width: "100%" }}
                name="numberPersonInCharge"
                value={competitorData.numberPersonInCharge}
                onChange={handleChange}
                error={
                  formSubmitted && competitorData.numberPersonInCharge === ""
                }
                helperText={
                  formSubmitted && competitorData.numberPersonInCharge === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
                className={`standarTextField ${formSubmitted && competitorData.numberPersonInCharge === ""
                  ? "invalidField"
                  : ""
                  }`}
                inputProps={{
                  type: "number",
                  pattern: "[0-9]+",
                  onKeyPress: (event) => {
                    if (event.target.value.length >= 12) {
                      event.preventDefault();
                    }
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12}>
              <TextField
                label="Redes"
                fullWidth
                sx={{ width: "100%" }}
                name="socialNetworks"
                value={competitorData.socialNetworks}
                onChange={handleChange}
                error={formSubmitted && competitorData.socialNetworks === ""}
                helperText={
                  formSubmitted && competitorData.socialNetworks === ""
                    ? "Este campo es obligatorio"
                    : ""
                }
                className={`standarTextField ${formSubmitted && competitorData.socialNetworks === ""
                  ? "invalidField"
                  : ""
                  }`}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>

      {/* Botones */}
      <DialogActions className="addCompetitorsDialogButtonsContainer">
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          className="addCompetitorsDialogButtons"
        >
          Cancelar
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          variant="contained"
          className="addCompetitorsDialogButtons"
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
