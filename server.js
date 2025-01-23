const express = require("express")
const PORT = 8000
const app = express();
const weatherController = require('./controllers/weatherController');
const moviesController = require('./controllers/moviesController');

app.use(moviesController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})