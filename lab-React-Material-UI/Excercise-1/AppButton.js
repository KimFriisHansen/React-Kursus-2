import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AppButton extends Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Welcome Material UI
      </Button>
    );
  }
}

export default AppButton;