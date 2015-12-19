'use strict';

var React = require('react');

var FlightSearchBar = React.createClass({
  handleSearch: function(searchType) {

  },
  render: function() {
      return (
        <div className="search-wrapper col-xs-12 col-sm-4">
            <div id="one-way">
                <form>
                  <div className="form-group">
                      <label htmlFor="ow-flight-from">From:</label>
                      <input className="form-control" id="ow-flight-from" name="ow-flight-from" type="text" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="ow-flight-dest">Destination:</label>
                      <input className="form-control" id="ow-flight-dest" name="ow-flight-dest" type="text" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="ow-dept-date">Departure Date:</label>
                      <input className="form-control" id="ow-dept-date" name="ow-dept-date" type="text" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="ow-passengers">Passengers:</label>
                      <select className="form-control" name="ow-passengers" id="ow-passengers">
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
                  <input className="btn btn-primary" type="submit" id="ow-submit" onClick={this.prop.oneWaySearch} name="ow-submit" />
                </form>
            </div>
            <div id="return">
                <form>
                    <div className="form-group">
                        <label htmlFor="r-flight-from">From:</label>
                        <input className="form-control" name="r-flight-from" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="r-flight-dest">Destination:</label>
                        <input className="form-control" name="r-flight-dest" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="r-dept-date">Departure Date:</label>
                        <input className="form-control" name="r-dept-date" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="r-dept-date">Departure Date:</label>
                        <select className="form-control" name="r-passengers">
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
                      <input className="btn btn-primary" type="submit" id="r-submit" onClick={this.handleSearch("return")} name="r-submit" />
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
