const translateText = require('../models/translateModel');  // Importamos la función que realiza la traducción

const router = require('express').Router();

router.post('/api/translate', (req, res) => {
    console.log(req.body);  // Esto debería imprimir el cuerpo de la solicitud

    const { text, sourceLang, targetLang } = req.body;

    // Ahora verifica que text, sourceLang y targetLang no sean undefined
    if (!text || !sourceLang || !targetLang) {
        return res.status(400).json({ error: 'Faltan parámetros en la solicitud' });
    }

    translateText(text, sourceLang, targetLang)
        .then((translatedText) => {
            res.json(translatedText);  // Responde con la traducción
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });  // Responde con el error
        });
});


module.exports = router;
