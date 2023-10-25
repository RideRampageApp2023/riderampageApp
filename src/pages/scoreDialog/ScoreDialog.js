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
import { addCompetitors, rateRider } from "../../api/TournamentService";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import "./ScoreDialogStyle.css";

export default function ScoreDialog({ open, onClose, riderId }) {
  const cookies = new Cookies();
  const [tournamentState, setTournamentState] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lap, setLap] = useState(0);
  const [riderScore, setRiderScore] = useState({
    lap: 0,
    score: 0,
  });
  let navigate = useNavigate();

  useEffect(() => {
    setTournamentState(cookies.get("tournamentId"));
  }, []);

  const numOfLapValid = lap >= 0;

  const handleSave = async () => {
    const areFieldsValid = Object.values(riderScore).every(
      (value) => value !== ""
    );
    if (areFieldsValid) {
      let modifiedScore = null;
      const tId = cookies.get("tournamentId");
      console.log(tId)
      await rateRider(
        tId,
        riderId,
        riderScore.lap,
        riderScore.score
      );
      console.log("Calificado");

      onCloseEdit();
      onClose();
    } else {
      setFormSubmitted(true);
    }
  };

  const handleNumOfLapChange = (event) => {
    const value = event.target.value;
    riderScore.lap = value;
    setLap(value);
  };

  const handleFieldChange = (fieldName) => (event) => {
    const value = event.target.value;

    // Utiliza una expresión regular para validar que el valor sea un número decimal válido
    if (/^\d*\.?\d*$/.test(value) || value === "") {
      setRiderScore((prevFields) => ({
        ...prevFields,
        [fieldName]: value,
      }));
    }
  };

  const onCloseEdit = () => {
    setLap(0); // Restablece el valor de lap a 0
    setRiderScore({
      lap: 0,
      score: "",
    }); // Restablece el objeto riderScore a su estado inicial
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle className="addCompetitorsDialogTitle">
        Calificar Competidor
      </DialogTitle>
      <DialogContent className="dialogScoreContainer">
        <form>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              id="lap"
              label="Pasada"
              type="number"
              value={lap}
              onChange={handleNumOfLapChange}
              margin="normal"
              className={`standarTextField ${formSubmitted && lap < 0 ? "invalidField" : ""
                }`}
              error={formSubmitted && lap < 0}
              helperText={
                formSubmitted && lap < 0 ? "Debe ser un valor positivo" : ""
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Calificación"
              id="score"
              name="socialNetworks"
              value={riderScore.score}
              onChange={handleFieldChange("score")}
              error={formSubmitted && riderScore.score === ""}
              helperText={
                formSubmitted && riderScore.score === ""
                  ? "Este campo es obligatorio"
                  : ""
              }
              className={`standarTextField ${formSubmitted && riderScore.score === "" ? "invalidField" : ""
                }`}
            />
          </Grid>
        </form>
      </DialogContent>

      {/* Botones */}
      <DialogActions className="addCompetitorsDialogButtonsContainer">
        <Button
          onClick={() => {
            onClose();
            onCloseEdit();
          }}
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
