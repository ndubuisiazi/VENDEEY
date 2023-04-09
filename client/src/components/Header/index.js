import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../../utils/mutations';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { HiOutlineHome } from 'react-icons/hi2';
import { BsPersonFill, } from 'react-icons/bs';


import Auth from '../../utils/auth';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = Auth.loggedIn();
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
  };
  function DropdownItem(props){
    return( <div>test</div>)
  }

  const handleSelection = () => { setIsDropdownOpen(false);};

  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className='menu-container'>
      <div className='menu-trigger'>
      < BsPersonFill id='menu_img'/>
      </div>
      <div id='dropdown-menu'>
        <h3>test</h3>
        <ul>
          <DropdownItem/>
        </ul>

      </div>
      
    </div>
  );
};


export default Header;
