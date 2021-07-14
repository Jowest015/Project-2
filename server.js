const express = require('express');
const pgp = require('pg-promise');
const body = require('body-parser');
const morgan = require('morgan');
const dbMaker = require('./dbUtility/utility');
const routes = require('./routes/index');

const app = express();
const PORT = 2340;

//routes
app.use(routes);


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