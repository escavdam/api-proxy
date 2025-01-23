const http = require('https');
const dotenv = require('dotenv');

dotenv.config();

// Obtener la clave API desde el archivo .env
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

const options = {
	method: 'GET',
	hostname: 'instagram-scraper-api2.p.rapidapi.com',
	port: null,
	path: '/v1/search_location?search_query=mumbai',
	headers: {
		'x-rapidapi-key': '154bb8eb55mshbf13ce19ad95214p110887jsnbae13ac4a2aa',
		'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();



