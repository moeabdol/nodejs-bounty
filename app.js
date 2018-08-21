const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const hbs        = require('express-handlebars');

const app = express();

const config = require('./config');
const routes = {
  api:    require('./routes/api'),
  pages:  require('./routes/pages')
};

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes.pages);
app.use('/api', routes.api);

app.listen(config.APP_PORT, err => {
  if (err) return console.err(err);
  console.log('Server listening on port', config.APP_PORT);
});
