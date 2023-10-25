import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../../utils/images/slider/Imagen 6.jpg";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#ff7f00",
        p: 2,
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom fontWeight="fontWeightBold">
              Información
            </Typography>
            <Typography variant="body2" color="black">
              Cajamarca / Tolima
            </Typography>
            <Typography variant="body2" color="black">
              <MuiLink
                href="https://www.cajamarca-tolima.gov.co/directorio-institucional/instituto-cajamarcuno-para-el-deporte-y-la-recreacion"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "black" }}
              >
                Instituto ICDER
              </MuiLink>
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom fontWeight="fontWeightBold">
              Contactanos
            </Typography>
            <Typography variant="body2" color="black">
              Celular/WhatsApp: 3132378513
            </Typography>
            <Typography variant="body2" color="black">
              Correo: kylerbmx12@gmail.com
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom fontWeight="fontWeightBold">
              Redes sociales
            </Typography>
            <Typography variant="body2" color="black">
              <MuiLink
                href="https://www.instagram.com/fabianmoralesrider/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "black" }}
              >
                @Fabiánmoralesrider
              </MuiLink>
            </Typography>
            <Typography variant="body2" color="black">
              <MuiLink
                href="https://www.instagram.com/escuelabmxcajamarca/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "black" }}
              >
                @EScuelabmxcajamarca
              </MuiLink>
            </Typography>
            <Typography variant="body2" color="black">
              <MuiLink
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "black" }}
              >
                @ClubdeRuedas
              </MuiLink>
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <img
              src={image}
              alt="Logo"
              style={{
                height: "100px",
                width: "80%",
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
