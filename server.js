const express = require("express")
const PORT = 8000
const app = express();
const weatherController = require('./controllers/weatherController');

app.use(weatherController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})