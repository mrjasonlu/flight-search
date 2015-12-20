'use strict';

var React = require('react'),
    Flight = require('./Flight')

var FlightListing = React.createClass({
  render: function() {
    var FlightList = this;
    return (
      <div className="col-xs-12 col-sm-8">

          <div className="flight-list">

            { this.props.flightData ? <div><h2>Your Results</h2><div className="search-date">Departing on {this.props.searchDeptDate}</div></div>:
              <div>
                <h2>Welcome to J-AIR</h2>
                <p>Please search for a flight using our flight search!</p>
                <p>Available desinations for 21/12/15 to 24/12/15</p>
                  <ul>
                    <li>Melbourne</li>
                    <li>Sydney</li>
                    <li>Sunshine Coast</li>
                  </ul>
              </div>
            }
            {   this.props.flightData ?

                  this.props.flightData.map(function(flight, i) { //if array, process each object
                      return <Flight key={i} arrayKey={i} flight={flight} handleShowFlight={FlightList.props.handleShowFlight} />
                  })
              : ''
            }
            { this.props.flightData ?
                this.props.flightData.length ? '' : <p>Sorry! No flights found for your search criteria.</p>
              : ''}
          </div>
      </div>
    );
  }
});


module.exports = FlightListing;
