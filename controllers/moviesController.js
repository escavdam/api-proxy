const getMovies = require('../models/moviesModel');

const router = require('express').Router();

router.get('/movies', (req, res) => {
    getMovies()
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

module.exports = router;