import {createTheme}  from '@mui/material/styles';
import { colors } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#193F76',
      paper: colors.common.white
    },
    oPrimary: {
      main: '#FF4400',
    },
    oSecondary: {
      main: '#FD571B',
    },
    oTertiary: {
      main: '#FA6A35',
    },
    gPrimary: {
      main: '#0C0C0C',
    },
    gSecondary: {
      main: '#171717',
    },
    gTertiary: {
      main: '#494949',
    },
    gQuaternary: {
      main: '#7B7B7B',
    },
    
  },
});

export default theme;
