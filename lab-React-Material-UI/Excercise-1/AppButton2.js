import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';

class AppButton2 extends Component {
  render() {
    return (
      <Button variant="outlined" color="primary">
        <Bookmarks></Bookmarks>
          Chapter 2
      </Button>
    );
  }
}
export default AppButton2;