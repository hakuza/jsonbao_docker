const express = require('express');
const app = express();
const parser = require('body-parser');
const router = require('./routes.js');

app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static(__dirname + '/../public'));

app.use(parser.urlencoded({ extended: false }));
app.use('/', router);

const port = 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
