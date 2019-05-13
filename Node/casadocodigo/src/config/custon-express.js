require('marko/node-require').install();
require('marko/express');

const methodOverride = require('method-override');
const express = require('express');
const app = express();

app.use('/estatico', express.static('src/app/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      let method = req.body._method
      delete req.body._method
      return method
    }
  }));

const rotas = require('../app/rotas/rotas.js');
rotas(app);


module.exports = app;