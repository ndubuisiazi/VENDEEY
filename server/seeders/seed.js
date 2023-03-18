const db = require('../config/connection');
const { User, Products,Machines } = require('../models');
const productData = require('./productData.json');
const machineData = require('./machines.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Machines.deleteMany({});
    await Products.deleteMany({});
    await Machines.create(machineData);

    const products = await Products.insertMany(productData);
    console.log('products seeded!');

    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
