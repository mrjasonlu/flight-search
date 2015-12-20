'use strict';

var React = require('react'),
    FlightSearchBar = require('./FlightSearchBar'),
    FlightListing = require('./FlightListing'),
    FlightCodeConverter = require('./FlightCodeConverter');

//flightData passed from app.js

var FlightModule = React.createClass({
  //function for one way search
  oneWaySearch: function(searchData){
      var fullFlightList = this.props.flightData.flights,
          searchDeptFullDate = new Date(searchData.deptDate),
          searchDeptDate = searchDeptFullDate.getFullYear() + "-" + searchDeptFullDate.getMonth() + "-" + searchDeptFullDate.getDate();
      //go through full flight list and match user search criteria
      var filteredList = fullFlightList.filter( function(flight){
          var flightDeptFullDate = new Date(flight.deptTime),
              flightDeptDate = flightDeptFullDate.getFullYear() + "-" + flightDeptFullDate.getMonth() + "-" + flightDeptFullDate.getDate();
          if(flight.origin == FlightCodeConverter(searchData.from) &&
             flight.destination == FlightCodeConverter(searchData.dest) &&
             flightDeptDate == searchDeptDate
          ){
              return true;
          }
          else{
              return false;
          }
      });
      this.setState({
        flightList: filteredList,
        priceFiteredList: filteredList
      });

  },
  returnSearch: function(flightFrom, flightDest, deptDate, returnDate){

  },
  priceFilter: function(sliderData){
      this.setState({
          priceMin: sliderData[0],
          priceMax: sliderData[1]
      })
      var currentFlightList = this.state.flightList;

      var priceFilteredFlights = currentFlightList.filter( function(flight){
          if(flight.price > sliderData[0] &&
             flight.price < sliderData[1]
          ){
              return true;
          }
          else{
              return false;
          }
      });
      this.setState({
        priceFiteredList: priceFilteredFlights
      });


  },
  getInitialState: function(){
      //set initial state
      return {
          flightList: this.props.flightData.flights,
          fiteredList: null,
          searchType: "oneWay",
          depFlightList: null,
          returnFlightList: null,
          priceMin: 1,
          priceMax: 1000
      }
  },
  render: function() {
    // render flight module
    return (
      <div className="flight-module">
          <FlightSearchBar oneWaySearch={this.oneWaySearch} returnSearch={this.returnSearch} priceFilter={this.priceFilter} priceMin={this.state.priceMin} priceMax={this.state.priceMax} />
          <FlightListing flightData={this.state.priceFiteredList} depflightData={this.state.depFlightList} returnFlightList={this.state.returnFlightList} />
      </div>
    );
  }
});


module.exports = FlightModule;
