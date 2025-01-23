const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();
const weatherController = require('./controllers/weatherController');
const covidController = require('./controllers/covidController'); 
const coinsController = require('./controllers/coinsController');
const moviesController = require('./controllers/moviesController');
const translateController = require('./controllers/translateTextController');
const moviesController = require('./controllers/moviesController');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Aquí le indicamos a Express que los archivos estáticos están en la carpeta 'public'

app.use(weatherController);
app.use(covidController);
app.use(coinsController);
app.use(weatherController);
app.use(translateController);
app.use(moviesController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
