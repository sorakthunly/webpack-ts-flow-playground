const express = require('express');
const fs = require('fs');
const path = require('path');

const staticAssets = express.static(path.resolve(__dirname, 'dist'));
const app = express();
app.use(staticAssets);

app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, 'dist/index.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
