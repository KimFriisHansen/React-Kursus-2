import React from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class MatDialog extends React.Component {
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
        
        const modalActions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleToggle}
            />,
            <FlatButton
              label="Submit"
              secondary={true}
              onClick={this.handleToggle}
            />,
          ]

        return (
            <div>
                // Fill with code
            </div>
        )
    }
}

export default MatDialog