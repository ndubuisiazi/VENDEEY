import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HowItWorks from './pages/HowItWorks';
import ServiceRequest from './components/ServiceRequest/index';
import Nav from './components/Nav';
import AddService from './App copy 2';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './utils/auth';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="col-span-1 border-4 border-white h-full justify-center items-center flex flex-col sm:flex-row md:flex-col sm:flex-col">
          <Nav />
          <div className="border-4 col-span-4 border-white mx-auto w-full bg-white pb-2  md:w-full bg-gray-200">
          <Nav/>
            <Routes>
              <Route 
                path="/" 
                element={<Home/>} 
              />
              <Route 
                path="/Service" 
                element={<ServiceRequest/>} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/HowItWorks" 
                element={<HowItWorks />} 
                />
              <Route 
                path="/MachineType/:id" 
                element={<AddService />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
            </Routes>
          </div>
          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;