const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/onecall/timemachine?lat=37.774929&lon=-122.419418&dt=1590094153%20",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
		"X-RapidAPI-Key": "2dbc831825msh84a073d47a621bap17f4cfjsn8a5f2a3cea0d"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

