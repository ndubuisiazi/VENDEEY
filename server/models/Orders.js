
const { Schema, model, Types } = require('mongoose');
const addressSchema = require('./Address');
const productSchema = require('./ProductsSchema');



const orderSchema = new Schema({

  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  machinetype:{
    type:String,
  },
  machinename:{
    type:String,
  },
  machineselection:{
    type:String,
  },
  items: [productSchema],
  address: [addressSchema],
  servicerequest:{
    type:String,
  },
  

},
{
  toJSON: {
    getters: true,
  },
  id: false,
}
);
module.exports = orderSchema;
































