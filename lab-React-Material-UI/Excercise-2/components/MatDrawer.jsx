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
               // Fill with code
            </div>
        )
    }
}

export default MatDrawer