import React from 'react'

import DatePicker from 'material-ui/DatePicker'

// Disable weekends
function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
}

// Disable dates found within an array
function disableDate(date){
    var disabledArray = [1,5,7,10,20,23,25] // This would be a list of dates you're unavailable
    //You could also disable a certain range. This would be done by adding it to the disabledArray if it's day, month, and year are between that range.
    return disabledArray.includes(date.getDate()) ? true : false
}

class MatDatePicker extends React.Component {
    render(){
        return (
            <div>
                <DatePicker 
                    autoOk={true} // Wether or not the submit button has to be pressed
                    hintText="Auto Select" // The placeholder text
                />
                <DatePicker 
                    hintText="Disable Weekends" 
                    shouldDisableDate={disableWeekends}  // Determines which dates should be disabled
                    mode='landscape' // Display calendar portrait or landscape
                />
                <DatePicker 
                    openToYearSelection={true} // Should open to year first?
                    hintText="Disable Date" shouldDisableDate={disableDate} 
                />
            </div>
        )
    }
}

export default MatDatePicker