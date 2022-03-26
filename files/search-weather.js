const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
		'X-RapidAPI-Key': '2dbc831825msh84a073d47a621bap17f4cfjsn8a5f2a3cea0d'
	}
};

fetch('https://community-open-weather-map.p.rapidapi.com/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


