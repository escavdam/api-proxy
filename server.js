const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();
const weatherController = require('./controllers/weatherController');
const translateController = require('./controllers/translateTextController');


app.use(cors());


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public'))); // Aquí le indicamos a Express que los archivos estáticos están en la carpeta 'public'


app.use(weatherController);
app.use(translateController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
