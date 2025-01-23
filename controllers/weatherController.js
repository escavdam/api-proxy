const getWeather = require('../models/weatherModel');

const router = require('express').Router();

router.get('/weather', (req, res) => {
    const city = req.query.city;
    getWeather(city)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

module.exports = router;