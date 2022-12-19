
const { Schema, model, Types } = require('mongoose');
const itemlistSchema = require('./Itemlist');



const orderSchema = new Schema({
  // orderId:{
  //   type:Number,
  //   required:true
  // },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  items: [itemlistSchema]

});

const Order = model('Order', orderSchema);

module.exports = Order;
































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
