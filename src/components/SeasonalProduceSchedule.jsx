import React from "react";
import PropTypes from "prop-types"

function SeasonalProduceSchedule(props){
  return (
    <div>
      <hr/>
      <h3>{props.month}</h3>
      <h3>{props.selection}</h3>
      <hr/>
    </div>
  );
}

SeasonalProduceSchedule.PropTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
}

export default SeasonalProduceSchedule;