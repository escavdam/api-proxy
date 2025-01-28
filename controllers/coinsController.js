const getCoins = require('../models/coinModel');

const router = require('express').Router();

router.get('/api/coins', (req, res) => {
    getCoins()
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

router.get('/coins', (req, res) => {
    getCoins()
        .then((response) => {
            res.render('coins.njk', { coins: response });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

module.exports = router;