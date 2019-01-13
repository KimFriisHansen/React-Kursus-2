import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MatDrawer from './components/MatDrawer'
import MatAppBar from './components/MatAppBar'
import MatDialog from './components/MatDialog'
import MatDatePicker from './components/MatDatePicker'
import MatTextField from './components/MatTextField'
import MatCompleted from './components/MatCompleted'

class App extends Component {
  render() {
    return (
        <div className="App">
          {/* <MatDrawer /> */}
          {/* <MatAppBar /> */}
          {/* <MatDialog /> */}
          {/* <MatDatePicker /> */}
          {/* <MatTextField /> */}
          <MatCompleted />
        </div>
    );
  }
}

export default App;
