const { Users, Products } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return Users.find({});
    }
  }
};

module.exports = resolvers;
