import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import App from './App';
import './index.css';

// Define your themes
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

// Render your application
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MUIThemeProvider theme={darkTheme}> {/* or lightTheme depending on the default you want */}
      <SCThemeProvider theme={darkTheme}> {/* or lightTheme depending on the default you want */}
        <App />
      </SCThemeProvider>
    </MUIThemeProvider>
  </BrowserRouter>
);
