'use strict';

var React = require('react');

var FlightList = React.createClass({
  render: function() {
    var flight = this.props.flight,
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
      <div className="flight-item">
        <img className="logo" src={flight.logo} alt="airline logo" />
        <div className="flight-summary">
              <span className="flight-code sum-block">{flight.code}</span>
              <span className="flight-iten sum-block">{flight.origin} > {flight.destination}</span>
              <span className="flight-depart sum-block">Depart: {deptHours}:{deptMinutes} {deptAmPm}</span>
              <span className="flight-depart sum-block">Arrive: {arrHours}:{arrMinutes} {arrAmPm}</span>
        </div>

        <div className="flight-price-control">
            <div className="flight-cost">
                  <span className="price">${flight.price}</span>
            </div>
            <button>Select this flight</button>
        </div>



      </div>
    );
  }
});


module.exports = FlightList;
