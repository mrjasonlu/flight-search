jest.dontMock('../FlightModule');

describe('FlightModule', function() {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        FlightModule = require('../FlightModule'),
        flightModule = null,
        jsonData = {
          "flights": [{
                "price": "94.50",
                "code": "AI-202",
                "origin": "MEL",
                "destination": "SYD",
                "deptTime": "2015-12-20T19:00:00.000",
                "arrTime": "2015-12-20T21:10:00.000",
                "logo": "/images/logo1.jpg"
            }, {
                "price": "121.00",
                "code": "Z-203",
                "origin": "MEL",
                "destination": "SYD",
                "deptTime": "2015-12-21T02:00:00.000",
                "arrTime": "2015-12-21T04:15:00.000",
                "logo": "/images/logo2.jpg"
            }, {
              "price": "299.50",
              "code": "AI-201",
              "origin": "SYD",
              "destination": "MEL",
              "deptTime": "2015-12-24T10:00:00.000",
              "arrTime": "2015-12-24T12:10:00.000",
              "logo": "/images/logo1.jpg"
              }]
        };

        beforeEach(function() {
            flightModule = TestUtils.renderIntoDocument(<FlightModule flightData={jsonData} />);
        });

        it('should pass FlightList containing 3 items', function() {
            //results list should contain 3 properties from JSON data
            expect(flightModule.props.flightData.flights.length).toBe(3);
        });
});
