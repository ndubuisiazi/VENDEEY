import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../../utils/mutations';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { HiOutlineHome } from 'react-icons/hi2';
import { GiVendingMachine } from 'react-icons/gi';


import Auth from '../../utils/auth';

const Nav = (props) => {

	let navigate = useNavigate();
  
  
  const [createOrder, { error }] = useMutation(CREATE_ORDER);

  const NewOrder = async (techNum) => {
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

    <div className="col-span-1 border text-6xl lg:text-xl shadow-xl  lg:h-full items-center justify-center lg:justify-start flex flex-row lg:flex-col "style={{ backgroundColor: "#F8F6F2"}}>  
    <div className='flex flex-row lg:flex-col items-center'>
            <Link to="/"><div className='flex flex-row items-center hover:opacity-50 m-4 lg:m-1'>
              <HiOutlineHome className='text-gray-700 mb-4 mt-4 mr-1 opacity-100 cursor-pointer text-4xl lg:text-2xl' id='navicons' /> 
              <span className='text-2xl lg:text-xs'> Home</span>
            </div></Link>
            <Link to="/profile">
            <span className='flex flex-row items-center hover:opacity-50 m-4 lg:m-1'>
              <CgProfile className='text-gray-700 mb-4 mt-4 mr-1 opacity-100 cursor-pointer text-4xl lg:text-2xl' id='navicons' />
              <span className='text-2xl lg:text-xs'> Profile</span>
            </span>
            </Link >
            <span className='flex flex-row items-center hover:opacity-50 m-4 lg:m-1' onClick={() => NewOrder(Auth.getProfile().data._id)}>
              <GiVendingMachine className='text-gray-700 text-left mr-2 text-4xl lg:text-2xl mb-4 mt-4 opacity-100 cursor-pointer ' id='navicons'/>
              <span className='text-2xl lg:text-xs text-center cursor-pointer'> New</span>
            </span>
            <span className='flex flex-row items-center cursor-pointer hover:opacity-50 m-4 lg:m-1' onClick={(event) => {Auth.logout()}}>
              <CgLogOut className='text-gray-700 mb-4 mt-4 mr-1 opacity-100 cursor-pointer text-4xl lg:text-2xl ' id='navicons'/>
              <span className='text-2xl lg:text-xs'> Logout</span>
            </span>
            </div>
      </div>
			



  );
};

export default Nav;
