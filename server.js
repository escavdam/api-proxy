const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();
const weatherController = require('./controllers/weatherController');
const translateController = require('./controllers/translateTextController');

// Middleware para permitir solicitudes de diferentes orígenes (CORS)
app.use(cors());

// Middleware para parsear los cuerpos de las solicitudes como JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public'))); // Aquí le indicamos a Express que los archivos estáticos están en la carpeta 'public'

// Rutas de tus controladores
app.use(weatherController);
app.use(translateController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
