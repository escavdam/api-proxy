const http = require('https');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const router = require('express').Router();

// Ruta para obtener información de una ubicación en Instagram
router.get('/instagram-location', (req, res) => {
    const searchQuery = req.query.search || 'mumbai'; // Usar 'mumbai' como valor predeterminado si no se pasa ningún parámetro

    // Configuración de la solicitud HTTP a la API de Instagram a través de RapidAPI
    const options = {
        method: 'GET',
        hostname: 'instagram-scraper-api2.p.rapidapi.com',
        port: null,
        path: `/v1/search_location?search_query=${searchQuery}`,
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY, // Usar la clave API desde el archivo .env
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
    };

    // Realizar la solicitud HTTP
    const reqApi = http.request(options, (response) => {
        const chunks = [];

        response.on('data', (chunk) => {
            chunks.push(chunk);
        });

        response.on('end', () => {
            const body = Buffer.concat(chunks).toString();

            if (response.statusCode === 200) {
                // Si la respuesta es exitosa, enviar los datos al cliente
                res.json(JSON.parse(body));
            } else {
                // Si hubo un error en la API, enviar el error al cliente
                res.status(response.statusCode).json({ message: 'Error fetching Instagram location data', error: JSON.parse(body) });
            }
        });
    });

    // Manejar errores en la solicitud HTTP
    reqApi.on('error', (error) => {
        res.status(500).json({ message: 'Error while fetching Instagram location data', error: error.message });
    });

    // Finalizar la solicitud
    reqApi.end();
});

module.exports = router;