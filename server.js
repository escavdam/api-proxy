const express = require("express")
const nunjucks = require("nunjucks")
const PORT = 8000
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const weatherController = require('./controllers/weatherController');
const covidController = require('./controllers/covidController'); 
const coinsController = require('./controllers/coinsController');
const moviesController = require('./controllers/moviesController');
const translateController = require('./controllers/translateTextController');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Aquí le indicamos a Express que los archivos estáticos están en la carpeta 'public'

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.use(weatherController);
app.use(covidController);
app.use(coinsController);
app.use(weatherController);
app.use(translateController);
app.use(moviesController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
