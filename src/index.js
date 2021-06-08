import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#457b9d',
    },
    secondary: {
      main: '#EBEBEB',
    },
    title: {
      main: "#FFF"
    },
    text: {
      main: "#4d4d4d"
    },
    error: {
      main: "#db0000"
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
