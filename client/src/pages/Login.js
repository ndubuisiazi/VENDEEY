// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Login = () => {


  return (
    <div class="w-1/2 bg-grey-lighter min-h-1/2 justify-self-center self-center flex flex-col ">
            <div class="border border-gray-400 rounded shadow-md grid grid-cols-2 ">
                <div id="login" class=" bg-white px-6 py-8 text-black w-full ">
                    <h1 class="mb-8 text-3xl text-center">Log In</h1>
                    <input
                        type="text"
                        class="mb-4 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="email-login"
                        placeholder="Email address"
                        />

                    <input
                        type="password"
                        class="mb-4 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="password-login"
                        placeholder="Password"
                        />
                        
                      <button
                        type="button"
                        onclick="loginFormHandler()"
                        id="loginSubmit"
                        class="w-full inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Login 
                        </button>

                </div>
                <div class="bg-white px-6 py-8 text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        id="username-signup"
                        placeholder="User Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        id="email-signup"
                        placeholder="Email" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        id="password-signup"
                        placeholder="Password" />

                    <button
                        type="text"
                        class="w-full inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        id="submitSignup"
                        onclick="signupFormHandler()"
                        
                    >Create Account</button>

                </div>
            </div>
            <div class="w-1/2 bg-grey-lighter min-h-1/2 flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col mt-4 px-2 ">
                
                  
            </div>
        </div>

        </div>
        
  );
};


export default Login;
