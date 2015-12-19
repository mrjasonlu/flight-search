'use strict';

var React = require('react'),
FlightSearchBar = require('./FlightSearchBar'),
FlightListing = require('./FlightListing');

//flightData passed from app.js

var FlightModule = React.createClass({
  //function for one way search
  oneWaySearch: function(searchData){
      var fullFlightList = this.props.flightData.flights;
      //go through full flight list and match user search criteria
      var filteredList = fullFlightList.filter( function(flight){
          var flightDate = new Date(flight.deptTime);
           
          if(flight.origin == searchData.from &&
             flight.destination == searchData.dest &&
             flight.departDate
          ){
              return true;
          }
          else{
              return false;
          }
      });
      this.setState({flightList: filteredList });

  },
  returnSearch: function(flightFrom, flightDest, deptDate, returnDate){

  },
  getInitialState: function(){
      //set initial state
      return {
          flightList: this.props.flightData.flights,
          searchType: "oneWay",
          depFlightList: null,
          returnFlightList: null
      }
  },
  render: function() {
    // render flight module
    return (
      <div className="flight-module">
          <FlightSearchBar oneWaySearch={this.oneWaySearch} returnSearch={this.returnSearch} />
          <FlightListing flightData={this.state.flightList} depflightData={this.state.depFlightList} returnFlightList={this.state.returnFlightList} />
      </div>
    );
  }
});


module.exports = FlightModule;
