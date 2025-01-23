const express = require('express');
const app = express();
const instagramController = require('./controllers/instagramController'); // Ruta del controlador

app.use(instagramController); // Usar el controlador para la ruta /instagram-location

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});