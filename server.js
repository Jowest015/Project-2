var express = require('express');
var pgp = require('pg-promise')();

var app = express();
var PORT = 2340;

var dbSettings = {user:"postgres", password:"Mr6tBU?RSe",  database: "recipe"};
var db = pgp(dbSettings);

// console.log(db);

app.get('/', async (_req, res, next) => {
  try {
    const results = await db.query(`SELECT * FROM recipe`);
    res.send({results});
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