require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const method = require('method-override');
const app = express();
const PORT = 3000
const Chocoalte = require('./models/chocolate');
const Chocolate = require('./models/chocolate');


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
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(express.json())
app.use((req, res, next) => {
  next()
})

// ROUTES

// Index
app.get('/chocolates', (req, res) => {
  Chocoalte.find({}, (err, allChocoalte) => {
    res.render('Index', { chocolates: allChocoalte })
  })
})

// New
app.get('/chocolates/new', (req, res) => {
  res.render('New');
});

// Delete
app.delete('/chocoaltes/:id', (req, res) => {
  Chocolate.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      res.status(200).redirect('/chocoaltes')
    }
    else {
      res.status(400).json(err)
    }
  })
})

// Update
app.put('/chocoaltes/:id', (req, res) => {
  Chocoalte.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedChocolate) => {
    if (!err) {
      res.status(200).redirect('/chocoaltes')
    }
    else {
      res.status(400).json(err)
    }
  })
})


// Create
app.post('/chocolates', (req, res) => {
  Chocoalte.create(req.body, (err, createdChocolate) => {
    res.redirect('/chocolates')
  })

})

// Edit
app.get('/chocoaltes/:id/edit', (req, res) => {
  Chocoalte.findById(req.params.id, (err, foundChocolate) => {
    if (!err) {
      res.render('Edit', { chocolate: foundChocolate })
    }
    else {
      res.status(400).json(err)
    }
  })
})

// Show
app.get('/chocolates/:id', (req, res) => {
  Chocoalte.findById(req.params.id, (err, foundChocolate) => {
    res.render('Show', { chocolate: foundChocolate })
  })
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))