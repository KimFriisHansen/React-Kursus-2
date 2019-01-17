import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import {
  blue500,
  blue700,
  blueGrey100,
  blueGrey500,
  darkBlack,
  grey300,
  lightBlack,
  purpleA200,
  white
} from 'material-ui/styles/colors';

const Header = () => (
  <div>
    <AppBar
     style={{backgroundColor: blueGrey500}}
      title="Sales customer list"
      showMenuIconButton={false}
     
    />
  </div>
);

export default Header;
