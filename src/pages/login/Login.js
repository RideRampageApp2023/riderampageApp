import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from '../../utils/images/Logo.png';
import './styles.css';
import { loginAuthentication } from '../../api/LoginService';
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie"


const defaultTheme = createTheme();

export default function Login() {

  const navigate = useNavigate();

  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await loginAuthentication(data);

      if (response !== null) {
        const cookies = new Cookies();

        cookies.set("userId", response.uid, { path: '/' });
        cookies.set("loginTime", new Date().getTime(), { path: '/' });

        setTimeout(navigate("/layout"), 9000);
      } else {
        window.alert("Usuario o contraseña incorrecta")
        setTimeout(window.location.reload(), 1000);
      }
    } catch (err) {
      window.alert("Usuario o contraseña incorrecta")
      setTimeout(window.location.reload(), 1000);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      {/* Imagenes */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${require('../../utils/images/bmxLogin.jpg')})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Form */}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className="formContainer">
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar
            alt="RideRampage"
            src={image}
            sx={{ width: 150, height: 150, mb: 3 }}
          />
          <Typography component="h1" variant="h5" className='title' align="center">
            SECCIÓN DE ADMINISTRADORES
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              autoComplete="username"
              autoFocus
              className="custom-textfield"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              className="custom-textfield"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="button"
            >
              Ingresar
            </Button>

            <Typography variant="body2" color="black" align="center" sx={{ mt: 2 }} className="copyrightLogin">
              {'Copyright © '}
              <Link color="inherit" href="/">
                RideRampageApp
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}