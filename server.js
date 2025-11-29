const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const KEY = process.env.GOOGLE_MAPS_API_KEY || '__MISSING_KEY__';

// Serve static assets (css/js/geojson) from /public
app.use('/static', express.static(path.join(__dirname, 'public')));

// Root: inject API key into HTML template and serve
app.get('/', (req, res) => {
  const tplPath = path.join(__dirname, 'public', 'index.html.template');
  fs.readFile(tplPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Template not found.');
    }
    const out = data.replace(/__GOOGLE_MAPS_API_KEY__/g, KEY);
    res.setHeader('Content-Type', 'text/html');
    res.send(out);
  });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
