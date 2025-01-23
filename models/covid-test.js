const http = require('https');

const options = {
	method: 'GET',
	hostname: 'covid-193.p.rapidapi.com',
	port: null,
	path: '/countries',
	headers: {
		'x-rapidapi-key': '10bf01ea39msh02c3cdb5a6faedfp1d7898jsn1e11be6ecbab',
		'x-rapidapi-host': 'covid-193.p.rapidapi.com'
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