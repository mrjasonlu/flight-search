'use strict';

var React = require('react');

var FlightList = React.createClass({
  render: function() {
    return (
      <div className="flight-summary">
        <p>{this.props.flight.code}</p>

      </div>
    );
  }
});


module.exports = FlightList;
