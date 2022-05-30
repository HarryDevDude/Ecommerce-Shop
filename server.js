require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const method = require ('method-override');
const app = express();
const PORT = 3000
const Chocoalte = require ('./models/chocolate')

// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))


// Setup Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// Middleware
app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
// Use Express middleware to parse JSON.
app.use(express.json())
app.use((req, res, next) => {
    // console.log('I run for all the routes.')
    next()
})

// ROUTES

// Index
app.get('/chocolates', (req, res) => {
  Chocoalte.find({}, (err, allChocoalte) => {
      res.render('Index', {chocolates: allChocoalte})
  })
})

// New
app.get('/chocolates/new', (req, res) => {
  res.render('New');
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))