var express = require('express');
var app = express();
var PORT = 2340;

app.get('/', (_req, res) => {
  res.send('Hello Dave....');
});

app.listen(PORT, () => {
  console.log(`Connection established at http://localhost:${PORT}`);
});

