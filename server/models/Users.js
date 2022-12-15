const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50, 
    },
    address: [{type: Schema.Types.ObjectId, ref: 'address'}]
    ,
    Orders: [{type: Schema.Types.ObjectId, ref: 'address'}]
  }
);


const User = model('user', userSchema);

module.exports = User;


    