const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const MONGODB_URI = 'mongodb+srv://ndubuisiazi:BiSi%230331@atlascluster.2gq9z2g.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;

