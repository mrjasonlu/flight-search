
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    FlightModule = require("./ui/FlightModule.js"),
    mountNode = document.getElementById("app"),
    flightAPI = "./flights.json"

    //grab flight array from JSON data
    $.getJSON( flightAPI, {
      format: "json"
    }).done(function( json ) {
          //on success, render Flight Module
          var FlightApp = React.createClass({
            render: function() {
              return (
                <div>

                  <FlightModule flightData={json} />
                </div>
              );
            }
          });
          ReactDOM.render(<FlightApp />, mountNode);
      })
      // console log error if failed.
      .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
      });
