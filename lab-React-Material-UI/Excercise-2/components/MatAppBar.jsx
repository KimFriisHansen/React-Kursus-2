import React from 'react'

import AppBar from 'material-ui/AppBar'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
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


class MatAppBar extends React.Component {
    render(){
        
        return (
            <div>
                <AppBar
                    style={{backgroundColor: blueGrey500}}
                    title="Bestseller Worldwide"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>} // Shows the delete icon next to the title
                    showMenuIconButton={true} // Shows the hamburger menu on the left of the title
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                            <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            maxHeight={400}
                        >
                            <MenuItem> Menu 1 Item </MenuItem>
                            <MenuItem> Menu 2 Item </MenuItem>
                            <MenuItem> Menu 3 Item </MenuItem>
                            <MenuItem> Menu 4 Item </MenuItem>
                            
                        </IconMenu>
                    }
                />
            </div>
        )
    }
}



export default MatAppBar