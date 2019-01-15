import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import formatDate from './lib/formatDate';
import { addTodo } from './actions';
import { highlightInputError2000 } from './lib/highlightInputError';

const styles = {
  underlineStyle: {
    borderColor: '#eea6a0',
  },
};

class Form extends Component {
  state = {
    text: '',
    date: {},
    emptyTextSubmitted: false,
    emptyDateSubmitted: false,
  };

  handleTextChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleDateChange = (e, date) => {
    this.setState({
      date: date,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text && this.state.date instanceof Date) {
      this.props.addTodo({ text: this.state.text, date: this.state.date });
      this.setState({
        text: '',
        date: {},
      });
    }

    //????
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       // ???
       
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo }, dispatch);
};

export default connect(null, mapDispatchToProps)(Form);
