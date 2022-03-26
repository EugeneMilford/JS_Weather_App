const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://community-open-weather-map.p.rapidapi.com/weather?q=cape%20town&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml");
xhr.setRequestHeader("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "2dbc831825msh84a073d47a621bap17f4cfjsn8a5f2a3cea0d");

xhr.send(data);

