const db = require('../config/connection');
const { Products,Users } = require('../models');

const productsData = require('./productsData.json');
const usersData = require('./userData.json');

db.once('open', async () => {
  console.log('connected');
  await Products.deleteMany({});
  await Users.deleteMany({});
  

  const products = await Products.insertMany(productsData);
  console.log('Products seeded!');
  const users = await Users.insertMany(usersData);
  console.log('Users seeded!');


  process.exit(0);
});
