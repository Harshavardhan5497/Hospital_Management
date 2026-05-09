// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A6EBD',
      light: '#3D9BE9',
      dark: '#054580',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00C9A7',
      light: '#4DDFCA',
      dark: '#008F77',
      contrastText: '#ffffff',
    },
    error: { main: '#E53935' },
    warning: { main: '#F9A825' },
    info: { main: '#0288D1' },
    success: { main: '#2E7D32' },
    background: {
      default: '#F4F7FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1F36',
      secondary: '#4F5B76',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.015em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: '0.02em' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': { boxShadow: '0 4px 16px rgba(10,110,189,0.25)' },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0A6EBD 0%, #3D9BE9 100%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8, fontWeight: 600 },
      },
    },
  },
});

export default theme;
