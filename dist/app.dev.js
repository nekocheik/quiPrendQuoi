"use strict";

var bodyParser = require('body-parser');

var express = require('express');

var app = express();

var dotenv = require('dotenv').config();

var port = process.env.PORT;

var axios = require('axios');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express["static"]('public'));
app.get('/', function (req, res) {
  res.render('index', {
    title: 'Qui prend quoi ?'
  });
});
app.post('/party', function (req, res) {
  axios.post("".concat(process.env.API_URL, "/party"), req.body).then(function (_ref) {
    var data = _ref.data;
    return res.redirect("/party/".concat(data._id));
  })["catch"](function (err) {
    return res.send(err);
  });
});
app.get('/party/:id', function (req, res) {
  axios.get("".concat(process.env.API_URL, "/party/").concat(req.params.id)).then(function (_ref2) {
    var data = _ref2.data;
    return res.render('party', {
      party: data,
      title: data.name,
      url: "".concat(process.env.FRONT_URL, ":").concat(process.env.PORT, "/party/").concat(data._id)
    });
  })["catch"](function (err) {
    return console.log(err);
  });
});
app.listen(port, function () {
  return console.log("Front app listening on port ".concat(port, "!"));
});