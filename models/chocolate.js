const mongoose = require('mongoose');

const chocolateSchema = new mongoose.Schema({
  img: { type: String, require: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 }
});

const Chocolate = mongoose.model('Chocolate', chocolateSchema);

module.exports = Chocolate;
