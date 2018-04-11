import React, { Component } from 'react';
import jQuery from 'jquery';
//import  from 'jquery-datetimepicker'

class DateTimePicker extends Component {
  //jQuery('#depart_time').setLocale('en');
  render() {
    return (      
      <input type="text" 
        id="depart_time" 
        name="depart_time" 
        className="depart_time"
        onChange={this.handleChange}
        value={this.depart_time}       
        required
        />
        
    );    
  }
}

export default DateTimePicker;