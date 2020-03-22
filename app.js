const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const http = require('http').createServer(app);
const socket = require('./socket.js')( http );
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const axios = require("axios");
const { check, validationResult } = require('express-validator');

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("pwa"));


app.get("/", (req, res) => {
  res.render("index", { title: "Qui prend quoi ?" });
});


const CheckErrorAndRedirect = (res) => {
  const errors = validationResult(res)
  if (!errors.isEmpty()) {
    res.format({
      'application/json': () => {
        res.send(errors)
      },
    })
  }
}

app.post("/party", (req, res) => {
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

app.get("/party/:id", (req, res) => {
  console.log(req)
  const id = req.params.id
  axios
    .get(`${process.env.API_URL}/party/${id}`)
    .then(({ data }) => {
      res.render("party", {
        party: data,
        title: data.name,
        url: `${process.env.FRONT_URL}party/${data._id}`,
        id : id,
      });
    })
    .catch(err => {});
});



app.post("/party/add/items/:id", [
  check('name').isLength({ min: 3 }),
  check('user')
], (req, res) => {
  CheckErrorAndRedirect(req)
  const id = req.params.id
  axios
    .post(`${process.env.API_URL}/party/${id}/items`, req.body)
    .then(({ data }) => {
      socket.itemsUpdate(id)
      res.redirect(`/party/${id}`)
    })
    .catch(err => {});
});


app.post("/party/delet/items/:id", (req, res) => {
  const id = req.params.id
  const items = Object.keys(req.body)
  axios
    .all( items.map((item)=> axios.delete(`${process.env.API_URL}/party/${id}/items/${item}`)))
    .then(({ data }) => {
      socket.itemsUpdate(id)
      res.redirect(`/party/${id}`)
    })
    .catch(err => {});
});



http.listen(port, () => console.log(`Front app listening on port ${port}!`));
