import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Users } from '../utils/queries';
import Auth from '../utils/auth';

function Home() {
  const [formState, setFormState] = useState({ address: '' });
  const { loading, data } = useQuery(Users, {
    variables: { id: Auth.getProfile().data._id },
  });

  const macdata = data?.users[0]?.orders || [];
  

  const mainDivRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const mainDivHeight = mainDivRef.current.clientHeight;
    listRef.current.style.height = `${mainDivHeight / 1.3}px`;
  }, []);

  return (
    <div
      id="MainDiv"
      ref={mainDivRef}
      className="col-span-4 h-full grid grid-rows-8  border-white bg-White mx-auto w-full pb-2"
    >
      <main className="h-full w-full flex-1 flex flex-col transition duration-500 ease-in-out overflow-y-auto">
        <div className="h-full w-full">
          <div className="mx-10 text-6xl lg:text-xl font-semibold text-gray-600">Dashboard</div>
          <div className="flex items-center justify-between text-gray-600 shadow-xl">
            <div className="mx-10">
              <span>
                <span className="text-green-500 mr-2 text-4xl lg:text-xl">{macdata.length}</span> Vending Machines;
              </span>
            </div>
          </div>
          <div id="ListOfLocations" ref={listRef} className="flex items-center justify-center w-full  overflow-y-scroll">
            {macdata.length === 0 ? (
              <div className="flex flex-col items-center justify-center m-5 text-2xl" style={{ color: '#388087' }}>
                <p className="text-center text-6xl lg:text-4xl">Welcome to VENDEE!</p>
                <p className="text-center text-4xl lg:text-xl mt-12 lg:mt-3">
                  Where your snack cravings and our vending machine technology meet in perfect harmony!
                </p>
               
                <p className="text-center text-4xl lg:text-xl mt-12 lg:mt-3">
                  Click the vending machine icon to get started.
                </p>
                <p className="text-6xl lg:text-4xl">Happy Snacking!</p>
              </div>
            ) : (
              <div className="w-10/12 h-full flex flex-col items-center">
                {macdata.map((order) => (
                  <Link key={order._id} to={`/Service/${order._id}`} className="w-full">
                    <div
                      className="mt-6 w-full flex flex-col items-center lg:flex-row px-4 py-4 lg:justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg"
                    >
                      <img
                        id="machineimg"
                        className="w-24 rounded-lg object-cover"
                        src={order.machineselection}
                        alt="Vending Machine" />
                <div className="ml-4 hidden lg:flex flex-col capitalize text-gray-600 dark:text-gray-400 items-center">
                  <span className="mt-2 text-black dark:text-gray-200 ">{order.machinetype}</span>
                </div>
                <div className="ml-12  capitalize text-gray-600 dark:text-gray-400 items-center ">
                  <span className='text-4xl lg:text-xl hidden lg:flex flex-col '>Location</span>
                  <span className="mt-2 text-black dark:text-gray-200 text-4xl lg:text-xs ">{order?.address[0]?.streetaddress}</span>
                </div>
               
          <div
						class="mr-8 flex flex-col capitalize text-gray-600
						dark:text-gray-400 justify-center">
						<Link to={`/Service/${order._id}`}> <button
						className="hidden lg:flex flex-col text-4xl lg:text-xs bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
						style={{ cursor: 'pointer' }}
						type="submit"
						>Service Request
						</button></Link>
					</div>

			</div>
      </Link>
))}</div>)}
            
</div>
		</div>

	</main>
</div>



  );
};

export default Home;
