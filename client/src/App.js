import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Auth from './utils/auth';
import AddService from './App copy 2';
import Header from './components/Header';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';
import LandingPage from './components/Landing/index';
import ServiceRequest from './components/ServiceRequest/index';
import MachineTypeSelection from './pages/MachineSelection';
import Nav from './components/Nav';
import Orderpage from './pages/Orderpage';
import Signup from './pages/Signup';
import Profile from './components/Profile/index';

import './index.css';

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
  const token = localStorage.getItem('id_token');
  const isLoggedIn = token !== null;

  const navAndRoutes = (
    <>
    {/* Navigation */}  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Orderpage/:id/:machinetype" element={<Orderpage />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/MachineType/:id" element={<AddService />} />
        <Route path="/MachineSelection/:id/:machinetype" element={<MachineTypeSelection />} />
        <Route path="/AddService" element={<AddService />} />
        <Route path="/Service/:id" element={<ServiceRequest />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
  const RoutesOnly = (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
      </Routes>
    </>
  );

  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <Header />
    

      

      {/* Main Content */}
      <div className="flex-grow flex flex-row" >
          {/* Branded Sidebar */}
      {isLoggedIn ? 
          <div className="w-20 flex-shrink-0 flex flex-col">
          <Nav/>
          </div>
           : <>
           <div className="hidden">
      <Nav/>
      </div>
           </>}

        {/* Content */}
        <div className="flex-grow flex" style={{ background: "#f6f6f2" }}>
        {isLoggedIn ? 
          <div className="flex-grow" style={{ background: "#f6f6f2" }}>
          {navAndRoutes}
          </div>
           : <>
           <div className="flex w-full justify-center" >
           {RoutesOnly}
           </div>
           </>}
        </div>
      </div>
    </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
