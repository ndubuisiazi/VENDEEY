import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../utils/mutations';


import Auth from '../utils/auth';

const Home = (props) => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [formState, setFormState] = useState({ address: ''});
  const [order, { error, data }] = useMutation(CREATE_ORDER);

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
      const { data } = await order({
        variables: { ...formState },
      });

      console.log(data)
      window.location.href="/Orderpage"
    } catch (e) {
      console.error(e);
    } 
    // clear form values
    setFormState({
      address: ''
    });
  };

  return (

    <div class="m-6 w-1/2 bg-grey-lighter min-h-1/2 justify-self-center self-center flex flex-col  rounded shadow-md" >
    {Auth.loggedIn() ? (
            <>
               <div class="m-6 w-1/2 bg-grey-lighter min-h-1/2 justify-self-center self-center flex flex-col border border-gray-400 rounded shadow-md">
              
              <form onSubmit={handleFormSubmit} id="order" class=" bg-white px-6 py-8 text-black w-full ">
                  <h1 class="mb-8 text-3xl text-center">Start Order</h1>
                  <input
                      class="mb-4 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Enter Your Address"
                      name="address"
                      type="text"
                      onChange={handleChange}
                      />

                      
                    <button
                     className="btn btn-block btn-primary"
                     style={{ cursor: 'pointer' }}
                     type="submit"
                      class="w-full inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out">
                      Go 
                      </button>

              </form>
          
         

      </div>
            </>
          ) : (
            <>
              <div class="">
              We Provide Delicious & Customizable Drinks and Snacks For Your Facility At No Cost To You.
              <img class="" id="imgs" src="https://snacknation.com/wp-content/uploads/2021/09/bars_shadow.png"></img>
                </div>
            </>
          )} 
</div>



  );
};

export default Home;
