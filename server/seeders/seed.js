const db = require('../config/connection');
const { User, Products } = require('../models');
const userSeeds = require('./userSeeds.json');
const productData = require('./productData.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Products.deleteMany({});
    await User.create(userSeeds);

    const products = await Products.insertMany(productData);
    console.log('products seeded!');

    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
