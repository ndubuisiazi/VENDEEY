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
    
    
  return (
    <div id="home" className="w-full flex flex-col lg:flex-row md:flex-col sm:flex-col" >
               <div className="w-full flex overflow-hidden">
	
               <main
		class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		duration-500 ease-in-out overflow-y-auto">
		<div class="mx-10 my-2">
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