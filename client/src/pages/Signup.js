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
    <div id="auth" className="m-6 w-1/3 bg-grey-lighter min-h-1/2 col-span-5 justify-self-center self-center flex flex-col border border-gray-400 rounded shadow-md">
      <form onSubmit={handleFormSubmit} className="bg-white px-6 py-8 text-black w-full">
        <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
        <input 
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
        <input 
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input 
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder="Company Name"
          name="companyname"
          type="text"
          value={formState.companyname}
          onChange={handleChange}
        />
        <input 
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder="Phone #"
          name="phone"
          type="text"
          value={formState.phone}
          onChange={handleChange}
        />
        <input 
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder="********"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button
          className="w-full inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
          style={{ cursor: 'pointer' }}
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
