const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Set up CORS with custom options (you can modify these options as needed)
const corsOptions = {
  origin: '*', // Replace '*' with your frontend domain to restrict origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers in requests
};

// Use CORS middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  try {
    await server.start();

    server.applyMiddleware({ app, path: '/graphql' });

    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://0.0.0.0:${PORT}${server.graphqlPath}`);
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      });
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
