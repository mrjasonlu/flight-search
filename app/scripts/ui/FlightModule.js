'use strict';

var React = require('react'),
    FlightSearchBar = require('./FlightSearchBar'),
    FlightListing = require('./FlightListing'),
    FlightDetails = require('./FlightDetails'),
    FlightCodeConverter = require('./FlightCodeConverter');

//flightData passed from app.js

var FlightModule = React.createClass({
  //function for one way search
  oneWaySearch: function(searchData){
      var fullFlightList = this.props.flightData.flights,
          searchDeptFullDate = new Date(searchData.deptDate),
          searchDeptDate = searchDeptFullDate.getDate() + "-" + searchDeptFullDate.getMonth() + "-" + searchDeptFullDate.getFullYear();
      //go through full flight list and match user search criteria
      var filteredList = fullFlightList.filter( function(flight){
          var flightDeptFullDate = new Date(flight.deptTime),
              flightDeptDate = flightDeptFullDate.getDate() + "-" + flightDeptFullDate.getMonth() + "-" + flightDeptFullDate.getFullYear();
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
        priceFiteredList: filteredList,
        deptDate: searchDeptDate,
        showFlight: false
      });

  },
  returnSearch: function(searchData){
    //todo
  },
  backToSearch: function(){
    this.setState({
      showFlight: false
    });
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
  showFlightDetails: function(flightData, setShow){
      this.setState({
        flightDetail: flightData,
        showFlight: setShow
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
          priceMax: 1000,
          deptDate: null,
          showFlight: false,
          flightDetail: null
      }
  },
  render: function() {
    // render flight module
    return (
      <div className="flight-module">
          <FlightSearchBar oneWaySearch={this.oneWaySearch} returnSearch={this.returnSearch} priceFilter={this.priceFilter} priceMin={this.state.priceMin} priceMax={this.state.priceMax} />
          {this.state.showFlight ? <FlightDetails flightDetail={this.state.flightDetail} flightDeptDate={this.state.deptDate} handleBack={this.backToSearch} />
        : <FlightListing flightData={this.state.priceFiteredList} depflightData={this.state.depFlightList} returnFlightList={this.state.returnFlightList} searchDeptDate={this.state.deptDate} handleShowFlight={this.showFlightDetails} />
          }
      </div>
    );
  }
});


module.exports = FlightModule;
