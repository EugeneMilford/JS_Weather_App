const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
		'X-RapidAPI-Key': '2dbc831825msh84a073d47a621bap17f4cfjsn8a5f2a3cea0d'
	}
};

fetch('https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=san%20francisco%2Cus&lat=35&lon=139&cnt=10&units=metric%20or%20imperial', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


