import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div >
    <div className='header'>
    <Link to="/" ><span className='p-2'>Vending Services</span></Link>
    <div className='header_search'>
        <input className='header_search_input' type="text"></input>
    </div> 
    {Auth.loggedIn() ? (
            <>
                <div className='header_nav'>
                <div className='header_option'>
                <span className='header_optionLionOne'>Hello {Auth.getProfile().data.username}!</span>
                </div>
                <div className='header_optionSecond'>
                <Link to="/Checkout" >
                <span id='header_optionLionTwo' class="material-symbols-rounded">shopping_cart</span><span id='header_basketCount'>0</span>
                </Link>

                </div>

                <div className='header_option'>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
                </div>
                </div>
            </>
          ) : (
            <>
              <div className='header_nav'>
                <div className='header_option'>
                <span className='header_optionLionOne'></span>
                </div>
                <div className='header_optionSecond'>
                

                </div>

                <div className='header_option'>
                <Link to="/Login" ><span className='header_optionLionThree'>Sign In </span></Link>
                <Link to="/Signup" ><span className='header_optionLionThree'> / Sign Up</span></Link>
                </div>
                </div>
            </>
          )} 
</div>
<div className='subHeader'>

</div>

</div>
  );
};

export default Header;
