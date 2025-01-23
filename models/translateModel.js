// translateModel.js (ya está bien nombrado, ya que se encarga de la lógica del modelo de traducción)
const http = require('https');
const qs = require('querystring');
const dotenv = require('dotenv');

dotenv.config();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

function translateText(sourceText, sourceLang = 'en', targetLang = 'id') {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            hostname: 'text-translator2.p.rapidapi.com',
            port: null,
            path: '/translate',
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const req = http.request(options, function (res) {
            let chunks = '';

            // Acumulamos los datos recibidos
            res.on('data', function (chunk) {
                chunks += chunk;
            });

            res.on('end', function () {
                if (res.statusCode === 200) {
                    try {
                        // Intentamos parsear la respuesta solo si la API devuelve un estado 200
                        resolve(JSON.parse(chunks));
                    } catch (error) {
                        reject(new Error('La respuesta no es un JSON válido'));
                    }
                } else {
                    // Si el estado no es 200, rechazamos la promesa con un mensaje de error
                    reject(new Error(`Error en la API: ${res.statusCode} - ${chunks}`));
                }
            });
        });

        req.on('error', function (e) {
            reject(e);
        });

        req.write(qs.stringify({
            source_language: sourceLang,
            target_language: targetLang,
            text: sourceText
        }));
        req.end();
    });
}

module.exports = translateText;
