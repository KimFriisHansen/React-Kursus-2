import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';

import TextField from '@material-ui/core/TextField';
import Navbar from './Navbar';

class AppTextField extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Button variant="outlined" color="primary">
          <Bookmarks></Bookmarks>
        </Button> <br />
        <TextField
          placeholder="Placeholder here"
          label="Basic TextField" />
      </div>
    );
  }
}

export default AppTextField;