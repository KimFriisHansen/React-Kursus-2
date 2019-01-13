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
               // Fill with code
            </div>
        )
    }
}

export default MatTextField