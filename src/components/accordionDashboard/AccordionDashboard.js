import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./AccordionDashboardStyle.css";

export default function AccordionDashboard({ tournamentData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="accordionContainer">
      <Container maxWidth="lg">
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
            aria-controls="panel1a-content"
            className="accordionHeader"
          >
            <Typography variant="h6" className="accordionTitle">
              DATOS DEL TORNEO
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ pt: 2 }}>
            {/* Nombre, Ubicacion, Fecha */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                {/* Nombre del torneo */}
                <TextField
                  label="Nombre del torneo"
                  fullWidth
                  variant="standard"
                  value={tournamentData.tournamentName}
                  disabled
                  InputLabelProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                />
              </Grid>
              {/* Ubicación */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Ubicación"
                  fullWidth
                  variant="standard"
                  value={tournamentData.location}
                  disabled
                  InputLabelProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                />
              </Grid>
              {/* Fecha */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Fecha"
                  fullWidth
                  variant="standard"
                  value={tournamentData.tournamentDate}
                  disabled
                  InputLabelProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                />
              </Grid>
            </Grid>

            {/* Descripcion */}
            <Grid container spacing={3} sx={{ pt: 2 }}>
              {/* Descripcion del torneo */}
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  label="Descripcion del torneo"
                  fullWidth
                  variant="standard"
                  value={tournamentData.description}
                  disabled
                  InputLabelProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                />
              </Grid>
            </Grid>

            {/* Modalidad, Categoria */}
            <Grid container spacing={3} sx={{ pt: 2 }}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Modalidad"
                  fullWidth
                  variant="standard"
                  value={tournamentData.modality}
                  disabled
                  InputLabelProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Categoria"
                  fullWidth
                  variant="standard"
                  value={tournamentData.category}
                  disabled
                  InputLabelProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                />
              </Grid>
            </Grid>

            {/* Nombre de la pista, modulo */}
            <Grid container spacing={3} sx={{ pt: 2 }}>
              {/* Nombre de la pista */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Nombre de la pista"
                  fullWidth
                  variant="standard"
                  value={tournamentData.trackName}
                  disabled
                  InputLabelProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                />
              </Grid>
              {/* Modulos */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Modulos"
                  fullWidth
                  variant="standard"
                  value={tournamentData.modules}
                  disabled
                  InputLabelProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "#1a1a1a",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
