'use strict';

var React = require('react');

var FlightList = React.createClass({
  render: function() {
    var flight = this.props.flight,
        localTime = new Date(flight.deptTime);
    return (
      <div className="flight-item">
        <img className="logo" src={flight.logo} alt="airline logo" />
        <div className="flight-summary">
              <span className="flight-code">{flight.code}</span>
              <span className=""></span>
        </div>
        <p> {flight.deptTime} - {localTime.toLocaleDateString()} {localTime.toLocaleTimeString()}</p>

      </div>
    );
  }
});


module.exports = FlightList;
