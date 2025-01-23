const express = require('express');
const https = require('https');
const app = express();

// Función para obtener datos del COVID-19
app.get('/covid', (req, res) => {
  const country = req.query.country;

  if (!country) return res.status(400).send("El parámetro 'country' es obligatorio.");

  https.get(`https://covid-193.p.rapidapi.com/statistics?country=${encodeURIComponent(country)}`, {
    headers: {
      'x-rapidapi-key': '10bf01ea39msh02c3cdb5a6faedfp1d7898jsn1e11be6ecbab',
      'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }
  }, (response) => {
    let data = '';
    response.on('data', chunk => data += chunk);
    response.on('end', () => {
      const parsedData = JSON.parse(data);

      // Si no se encuentran datos para el país, mostrar un mensaje de error
      if (!parsedData.response || parsedData.response.length === 0) {
        return res.status(404).send(`El país '${country}' no se encuentra en la lista.`);
      }

      res.send(data);
    });

    response.on('error', () => res.status(500).send("Error al obtener los datos."));
  });
});

// Exportamos la aplicación Express para que pueda ser usada en otro archivo
module.exports = app;
