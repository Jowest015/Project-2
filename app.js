const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// View engine setup
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(express.static(__dirname, +'/public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render("home");
});

app.listen(port, () => {
  console.log(`Connected to http://localhost:${port}`);
});