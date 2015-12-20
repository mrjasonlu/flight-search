'use strict';

var React = require('react'),
    Flight = require('./Flight')

var FlightListing = React.createClass({
  render: function() {
    return (
      <div className="col-xs-12 col-sm-8">

          <div className="flight-list">
            { this.props.flightData ? <h2>Your Results</h2> : <div><h2>Welcome to [Airline Name]</h2><p>20% Sale now on!</p><p>Please search for a flight using our flight search!</p></div>}
            {   this.props.flightData ?
                  this.props.flightData.map(function(flight, i) { //if array, process each object
                      return <Flight key={i} arrayKey={i} flight={flight} />
                  })
              : ''
            }
          </div>
      </div>
    );
  }
});


module.exports = FlightListing;
