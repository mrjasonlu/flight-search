var flightCodes = [{ city: "Melbourne", code: "MEL"},
                   { city: "Sydney", code: "SYD"},
                   { city: "Sunshine Cost", code: "SSC"}
                  ];

var FlightCodeConverter = function(cityName) {
    for( var i=0; i<flightCodes.length; i++){
        var codeSet = flightCodes[i];
        console.log(cityName.toLowerCase() + " " + codeSet.city.toLowerCase());
        if(cityName.toLowerCase() == codeSet.city.toLowerCase()){
            return codeSet.code;
        }
    }
}

module.exports = FlightCodeConverter;
