import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class MatTextField extends React.Component {

    constructor(){
        super()
        this.state = {
            taken: false,
            usedName: 'admin',
            username: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            username: e.target.value,
            taken: false
        })

        if (e.target.value === this.state.usedName) {
            this.setState({
                taken: true
            })
        }

    }

    render(){
        return (
            <div>
                { this.state.taken ? 
                    <TextField
                        errorText="Username already in use" // If there is an error, display this text
                        floatingLabelText="Please enter your username" // The text that floats when you click in the box
                        onChange={(e)=>this.handleChange(e)}
                        value={this.state.username}
                    /> : <TextField
                        floatingLabelText="Please enter your username"
                        value={this.state.username}
                        onChange={(e)=>this.handleChange(e)}
                    /> 
                }
                <br/>
                <TextField 
                    floatingLabelText="Please enter your password"
                    hintText="Password" // The new placeholder text upon focus
                    type="password" // Changes entry to *'s
                    value={this.state.password}
                    onChange={(e)=>this.setState({password: e.target.value})}
                />
                <br/>
                <RaisedButton 
                    label="Submit Information" // The words in the button
                    primary={true} // Changing color based on color theme
                    disabled={this.state.taken} // Disables is this.state.taken is true (invalid entry in form)
                    onClick={()=>this.setState({taken: false, username: '', password: ''})} />
            </div>
        )
    }
}

export default MatTextField