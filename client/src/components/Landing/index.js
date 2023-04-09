import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../../utils/mutations';
import { RxCheck } from 'react-icons/rx';


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
    <div className="pb-2 lg:w-full " >
      
  <div id="home" className="w-full justify-start h-full items-center flex flex-col " >
        
  <div className=" flex flex-col mt-0 justify-start items-center m-1 w-full">
          <p className="w-full text-center lg:text-2xl text-6xl  text-white sm:mt-0">
          <span  className='text-white font-bold m-0' >Upgrade </span> <span style={{ color: "#17252A" }}>your snack game <br/>with our top-notch vending machines.</span>  
          </p>
          <div id="landingimg" className='shadow-2xl border-gray-400'
>
    <img
        className="w-11/12 h-auto sm:pl-10 mb-2"
        src="https://www.payrange.com/wp-content/uploads/2020/10/vending_bnr_side_img.png"
        alt="Your image description"
    />
</div>
          
          </div>
          <div className="flex flex justify-center  w-full sm:w-full lg:mt-0 " style={{ color: "#17252A" }}>
          
          <div className=" flex justify-center items-center w-full lg:w-2/3">
      <div className="w-full lg:w-3/4   pl-20 pr-20 ">
      <div className="text-center lg:text-2xl text-6xl  ">Say goodbye to empty machines & hello to satisfaction.</div>
      {/* <ul>
                <li className="mb-1 text-left lg:text-lg text-4xl text-black-700 flex flex-row"> <RxCheck className='mr-5'/> Regularly Stocked & Maintained.</li>
                <li className="mb-1 text-left lg:text-lg text-4xl text-black-700 flex flex-row"><RxCheck className='mr-5'/>Customizable Product Selection</li>
                <li className="mb-1 text-left lg:text-lg text-4xl text-black-700 flex flex-row"><RxCheck className='mr-5'/>Smart Technology Integration</li>
                <li className="mb-1 text-left lg:text-lg text-4xl text-black-700 flex flex-row"><RxCheck className='mr-5'/>Eco-Friendly Operations</li>
                <li className="mb-1 text-left lg:text-lg text-4xl text-black-700 flex flex-row"><RxCheck className='mr-5'/>Reliable Maintenance & Support</li>
              </ul> */}
              <div className="text-center">
                          
                          <Link to="/HowItWorks">
                          <button
                                className="m-3 mr-4 text-white font-bold py-2 px-4 lg:text-xs text-4xl rounded-full"
                                style={{ cursor: 'pointer' ,background: "#17252A" }}
                                type="submit"
                                >How It Works</button>      
                             </Link>
                                
                                </div>
      </div>
          
           
              
          
              
              </div>
              </div>
              </div>
			  </div>



  );
};

export default Homepage;
