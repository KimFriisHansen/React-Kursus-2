import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


// ===== THESE ARE FOR CHANGING YOUR THEME TYPE (LIGHT (default), DARK, OR CUSTOM) ===== //
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// We would also need to change our MuiThemeProvider to:
// <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

ReactDOM.render(

    <MuiThemeProvider >
        <App />
    </MuiThemeProvider>

, document.getElementById('root'));
