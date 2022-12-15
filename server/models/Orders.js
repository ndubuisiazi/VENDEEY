const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  SKU: {
    type: Number,
    default: 0,
  },
  Catagory: {
    type: String,
    default: 0,
  },
});

const Product = model('Product', productSchema);

module.exports = Product;
