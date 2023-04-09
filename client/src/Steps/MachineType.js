import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { MACHINE_TYPE, Orders } from '../utils/queries';
import { Select_Machine } from '../utils/mutations';


function MachineSelection() {
  let { id } = useParams();

  let { machineselection }= useParams()
  
//   const [addUser, { error, data }] = useMutation(ADD_USER);
    

  let {loading, data } = useQuery(MACHINE_TYPE, {
      variables: { type: machineselection },
    });
    const macdata = data?.machinetype || [];
    console.log(macdata)
    
  return (
    <div id="home" className="w-full flex flex-col lg:flex-row md:flex-col sm:flex-col" >
               <div className="w-full flex overflow-hidden">
	
               <main
		class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		duration-500 ease-in-out overflow-y-auto">
		<div class="mx-10 my-2">

		
<ol class="flex items-center w-full m-4">
    <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </span>
    </li>
    <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </span>
    </li>
    <li class="flex items-center w-full">
        <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
    </li>
</ol>

			<div
				class="pb-2 flex items-center justify-between text-gray-600
				dark:text-gray-400 border-b dark:border-gray-600">
				


			</div>
			<div
				class="mt-6 flex justify-between text-gray-600 dark:text-gray-400">

			</div>
			<div
          class="mt-6 flex justify-around flex-wrap text-gray-600 dark:text-gray-400">
            {Object.keys(macdata).map((key)=>(
        
<a href="#" class="w-2/5 m-3 flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={macdata[key].img} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{macdata[key].name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Height: {macdata[key].Depth}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Height: {macdata[key].Height}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Height: {macdata[key].Width}</p>
    </div>
</a>
  ))}
  
    </div>


		</div>

	</main>

</div>
      </div>)}


export default MachineSelection;


{/* <a href="#" class="w-2/5 m-3 flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={macdata[key].img} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{macdata[key].name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Height: {macdata[key].Depth}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Height: {macdata[key].Height}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Height: {macdata[key].Width}</p>
    </div>
</a> */}