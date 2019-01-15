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
                <button onClick={this.handleToggle}>Open a Dialog Box</button>
                <Dialog
                    title="Workshop 2 Dialog Box"
                    actions={modalActions} // The buttons the user has access to click on. This points to the array I made. It can be a single element.
                    modal={false} // If false (default) the user can click away (or escape) from the modal to close the dialog box
                    onRequestClose={this.handleToggle} // pairs with the modal
                    open={this.state.open} // required. Controls when the dialog is open or not.
                >
                    Are you sure you want to continue the Workshop?
                </Dialog>
            </div>
        )
    }
}

export default MatDialog