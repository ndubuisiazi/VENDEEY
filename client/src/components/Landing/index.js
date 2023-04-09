import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../../utils/mutations';


import Auth from '../../utils/auth';

const Homepage = (props) => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [formState, setFormState] = useState({ address: ''});
  const [order, { error, data }] = useMutation(CREATE_ORDER);

  // console.log(Auth.getProfile().data._id)
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
    <div className="h-col-span-5 border-white mx-auto w-full bg-white pb-2  lg:w-full text-black " style={{ color: "#388087" }}>
  <div id="home" className="w-full justify-start h-full items-center flex flex-col lg:justify-center " >
              <div className="flex flex justify-center m-1 w-full sm:w-full lg:mt-0 mt-20">
              <div className=" w-3/4">
              <p className="text-center lg:text-2xl text-4xl font-bold text-black-700 font-bold sm:mt-5">
              Upgrade your snack game with our top-notch vending machines. 
              </p>
           
              
              <p className="text-center lg:text-lg text-2xl text-black-700 ">
              Fully stocked and accepting all major forms of payment including hugs and high fives (just kidding).
              </p>
              <p className="text-center lg:text-lg text-2xl text-black-700 mt-2 ">
              Say goodbye to empty machines and hello to satisfaction.
              </p>
              <p className="text-center lg:text-lg text-4xl text-black-700 mt-2 ">
              Try VENDEE today!
              </p>
              <div className="text-center">
                          
                    <Link to="/HowItWorks">
                    <button
                          className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full curser lg:mt-0 mt-10 lg:text-xs text-4xl"
                          style={{ background: "#388087" }}
                          type="submit"
                          >How It Works</button>      
                       </Link>
                          
                          </div>
              </div>
              </div>
              <div className="flex flex justify-center mt-5 justify-start lg:items-center m-1 w-full">
              <img className="w-2/3 lg:w-1/5 sm:pl-10"  src="https://cdn.imweb.me/thumbnail/20211201/045722fb651a4.png"></img>
              </div>
              </div>
			  </div>



  );
};

export default Homepage;
