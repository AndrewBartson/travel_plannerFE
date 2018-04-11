import React, { Component } from "react";
import "../css/main.css";
import axios from 'axios'
import DateTimePicker from './DateTimePicker';

class TripForm extends Component {
  state = {
    origin: "Bellingham WA",
    end_point: "Miami FL",
    depart_time: "Now",
    speed: 67,
    hours_driving: 11,
    resume_time: "08:00",
    hours_rest: 10
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(document.getElementById('user_input'))
    let trip_settings = {};

    for (let entry of formData.entries()) {
      trip_settings[entry[0]] = entry[1];
    }
    axios.post('http://localhost:8001/trips', trip_settings)
      .then(response => {
        console.log('TripForm response.data - ', response.data)
      })
      .catch(function(error) {
        console.log(error);
    });
  }

  handleChange = (e) => {
    const name = e.target.name
    console.log('handleChange', e.target.name )
    this.setState({[name]: e.target.value})
  }
  setDefault = () => {
  }
  setCustom = () => {
  }
  select24cycle = () => {
  }
  showDatePicker = () => {
  }

  render() {
    return (
      <div id="sidebar">
        <div className="main_title">
          <h3>Welcome Travelers!</h3>
        </div>
        <form id="user_input" action="#" onSubmit={this.handleSubmit} method="get">
          <ul>
            <li>
              <label>From:</label>
              <input type="text" id="origin" name="origin" autoFocus required
                value={this.state.origin} onChange={this.handleChange} />
            </li>
            <li>
              <label>To:</label>
              <input type="text" id="end_point" name="end_point" required
                value={this.state.end_point} onChange={this.handleChange} />
            </li>
            <li>
              <label>Departure date and time:</label>
              <DateTimePicker depart_time={this.state.depart_time} />
              {/* <input type="text" name="depart_time" id="depart_time" required 
                value={this.state.depart_time} onChange={this.handleChange} /> */}
            </li>
            <div>Schedule and preferences</div>
              <li>
                <label>
                  <input type="radio" id="use_defaults" name="use_defaults" checked
                    value={this.state.use_defaults} onChange={this.handleChange}
                    // onChange={this.setDefault()} 
                    />
                  Use Default Settings
                </label>
              </li>
              {/* <!-- 8 am to 7 pm. 11 hours at (65??) mph = (715??) miles/day --> */}

              <li>
                <label>
                  <input type="radio" id="custom" name="use_defaults" onClick={this.setCustom()} 
                  value={this.state.use_defaults} onChange={this.handleChange}/>
                  Enter Custom Settings
                </label>
              </li>
              {/* <!-- write onClick function that enables the custom_options. --> */}

              <div id="custom_options">
                <li>
                  <input type="checkbox" id="cycle_24_hr" name="cycle_24_hr"
                    onClick={this.select24cycle()} checked  
                    value={this.state.cycle_24_hr} onChange={this.handleChange} />
                  <label>24 hour cycle</label>
                </li>
                <li>
                  <input type="number" id="speed" name="speed" min="25" max="250"
                    title="Miles Per Hour" readOnly
                    value={this.state.speed} onChange={this.handleChange}
                    />
                  <label>Average speed</label>
                </li>
                <li>
                  <input type="number" id="hours_driving" name="hours_driving" 
                  min="0.1" max="24" step="0.1" title="Hours" readOnly
                  value={this.state.hours_driving} onChange={this.handleChange} />
                  <label>Length of driving period</label>
                </li>
                {/* <!-- "hours_driving" max = 24 when "24_hr_cycle" is checked
            						     = 140 when "24_hr_cycle" is not checked. --> */}
                <li>
                  <input type="text" id="resume_time" name="resume_time" readOnly
                  value={this.state.resume_time} onChange={this.handleChange} />
                  <label>Time to begin driving each day</label>
                </li>
                <li>
                  <input type="number" id="hours_rest" name="hours_rest" 
                  min="0" max="200" step="0.1" title="Hours" readOnly
                  value={this.state.hours_rest} onChange={this.handleChange} />
                  <label>Length of rest period</label>
                </li>
            </div>
          </ul>
          <div>
            <input type="submit" value="Create Trip" id="main_button" name="main_button" />
          </div>
        </form>
        {/* <button id="calc_button" name="calc_button">
          Launch Missile
        </button> */}
          <div id="results">
             <p>Show trip summary here.</p>
        </div>
      </div> // end form_container
    );
  }
}

export default TripForm