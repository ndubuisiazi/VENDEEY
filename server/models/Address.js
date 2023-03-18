const { Schema, Types } = require('mongoose');


const addressSchema = new Schema(
  {
    streetaddress:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    state:{
      type:String,
      required:true
    },
    zip:{
      type:Number,
    required:true
    },
    country:{
      type:String,
    },
    phone:{
      type:String,
    required:true
    }
    
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);



module.exports = addressSchema;
