var express = require('express');
var pgp = require('pg-promise');
var dbMaker = require('./dbUtility/utility');

var app = express();
var PORT = 2340;

app.get('/', async (_req, res, next) => {
  try {
    const results = await new dbMaker().output();
    res.send({
      results,
      meta:{
        success: true,
        info: _req.route
      }
    });
  } catch (error) {
    next(error);
    res.send({
      error,
      msg: "db table error, in db instance"
    })
  }
});

app.listen(PORT, ()=> {
  console.log(`Connection established at http://localhost:${PORT}`);
});