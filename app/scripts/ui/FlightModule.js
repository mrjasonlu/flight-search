'use strict';

var React = require('react'),
FlightSearchBar = require('./FlightSearchBar'),
FlightListing = require('./FlightListing');

var FlightModule = React.createClass({
  oneWaySearch: function(){

  },
  returnSearch: function(){

  },
  getInitialState: function(){
      //set initial property and saved list from JSON data
      return {
          depFlightList: null,
          returnFlightList: null
      }
  },
  render: function() {
    return (
      <div className="flight-module">
          <FlightSearchBar oneWaySearch={this.oneWaySearch} returnSearch={this.returnSearch} />
          <FlightListing flightData={this.props.flightData.flights} depflightData={this.state.depFlightList} returnFlightList={this.state.returnFlightList} />
      </div>
    );
  }
});


module.exports = FlightModule;
