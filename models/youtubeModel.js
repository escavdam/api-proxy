const http = require('https');

const options = {
	method: 'GET',
	hostname: 'youtube-v31.p.rapidapi.com',
	port: null,
	path: '/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50',
	headers: {
		'x-rapidapi-key': '13c0b5407dmsh0c9461e3cdc2a52p1b06a6jsn16255bcd3cf6',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
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