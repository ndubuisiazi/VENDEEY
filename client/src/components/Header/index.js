import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../../utils/mutations';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';



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
<div className=" h-48 w-full bg-black shadow flex items-center px-4 lg:h-16 " 
style={{ background: "#3AAFA9" }} 
// style={{ color: "black" }} 
>
<h2 className="font-medium lg:flex flex-grow lg:text-xl text-4xl">
          <Link to="/"><span className='ml-6 grow text-white text-6xl lg:text-2xl font-bold'>VENDEE</span></Link>
        </h2>
        {isLoggedIn ? (
          <div className='flex flex-row'>
            <h2 className="mr-6  text-white font-extrabold capitalize text-6xl lg:text-2xl">
              Hi {Auth.getProfile().data.username}!
            </h2>
            </div>
        ) : <button
        className="m-3 mr-4 text-white font-bold py-2 px-4 lg:text-xs text-4xl rounded-full"
        style={{ cursor: 'pointer' ,background: "#17252A" }}
        ><Link
        to="/login"
      >
        Get Started
      </Link>
      </button>}
        {isDropdownOpen ? (< CgClose className='text-white mr-2  text-6xl lg:text-4xl cursor-pointer font-bold' 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
        ):(< GiHamburgerMenu className='text-white mr-2  text-6xl lg:text-4xl cursor-pointer font-bold' 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onMouseOver={()=>{setIsDropdownOpen(true)}}/>) }
        
        
        <div 
        className={`dropdown-menu ${isDropdownOpen? 'active' : 'inactive'} rounded-lg bg-white border border-gray-200 rounded shadow-lg`} 
        
        onMouseLeave={()=>{setIsDropdownOpen(false)}}
        >
          {isDropdownOpen && (
            <div  
              className=""
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
      </div>
  );
};

export default Header;


