require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const method = require('method-override');
const app = express();
const PORT = 3000
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
  Chocolate.find({}, (err, allChocolate) => {
    res.render('Index', { chocolates: allChocolate })
  })
})

// New
app.get('/chocolates/new', (req, res) => {
  res.render('New');
});

// Delete
app.delete('/chocolates/:id', (req, res) => {
  Chocolate.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      res.status(200).redirect('/chocolates')
    }
    else {
      res.status(400).json(err)
    }
  })
})

// Update
app.put('/chocolates/:id', (req, res) => {
  Chocolate.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedChocolate) => {
    if (!err) {
      res.status(200).redirect('/chocolates')
    }
    else {
      res.status(400).json(err)
    }
  })
})


// Create
app.post('/chocolates', (req, res) => {
  Chocolate.create(req.body, (err, createdChocolate) => {
    res.redirect('/chocolates')
  })

})

// Edit
app.get('/chocolates/:id/edit', (req, res) => {
  Chocolate.findById(req.params.id, (err, foundChocolate) => {
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
  Chocolate.findById(req.params.id, (err, foundChocolate) => {
    res.render('Show', { chocolate: foundChocolate })
  })
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))