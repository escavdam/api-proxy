const http = require('https');
const dotenv = require('dotenv');

dotenv.config();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

function getCoins() {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            hostname: 'coinranking1.p.rapidapi.com',
            port: null,
            path: '/stats?referenceCurrencyUuid=yhjMzLPhuIDl',
            headers: {
                'x-rapidapi-key': '64918dbd1amshcc3f1799b2db5d2p11fc30jsn85a0e0ed4bfe',
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
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
                    resolve(JSON.parse(body.toString()));
                } catch (error) {
                    reject(error);
                }
            });
        });
        
        req.end();
    });
}

module.exports = getCoins;