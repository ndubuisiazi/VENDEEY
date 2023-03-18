const { AuthenticationError } = require('apollo-server-express');
const { User,Products, Orders, Machines } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    
    users: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find({
        '_id': _id 
      });
    },
    products: async (parent, { category }) => {
      const params = category ? { category } : {};
      return Products.find({
        'category': category 
      });
    },
    orders: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Orders.find(params);
    },
    machinetype: async (parent, { type }) => {
      const params = type ? { type } : {};
      return Machines.find(params);
    },
  },

  Mutation: {
    updateUser: async (_, { id, input }) => {
      try {
        const user = await User.findByIdAndUpdate(id, input, { new: true });
        return user;
      } catch (err) {
        throw new Error(`Error updating user: ${err}`);
      }
    },
    addUser: async (parent, { username, email, password,phone, companyname }) => {
      const user = await User.create({ username, email, password,phone, companyname });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    
    addMachineSelection: async (parent, {_id,machineselection}) => {
      
      const newmachine = await User.findOneAndUpdate(
        
        { "orders._id": _id
         },
        { $set:
          {
            "orders.$.machineselection": machineselection
          }
       },
      );;
      return newmachine;
    },

    addMachine: async (parent, {_id,machinetype}) => {
      
      const newmachine = await User.findOneAndUpdate(
        
        { "orders._id": _id
         },
        { $set:
          {
            "orders.$.machinetype": machinetype
          }
       },
      );;
      return newmachine;
    },
    addServiceRequest: async (parent, {_id,servicerequest}) => {
      
      const newServiceRequest = await User.findOneAndUpdate(
        
        { "orders._id": _id
         },
        { $set:
          {
            "orders.$.servicerequest": servicerequest
          }
       },
      );;
      return newServiceRequest;
    },
    addItems: async (parent, {_id, productId, productName,category}) => {
      
      const newItem = await User.findOneAndUpdate(
        
        { "orders._id": _id
         },
         { $push: {
          "orders.$.items":[{
            "category":category,
            "productName":productName,
            "productId":productId
          }]
        }
      },
      );;
      return newItem;
    },
    addAddress: async (parent, {_id, streetaddress, city,state, zip, country, phone}) => {
      
      const newAddress = await User.findOneAndUpdate(
        
        { "orders._id": _id
         },
         { $push: {
          "orders.$.address":[{
          "streetaddress":streetaddress,
          "city":city,
          "state":state,
          "zip":zip,
          "phone":phone
          }]
        }
      },
      );
      return newAddress;
    },

    createOrder: async (parent, { _id}) => {
      const machine = await User.findOneAndUpdate(
        { _id: _id },
        { $push: {
            orders:[{}]
          }
        },
        { runValidators: true, new: true }
      );
      return machine;
    },
   
  },
};
    



module.exports = resolvers;
