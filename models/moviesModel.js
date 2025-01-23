const http = require('https');
const dotenv = require('dotenv');

dotenv.config();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

function getMovies() {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            hostname: 'imdb-top-100-movies.p.rapidapi.com',
            port: null,
            path: '/',
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };
        
        const req = http.request(options, function (res) {
            const chunks = [];
        
            res.on('data', function (chunk) {
                chunks.push(chunk);
            });
        
            res.on('end', function () {
                const body = Buffer.concat(chunks);
                try {
                    const jsonResponse = JSON.parse(body.toString());
                    resolve(jsonResponse);
                } catch (error) {
                    reject(error);
                }
            });
        });
        
        req.end();
    });
}

module.exports = getMovies;
