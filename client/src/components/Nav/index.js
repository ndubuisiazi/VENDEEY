import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../../utils/mutations';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { HiOutlineHome } from 'react-icons/hi2';
import { GiVendingMachine } from 'react-icons/gi';
import { FaQuestion } from 'react-icons/fa';


import Auth from '../../utils/auth';

const Nav = (props) => {

	let navigate = useNavigate();
  
  
  const [createOrder, { error }] = useMutation(CREATE_ORDER);

  const NewOrder = async (techNum) => {
    console.log("techNum")
	console.log(techNum)
    
    try {
		const { data } = await createOrder({
        variables: { "id":techNum },
      });
      console.log()
	  navigate(`/MachineType/${data.createOrder.orders.slice(-1)[0]._id}`);
    }
     
    catch (err) {
      console.error(err);
    }

	console.log(Auth.getProfile().data)
  };


  return (

    <div className="col-span-1 border text-xl shadow-xl h-full items-center flex flex-col "style={{ backgroundColor: "#F8F6F2",color: "#388087" }}>  
            <Link to="/"><div className='flex flex-row items-center hover:opacity-50'>
              <HiOutlineHome className='mb-4 mt-4 mr-1 opacity-100 cursor-pointer ' /> 
              <span className='text-xs'> Home</span>
            </div></Link>
            <Link to="/profile">
            <span className='flex flex-row items-center hover:opacity-50'>
              <CgProfile className='mb-4 mt-4 mr-1 opacity-100 cursor-pointer'/>
              <span className='text-xs'> Profile</span>
            </span>
            </Link >
            <span className='flex flex-row items-center hover:opacity-50' onClick={() => NewOrder(Auth.getProfile().data._id)}>
              <GiVendingMachine className='text-left mr-2 text-2xl mb-4 mt-4 opacity-100 cursor-pointer '/>
              <span className='text-xs text-center cursor-pointer'> New</span>
            </span>
            <span className='flex flex-row items-center cursor-pointer hover:opacity-50' onClick={(event) => {Auth.logout()}}>
              <CgLogOut className='mb-4 mt-4 mr-1 opacity-100 cursor-pointer '/>
              <span className='text-xs'> Logout</span>
            </span>
            <Link to="/HowItWorks">
            <span className='flex flex-row items-center'>
              <FaQuestion className='mb-4 mt-4 mr-1 opacity-100 cursor-pointer hover:opacity-50'/>
              
            </span>
            </Link >
      </div>
			



  );
};

export default Nav;
