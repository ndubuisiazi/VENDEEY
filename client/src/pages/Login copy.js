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
    <div id="auth" class="m-6 h-full w-full bg-grey-lighter items-center justify-self-center self-center flex flex-col">
              
                  <form onSubmit={handleFormSubmit} id="login" class=" w-full lg:w-1/3 h-1/2 lg:h-1/3 border border-gray-400 rounded shadow-md bg-white px-6 py-8 text-black mt-10 ">
                      <h1 class="lg:text-xl text-6xl text-center">Sign In</h1>
                      <input
                          class="mb-20 lg:mb-5 form-control block w-full px-4 py-2 lg:text-xl text-4xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Your email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          />
  
                      <input
                          class="mb-20 lg:mb-5 lg:text-xl form-control block w-full px-4 py-2 text-4xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="******"
                          name="password"
                          type="password"
                          value={formState.password}
                          onChange={handleChange}
                          />
                          
                        <button
                         className="btn btn-block btn-primary"
                         style={{ cursor: 'pointer' }}
                         type="submit"
                          class="cursor-pointer  w-full inline-block px-7 py-3 bg-black text-white font-medium lg:text-sm text-2xl leading-snug uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out">
                          Sign In 
                          </button>
                          <h1 class="mb-8 lg:text-lg text-4xl mt-6 text-center">Don't have an account? <Link to="/Signup" ><span className='text-blue-600 cursor-pointer'>Sign Up </span></Link></h1>
  
                  </form>
              
             
  
          </div>
  );
};

export default Login;
