import React from "react";
import PropTypes from "prop-types";

function LocationSchedule(props){
  return (
    <div>
      <hr/>
      <h3>Day: {props.day}</h3>
      <h3>Location: {props.location}</h3>
      <h3>Hours: {props.hours}</h3>
      <h3>Booth: {props.booth}</h3>
      <hr/>
    </div>
  );
}

LocationSchedule.PropTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
}

export default LocationSchedule;