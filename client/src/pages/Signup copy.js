import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    companyname:'',
    phone:'',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="auth" className="w-full h-full flex flex-col items-center justify-center ">
       <div className="text-center">
          <h3 className="text-6xl lg:text-lg font-bold p-6 lg:p-4">Sign Up</h3>
        </div>
        <div className=' flex justify-center w-full h-full p-20 lg:p-0 ' >
        <div className="w-full lg:w-1/3 h-3/4 p-20 rounded-lg bg-white border border-gray-600 rounded shadow-md">
    <form onSubmit={handleFormSubmit} className="w-full lg:w-1/3 h-1/2 lg:h-1/3 border border-gray-400 rounded shadow-md bg-white px-6 py-8 text-black mt-10 ">
        <input 
          type="text"
          className="block border border-gray-600 w-full p-3 rounded mb-20 lg:mb-2 lg:text-lg text-4xl"
          placeholder="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
        <input 
          className="block border border-gray-600 w-full p-3 rounded mb-20 lg:mb-2 lg:text-lg text-4xl"
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input 
          className="block border border-gray-600 w-full p-3 rounded mb-20 lg:mb-2 lg:text-lg text-4xl"
          placeholder="Company Name"
          name="companyname"
          type="text"
          value={formState.companyname}
          onChange={handleChange}
        />
        <input 
          className="block border border-gray-600 w-full p-3 rounded mb-20 lg:mb-2 lg:text-lg text-4xl"
          placeholder="Phone #"
          name="phone"
          type="text"
          value={formState.phone}
          onChange={handleChange}
        />
        <input 
          className="block border border-gray-600 w-full p-3 rounded mb-20 lg:mb-2 lg:text-lg text-4xl"
          placeholder="********"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button
          className="w-full inline-block px-7 py-3 bg-black text-white font-medium lg:text-lg text-4xl leading-snug uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
          style={{ cursor: 'pointer',background: "#17252A" }}
          type="submit"  
        >
          Create Account
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;
