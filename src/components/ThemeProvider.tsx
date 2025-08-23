// src/components/ThemeProvider.tsx
'use client';

import React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Mover toda la configuración del tema aquí para que solo se ejecute en el cliente
const palette = {
  primary: {
    main: '#106B8F',
    dark: '#002336',
    light: '#8EC005',
    contrastText: '#FEFEFE',
  },
  secondary: {
    main: '#8EC005',
    dark: '#105518',
    light: '#FEFEFE',
    contrastText: '#002336',
  },
  background: {
    default: '#FEFEFE',
    paper: '#FEFEFE',
  },
  text: {
    primary: '#002336',
    secondary: '#264454',
    disabled: '#64501E',
  },
  grey: {
    50: '#FEFEFE',
    100: '#FEFEFE',
    200: '#F5F5F5',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#64501E',
    700: '#264454',
    800: '#105518',
    900: '#002336',
  },
  success: {
    main: '#8EC005',
    light: '#A8D435',
    dark: '#105518',
  },
  error: {
    main: '#D32F2F',
    light: '#EF5350',
    dark: '#C62828',
  },
  warning: {
    main: '#64501E',
    light: '#8E6F42',
    dark: '#4A3916',
  },
  info: {
    main: '#106B8F',
    light: '#42A5CC',
    dark: '#0A4A63',
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        fontWeight: 600,
        textTransform: 'none' as const,
        padding: '12px 24px',
        fontSize: '1rem',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 15px rgba(16, 107, 143, 0.3)',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease',
      },
      contained: {
        background: 'linear-gradient(45deg, #106B8F, #002336)',
        color: '#FEFEFE',
        '&:hover': {
          background: 'linear-gradient(45deg, #002336, #105518)',
        },
      },
      outlined: {
        borderColor: '#106B8F',
        color: '#106B8F',
        borderWidth: '2px',
        '&:hover': {
          borderWidth: '2px',
          backgroundColor: 'rgba(16, 107, 143, 0.1)',
          borderColor: '#002336',
          color: '#002336',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '16px',
        boxShadow: '0 4px 25px rgba(16, 107, 143, 0.1)',
        border: '1px solid rgba(16, 107, 143, 0.1)',
        transition: 'all 0.3s ease',
        backgroundColor: '#FEFEFE',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 15px 40px rgba(16, 107, 143, 0.2)',
          borderColor: 'rgba(142, 192, 5, 0.3)',
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        background: 'linear-gradient(45deg, #8EC005, #105518)',
        color: '#FEFEFE',
        fontWeight: 500,
        borderRadius: '20px',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(142, 192, 5, 0.4)',
        },
        transition: 'all 0.3s ease',
      },
    },
  },
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Crear el tema solo en el cliente para evitar problemas de hidratación
  const theme = React.useMemo(() => {
    const baseTheme = createTheme({
      palette,
      components,
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Arial',
          'sans-serif',
        ].join(','),
      },
      shape: {
        borderRadius: 12,
      },
      spacing: 8,
    });

    // NO usar responsiveFontSizes para evitar hidratación
    return baseTheme;
  }, []);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MUIThemeProvider>
  );
}