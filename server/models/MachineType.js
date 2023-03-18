
const { Schema, model, Types } = require('mongoose');



const MachineTypeSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  Height:{
    type:String,
  },
  Width:{
    type:String,
  },
  Depth:{
    type:String,
  },
  img:{
    type:String,
    required:true
  },
  type:{
    type:String,
  }
}, 
  {toJSON:
    {
      virtuals:true,
      getters:true
    },
    id:false
})


const Machines = model('Machines', MachineTypeSchema);

module.exports = Machines;
