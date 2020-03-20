const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const axios = require("axios");
const { check, validationResult } = require('express-validator');

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index", { title: "Qui prend quoi ?" });
});




app.post("/party", (req, res) => {
  console.log(`${process.env.API_URL}/party`);
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => {
      res.redirect(`/party/${data._id}`);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});



app.post("/party/add/items/:id", [
  check('name').isLength({ min: 3 }),
  check('user')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.format({
      'application/json': function () {
        res.send(errors)
      },
    })
  }
  let id = req.params.id
  axios
    .post(`${process.env.API_URL}/party/${id}/items`, req.body)
    .then(({ data }) => {
      res.render("party", {
        party: data,
        title: data.name,
        url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${id}`
      });
    })
    .catch(err => console.log(
      err, 'ici ces lerreur'
    ));
});

app.get("/party/:id", (req, res) => {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) => {
      res.render("party", {
        party: data,
        title: data.name,
        url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`,
        id : req.params.id,
      });
    })
    .catch(err => console.log(err));
});




app.listen(port, () => console.log(`Front app listening on port ${port}!`));
