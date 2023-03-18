
const { Schema, model, Types } = require('mongoose');
const addressSchema = require('./Address');
const productSchema = require('./ProductsSchema');



const orderSchema = new Schema({
  // orderId:{
  //   type:Number,
  //   required:true
  // },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  machinetype:{
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
































// const { Schema, model } = require('mongoose');

// const matchupSchema = new Schema({
//   tech1: {
//     type: String,
//     required: true,
//   },
//   tech2: {
//     type: String,
//     required: true,
//   },
//   tech1_votes: {
//     type: Number,
//     default: 0,
//   },
//   tech2_votes: {
//     type: Number,
//     default: 0,
//   },
// });

// const Matchup = model('Matchup', matchupSchema);

// module.exports = Matchup;
