const express = require("express")
const nunjucks = require("nunjucks")
const PORT = 8000
const app = express();
const weatherController = require('./controllers/weatherController');

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



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})