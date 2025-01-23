const translateText = require('../models/translateModel');
const router = require('express').Router();
const path = require('path');

// Endpoint POST para traducir texto y devolver JSON
router.post('/api/translate', (req, res) => {
    const { text, sourceLang, targetLang } = req.body;

    if (!text || !sourceLang || !targetLang) {
        return res.status(400).json({ error: 'Faltan parámetros en la solicitud' });
    }

    translateText(text, sourceLang, targetLang)
        .then((translatedData) => {
            res.json({
                original: text,
                translated: translatedData.data.translatedText,
                sourceLang,
                targetLang,
            });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
});

// Endpoint GET para renderizar translate.html con datos dinámicos
router.get('/translate', (req, res) => {
    const { text, sourceLang = 'en', targetLang = 'es' } = req.query;

    if (!text) {
        return res.sendFile(path.join(__dirname, '../views', 'translate.html')); // Carga sin resultados
    }

    translateText(text, sourceLang, targetLang)
        .then((translatedData) => {
            res.render('translate.html', {
                translation: {
                    original: text,
                    translated: translatedData.data.translatedText,
                    sourceLang,
                    targetLang,
                },
            });
        })
        .catch((error) => {
            res.render('translate.html', { error: error.message });
        });
});

module.exports = router;
