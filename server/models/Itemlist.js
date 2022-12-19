const { Schema, Types } = require('mongoose');


const itemlistSchema = new Schema(
  {
    items: [
        {
          type: Schema.Types.ObjectId,
          ref: 'products',
        },
      ]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = itemlistSchema;
