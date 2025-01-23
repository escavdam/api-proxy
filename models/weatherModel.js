const http = require('https');
const dotenv = require('dotenv');

dotenv.config();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

function getWeather(city) {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            hostname: 'open-weather13.p.rapidapi.com',
            port: null,
            path: `/city/${city}/ES`,
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

        const req = http.request(options, function (res) {
            const chunks = [];

            res.on('data', function (chunk) {
                chunks.push(chunk);
            });

            res.on('end', function () {
                const body = Buffer.concat(chunks);
                resolve(body.toString());
            });
        });

        req.on('error', function (e) {
            reject(e);
        });

        req.end();
    });
}

module.exports = getWeather;