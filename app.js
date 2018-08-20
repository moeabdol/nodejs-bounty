const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const hbs        = require('express-handlebars');

const app = express();

app.get('/', (req, res) => {
  res.send('hello, world!');
});

app.listen(3000, err => {
  if (err) return console.err(err);
  console.log('Server listening on port 3000');
});
