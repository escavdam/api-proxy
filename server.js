const express = require("express")
const PORT = 8000
const app = express();
//const weatherController = require('./controllers/weatherController');
const coinsController = require('./controllers/coinsController');

app.use(coinsController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})