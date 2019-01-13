// App.js

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import Navbar from './Navbar';
class AppNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Button variant="outlined" color="primary">
          <Bookmarks></Bookmarks>
        </Button>
      </div>
    );
  }
}

export default AppNavbar;