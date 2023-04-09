import React, { useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_MACHINE } from '../utils/mutations';



import Auth from '../utils/auth';

const AddService = (props) => {
  let { id } = useParams();

  const [formState, setFormState] = useState({ machinetype: ''});
  const [addMachine, { error, data }] = useMutation(ADD_MACHINE);
  let navigate = useNavigate();

 


  const MachineSelection = async (machinetype) => {
   
    
    try {
      const { data } =await addMachine({
        variables: { id, machinetype },
      });
      
      // console.log(Auth.getProfile().data._id)
      navigate(`/MachineSelection/${id}/${machinetype}`);
    }
    catch (err) {
      console.error(err);
    }
    
  };

  return (

    <div id="home" className="w-full flex flex-col lg:flex-row md:flex-col sm:flex-col" >
    {Auth.loggedIn() ? (
            <>
            
            <div className="w-full flex overflow-hidden">
	
	<main
		className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		duration-500 ease-in-out overflow-y-auto">
		<div id="auth" class="m-6 w-1/3 bg-grey-lighter min-h-1/2 justify-self-center self-center flex flex-col border border-blue-700 rounded shadow-md">
    <div className=" bg-white px-6 py-8 text-black w-full ">

      
      <button className="w-full inline-block px-7 mt-4 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out" onClick={() => MachineSelection("Drinks")}>
            Drinks 
          </button>
          <button className="w-full inline-block px-7 mt-4 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out" onClick={() => MachineSelection("Snacks")}>
            Snacks 
          </button>

		</div>
    </div>
	</main>

</div>
               
            </>
          ) : (
            <>
              <div className="flex flex justify-center m-1 w-full sm:w-full lg:justify-end">
              <div className=" w-3/4">
              <p className="text-xl font-bold text-black-700 lg:text-5xl md:text-3xl sm:text-2xl font-bold">
                Customizable Drinks & Snacks For Your Space.
              </p>
              <p className="text-xl font-bold text-black-700 lg:text-3xl md:text-2xl sm:text-xl font-bold">
                With No Up-Front Cost!
              </p>
              
              <ul className="text-xs text-black-700  sm:text-base">
                <li >Online maintenance and service request portal</li>
                <li>24/7 remote monitoring</li>
                <li>All payment options</li>
              </ul>
              <div className="mt-5 text-center">
                          <Link>
                          <button
                          className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                          style={{ cursor: 'pointer' }}
                          type="submit"
                          >Start Order
                          </button>
                          </Link>
                    <Link to="/HowItWorks">
                    <button
                          className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                          style={{ cursor: 'pointer' }}
                          type="submit"
                          >How It Works</button>      
                       </Link>
                          
                          </div>
              </div>
              </div>
              <div className="flex flex justify-center mt-5 lg:justify-start m-1 w-full">
              <img className="w-1/4 lg:w-1/2 md:w-1/3 sm:w-1/4"  src="https://cdn.imweb.me/thumbnail/20211201/045722fb651a4.png"></img>
              </div>
              
              
            </>
          )} 
</div>



  );
};

export default AddService;
