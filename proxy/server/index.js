const express = require('express');
const app = express();
const request = require('request');
const parser = require('body-parser');
// const path = require('path');

app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static(__dirname + '/../public'));

app.use(parser.urlencoded({ extended: false }));
app.get('/compare', (req, res) => {
  request('http://compare:3004/compare', { qs: req.query }).pipe(res);
});

const port = 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
