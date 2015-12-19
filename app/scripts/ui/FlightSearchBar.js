'use strict';

var React = require('react');

var FlightSearchBar = React.createClass({
  handleOneWaySearch: function() {
    var searchData ={
      from       : this.refs.owFlightFrom.value,
      dest       : this.refs.owFlightDest.value,
      deptDate   : this.refs.owDeptDate.value
    }
    this.props.oneWaySearch(searchData);
  },
  handleReturnSearch: function(){
    var searchData ={
      from       : this.refs.rFlightFrom.value,
      dest       : this.refs.rFlightDest.value,
      deptDate   : this.refs.rDeptDate.value,
      returnDate : this.refs.rReturnDate.value
    }
    this.props.oneWaySearch(searchData);
  },
  render: function() {
      return (
        <div className="search-wrapper col-xs-12 col-sm-4">
            <div id="one-way">
                  <div className="form-group">
                      <label htmlFor="ow-flight-from">From:</label>
                      <input className="form-control" ref="owFlightFrom" id="ow-flight-from" name="ow-flight-from" type="text"  defaultValue="Melbourne" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="ow-flight-dest">Destination:</label>
                      <input className="form-control" ref="owFlightDest" id="ow-flight-dest" name="ow-flight-dest" type="text" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="ow-dept-date">Departure Date:</label>
                      <input className="form-control" ref="owDeptDate" id="ow-dept-date" name="ow-dept-date" type="text" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="ow-passengers">Passengers:</label>
                      <select className="form-control" ref="owPassengers" name="ow-passengers" id="ow-passengers">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                      </select>
                  </div>
                  <button className="btn btn-primary" id="ow-submit" onClick={this.handleOneWaySearch} name="ow-submit">Search</button>
            </div>
            <div id="return">
                <form>
                    <div className="form-group">
                        <label htmlFor="r-flight-from">From:</label>
                        <input className="form-control" ref="rFlightFrom" name="r-flight-from" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="r-flight-dest">Destination:</label>
                        <input className="form-control" ref="rFlightDest" name="r-flight-dest" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="r-dept-date">Departure Date:</label>
                        <input className="form-control" ref="rDeptDate" name="r-dept-date" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="r-return-date">Return Date:</label>
                        <input className="form-control" ref="rReturnDate" name="r-return-date" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="r-passengers">Passengers:</label>
                        <select className="form-control" ref="rPassengers" name="r-passengers" id="r-passengers">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                          </select>
                    </div>
                      <input className="btn btn-primary" type="submit" id="r-submit" onClick={this.handleReturnSearch} name="r-submit" />
                </form>
            </div>

            <div className="price-filter">
                <label htmlFor="amount">Price range:</label>
                <input type="text" id="amount" />
            </div>
        </div>
      );
    }
});

module.exports = FlightSearchBar;
