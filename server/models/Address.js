const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: Number,
    default: 0,
  },
  zip: {
    type: String,
    default: 0,
  },
});

const Address = model('address', productSchema);

module.exports = Address;
