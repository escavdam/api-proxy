const express = require("express")
const PORT = 8000
const app = express();
const weatherController = require('./controllers/weatherController');
const covidController = require('./controllers/covidController'); 




app.use(covidController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})