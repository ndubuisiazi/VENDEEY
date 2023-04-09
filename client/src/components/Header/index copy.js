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

  const handleSelection = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <header className="h-48 bg-black shadow flex items-center px-4 lg:h-16" style={{ background: "#388087" }}>
        <h2 className="hidden font-medium lg:flex flex-grow lg:text-xl text-4xl">
          <Link to="/"><span className='ml-6 grow text-white font-bold'>VENDEE</span></Link>
        </h2>
        <div id='dropdown' className="text-left">
          <div className='text-white text-xl flex items-center mr-16'>
          {isLoggedIn ? (
          <div className='flex flex-row'>
            <h2 className="mr-6  dark:text-gray-300 font-extrabold capitalize lg:text-xl text-4xl">
              Hello {Auth.getProfile().data.username}
            </h2>
            <button
            className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 lg:text-xs text-4xl rounded-full"
            style={{ cursor: 'pointer' }}
            type="submit"
            onClick={() => NewOrder(Auth.getProfile().data._id)}
            >Add Service
          </button>
            </div>
        ) : null}
            < BsPersonFill className='mr-2 lg:text-xl text-4xl'/>
            <span className='cursor-pointer font-bold lg:text-xl text-4xl' onMouseOver={() => setIsDropdownOpen(!isDropdownOpen)} >My Account </span>
            
          </div>

          {isDropdownOpen && (
            <div  onMouseLeave={() => setIsDropdownOpen(!isDropdownOpen)}
              className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none duration-500"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
            {isLoggedIn ? (
              <div className="py-1 lg:text-2xl" role="none">
                <Link
                  to="/profile"
                  className="text-gray-700 block px-4 py-2 text-lg hover:bg-black hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={handleSelection}
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="text-gray-700 block px-4 py-2 text-lg hover:bg-black hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={handleSelection}
                >
                  Dashboard
                </Link>
                
                <button
                  onClick={(event) => {
                    handleLogout(event);
                    handleSelection();
                  }}
                  type="button"
                  className="text-gray-700 block w-full px-4 py-2 text-left text-lg hover:bg-black hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Sign out
                </button>
                
              </div>):(

              <Link
                  to="/Login"
                  className="text-gray-700 block px-4 py-2 text-4xl hover:rounded-md hover:text-black lg:text-xs"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={handleSelection}
                >
                  Log In
                </Link>)}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
