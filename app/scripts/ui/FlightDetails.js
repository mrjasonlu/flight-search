'use strict';

var React = require('react')

var FlightDetails = React.createClass({
  handleBack: function(){
      this.props.handleBack();
  },
  render: function() {
    var flight = this.props.flightDetail,
        //time formatting for departure and arrival time in 12 hour
        deptTime = new Date(flight.deptTime),
        deptHours = deptTime.getHours(),
        deptMinutes = deptTime.getMinutes(),
        deptAmPm = deptHours >= 12 ? 'pm' : 'am',
        deptHours = deptHours % 12,
        deptHours = deptHours ? deptHours : 12, // the hour '0' should be '12'
        deptMinutes = deptMinutes < 10 ? '0'+ deptMinutes : deptMinutes,
        arrTime = new Date(flight.arrTime),
        arrHours = arrTime.getHours(),
        arrMinutes = arrTime.getMinutes(),
        arrAmPm = arrHours >= 12 ? 'pm' : 'am',
        arrHours = arrHours % 12;
        arrHours = arrHours ? arrHours : 12; // the hour '0' should be '12'
        arrMinutes = arrMinutes < 10 ? '0'+ arrMinutes : arrMinutes;
    return (
      <div className="col-xs-12 col-sm-8">
          <div className="flight-detail">
              <div>
                <h2>Selected Flight</h2>
                <p>Please see below for details of your selected flight:</p>
                <p><strong>Flight Date:</strong> {this.props.flightDeptDate}</p>
                <p><strong>Origin:</strong> {flight.origin}</p>
                <p><strong>Destination:</strong> {flight.destination}</p>
                <p><strong>Departure time:</strong> {deptHours}:{deptMinutes} {deptAmPm}</p>
                <p><strong>Arrival time:</strong> {arrHours}:{arrMinutes} {arrAmPm}</p>
                <p><strong>Total (inc GST):</strong> ${flight.price}</p>
                <button className="back-to-results" onClick={this.handleBack}>Back to results</button>
              </div>

          </div>
      </div>
    );
  }
});


module.exports = FlightDetails;
