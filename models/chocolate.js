const mongoose = require('mongoose');

const chocolateSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  price:  { type: Number, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true }
});

const Chocolate = mongoose.model('Chocolate', chocolateSchema);

module.exports = Chocolate;
