'use strict';

var React = require('react'),
    Flight = require('./Flight')

var FlightListing = React.createClass({
  render: function() {
    return (
      <div className="col-xs-12 col-sm-8">
          <h2>Your Results</h2>
          <div className="flight-list">
            {
              this.props.flightData.map(function(flight, i) { //if array, process each object
                  return <Flight key={i} arrayKey={i} flight={flight} />
              })
            }
          </div>
      </div>
    );
  }
});


module.exports = FlightListing;
