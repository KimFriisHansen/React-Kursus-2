import React from 'react'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
// import {Drawer, MenuItem} from 'material-ui'

class MatDrawer extends React.Component {

    constructor(){
        super()
    
        this.state = {
          open: false
        }
        this.handleToggle = this.handleToggle.bind(this)
      }
    
      handleToggle(){
        this.setState({
          open: !this.state.open
        })
      }

    render(){
        return (
            <div>
                <button onClick={this.handleToggle}>Toggle Drawer</button>
                <Drawer 
                    open={this.state.open} // remove to make the drawer always present
                    openSecondary={true} // opens on the right side of the screen
                    // width={700} // sets custom width
                    // docked={false} // allows for overlay (can click away, or press escape to close menu)
                    // onRequestChange={(open) => this.setState({open})} // doesn't do much on it's own. Pair with docked
                >
                    <MenuItem>First Item</MenuItem>
                    <MenuItem>Second Item</MenuItem>
                    <MenuItem>Third Item</MenuItem>
                    <MenuItem>Fourth Item</MenuItem>
                    <MenuItem>Fifth Item</MenuItem>
                    <MenuItem>Sixth Item</MenuItem>
            </Drawer>
            </div>
        )
    }
}

export default MatDrawer