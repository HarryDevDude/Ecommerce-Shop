require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware




// ROUTE
app.get('/', function (req, res) {
  res.send('<h1>Hello!</h1>');
});


app.listen(3000, function () {
  console.log('Listening on port 3000');
});