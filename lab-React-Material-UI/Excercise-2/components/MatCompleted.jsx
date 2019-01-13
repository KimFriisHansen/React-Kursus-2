import React from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Close from 'material-ui/svg-icons/navigation/close'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import DatePicker from 'material-ui/DatePicker'

import {Step, Stepper, StepLabel} from 'material-ui/Stepper'

import Snackbar from 'material-ui/Snackbar'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import CircularProgress from 'material-ui/CircularProgress'

class MatCompleted extends React.Component {

    constructor(){
        super()

        this.state = {
            menuOpen: false,
            dateModalOpen: false,
            modalClosed: true,
            stepIndex: 0,
            stepFinished: 2,
            completed: 5,
            isLoading: false
        }
        this.handleMenuOpen = this.handleMenuOpen.bind(this)
        this.toggleDateModal = this.toggleDateModal.bind(this)
    }

    handleMenuOpen(){
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    toggleDateModal(){
        this.setState({
            dateModalOpen: !this.state.dateModalOpen,
            menuOpen: false
        })
    }

    addStepper(){
        if (this.state.stepIndex >= this.state.stepFinished){
            return null
        }
        this.setState({
            stepIndex: this.state.stepIndex += 1
        })
    }

    componentDidUpdate(){
        if (this.state.stepIndex === 2 && this.state.isLoading === false){
            this.timer = setTimeout(() => this.addProgress(5), 1000);
        }
    }

    addProgress(completed) {
        if (completed > 100) {
          this.setState({completed: 100});
          return this.completedWalkthrough()
        } else {
          this.setState({completed, isLoading: true, modalClosed: true});
          const diff = Math.random() * 15;
          this.timer = setTimeout(() => this.addProgress(completed + diff), 500);
        }
      }

      completedWalkthrough(){
          this.setState({
              dialogCompletion: true
          })
      }


    render(){

        const modalActions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.toggleDateModal}
            />,
            <FlatButton
              label="Submit"
              secondary={true}
              onClick={()=>this.setState({modalClosed: false, dateModalOpen: false, stepIndex: this.state.stepIndex+=1})}
            />,
          ]

        return (
            <div>
                <AppBar 
                    title="Completed Workshop Demo"
                    showMenuIconButton={false}
                    iconElementRight={<IconButton onClick={this.handleMenuOpen}><MoreVertIcon /></IconButton>}
                />
                <Drawer
                    open={this.state.menuOpen}
                    openSecondary={true}
                >
                    <MenuItem rightIcon={ <Close onClick={this.handleMenuOpen} /> }></MenuItem>
                    <MenuItem onClick={this.toggleDateModal} > Open DatePicker Modal</MenuItem>
                </Drawer>
                <Dialog 
                    open={this.state.dateModalOpen}
                    title="Please select a date!"
                    actions={modalActions} 
                    modal={false}
                    onRequestClose={this.toggleDateModal}
                >
                    <DatePicker 
                        autoOk
                    />
                </Dialog>

                <Stepper 
                    style={{width: '60%', margin: 'auto'}}
                    activeStep={this.state.stepIndex}>
                    <Step>
                        <StepLabel>Select a Date</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Enter Username</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Do more of the things</StepLabel>
                    </Step>
                </Stepper>

                { this.state.stepIndex === 1 &&
                <div>
                    <TextField
                        floatingLabelText="What is your name?"
                    />
                    <br/>
                    <RaisedButton
                        label="Submit"
                        primary={true}
                        onClick={()=>this.setState({stepIndex: this.state.stepIndex+=1})}
                    />
                </div> }

                { this.state.stepIndex === 2 &&
                <div>
                    <CircularProgress
                        style={{top: '200px'}}
                        size="60"
                        thickness="5"
                        mode="determinate"
                        value={this.state.completed}
                    />
                </div> }

                <Dialog 
                    open={this.state.dialogCompletion}
                >
                    <img src="https://memegenerator.net/img/instances/500x/60263463/congratulations-you-made-it.jpg"/>
                </Dialog>

                <Snackbar 
                    message="Added item to calendar!"
                    open={!this.state.modalClosed}
                    autoHideDuration={4000}
                />
            </div>
        )
    }
}

export default MatCompleted