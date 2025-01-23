// translateController.js
const translateText = require('../models/translateModel');  // Importamos el modelo de traducción

const router = require('express').Router();

router.post('/api/translate', (req, res) => {
    console.log(req.body);  // Esto debería imprimir el cuerpo de la solicitud

    const { text, sourceLang, targetLang } = req.body;

    if (!text || !sourceLang || !targetLang) {
        return res.status(400).json({ error: 'Faltan parámetros en la solicitud' });
    }

    translateText(text, sourceLang, targetLang)
        .then((translatedText) => {
            res.json(translatedText);  
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });  
        });
});

module.exports = router;
