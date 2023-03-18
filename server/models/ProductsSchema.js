
const { Schema, model, Types } = require('mongoose');



const productSchema = new Schema({
  productId:{
    type:Number,
    required:true
  },
  productName:{
    type:String,
    required:true
  },
  productDescription:{
    type:String,
  },
  category:{
    type:String,
  },
  quantity:{
    type:Number,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  img:{
    type:String,
    required:true
  }
}, 
  {toJSON:
    {
      virtuals:true,
      getters:true
    },
    id:false
})

productSchema.virtual('productsCount').get(() => {
  return this.products.length
})
module.exports = productSchema;
