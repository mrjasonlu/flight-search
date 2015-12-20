'use strict';

var React = require('react'),
    DatePicker = require('react-datepicker'),
    moment = require('moment'),
    ReactSlider = require('react-slider');

var FlightSearchBar = React.createClass({
    getInitialState: function() {
        return {
          deptDate: moment(),
          returnDate: moment()
        };
    },
    handleDeptDate: function(date) {
        this.setState({
            deptDate: date
        })
    },
    handleReturnDate: function(date) {
        this.setState({
            returnDate: date
        })
    },
    handleSlider: function(sliderData) {
        this.props.priceFilter(sliderData);
    },
    handleOneWaySearch: function() {
      console.log(this.refs.priceFilter.getValue());
      var searchData ={
        from       : this.refs.owFlightFrom.value,
        dest       : this.refs.owFlightDest.value,
        deptDate   : this.state.deptDate
      }
      this.props.oneWaySearch(searchData);
    },
    handleReturnSearch: function(){
      var searchData ={
        from       : this.refs.rFlightFrom.value,
        dest       : this.refs.rFlightDest.value,
        deptDate   : this.state.deptDate,
        returnDate : this.state.returnDate
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
                        <input className="form-control" ref="owFlightDest" id="ow-flight-dest" name="ow-flight-dest" type="text" defaultValue="Sydney" />
                    </div>
                    <div className="form-group">
                        <label>Departure Date:</label>
                        <DatePicker selected={this.state.deptDate} onChange={this.handleDeptDate} />
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
                          <label>Departure Date:</label>
                          <DatePicker selected={this.state.deptDate} onChange={this.handleDeptDate} />
                      </div>
                      <div className="form-group">
                          <label>Return Date:</label>
                          <DatePicker selected={this.state.returnDate} onChange={this.handleReturnDate} />
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
                  <p>Refine Flight Search</p>
                  <label htmlFor="amount">Price range:</label>
                  <p>${this.props.priceMin} - ${this.props.priceMax}</p>
                  <ReactSlider defaultValue={[0, 1000]} min={1} max={1000} onChange={this.handleSlider} withBars className="horizontal-slider" ref='priceFilter' />
              </div>
          </div>
        );
      }
});

module.exports = FlightSearchBar;
