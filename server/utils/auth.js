const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '3h';

module.exports = {
  signToken: function ({ email, username, _id,phone,companyname }) {
    const payload = { email, username, _id,phone,companyname };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
