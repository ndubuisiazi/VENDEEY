import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <div className="text-center">
          {/* VENDEE Logo */}
          {/* You can replace the SVG code with the VENDEE logo SVG provided in the original HTML */}
          
          <h3 className="text-6xl lg:text-lg font-bold p-6 lg:p-4">Log In</h3>
        </div>
        <div className=" flex justify-center w-full h-full p-20 lg:p-0 ">
      <div className="w-full lg:w-1/3 h-3/4 p-20 rounded-lg bg-white border border-gray-200 rounded shadow-md">
        
        <form onSubmit={handleFormSubmit} id="login">
          <input
            className="lg:text-sm text-4xl w-full p-2 mb-20 lg:mb-2 border border-gray-300 rounded h-32 lg:h-10"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            className="lg:text-sm text-4xl w-full p-2 mb-20 lg:mb-2 border border-gray-300 rounded h-32 lg:h-10"
            name="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button className="lg:text-sm text-4xl h-32 lg:h-10 btn btn-block btn-primary w-full p-2 bg-black text-white font-semibold rounded mb-20 lg:mb-2 rounded-lg"
          type="submit">
            Log In
          </button>
        </form>
        <div className="text-center mb-20 lg:mb-2">
          <a
            className="lg:text-sm text-2xl text-gray-600 mb-20 lg:mb-2"
          >
            Forgot your password?
          </a>
        </div>
        <div className="text-center mt-4">
          <p className="lg:text-sm text-2xl mb-20 lg:mb-2">New to VENDEE?</p>
          <a
            href="https://offer.VENDEE.com/?skipLandingPage=true&amp;utm_source=WebOrganic&amp;utm_medium=VENDEE.com&amp;utm_content=na&amp;utm_campaign=na&amp;utm_banner=na"
            className="w-full lg:text-xs text-2xl p-2 border border-black text-black font-semibold rounded"
          >
            <Link to="/Signup" >Create An Account Here</Link>
          </a>
        </div>
      </div>
      
      </div>
      <div className="text-center">
          {/* VENDEE Logo */}
          {/* You can replace the SVG code with the VENDEE logo SVG provided in the original HTML */}
          <h1 className="text-4xl font-bold p-20 lg:p-2"></h1>
          <h3 className="text-4xl font-bold p-20 lg:p-2"></h3>
        </div>
    </div>
  );
};

export default Login;
