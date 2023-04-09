import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { MachineProfile } from '../../utils/queries';
import { DELETITEM } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Orderpage from '../../pages/Orderpage';
import ServiceRequest from '../../components/ServiceRequest/index';
import {CiSquareRemove } from 'react-icons/ci';

const Machineprofile = () => {
  const [favoriteEdit, setfavoriteEdit] = useState(false);
  const { id } = useParams();
  const [deleteItem, { error }] = useMutation(DELETITEM);

  const deleteI = async (id, productId) => {
    try {
      await deleteItem({
        variables: {
          id,
          productId: productId,
        },
      });
      // Refetch the data after the item has been deleted
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const { loading, data, refetch } = useQuery(MachineProfile, {
    variables: { orderId: id, userId: Auth.getProfile().data._id },
  });

  const macdata = data?.orders || [];
  const macdataAddress = data?.orders.address[0] || [];
  const itemslist = data?.orders.items || [];
  
  console.log(macdata)
  const mainDivRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const mainDivHeight = mainDivRef.current.clientHeight;
    listRef.current.style.height = `${mainDivHeight / 1.2}px`;
  }, []);
  
  const handleButtonClick = () => {
    setfavoriteEdit((prevState) => !prevState);
    refetch();
  };

  return (

    <div id='MainDiv' ref={mainDivRef} className="col-span-4 h-full grid grid-rows-8  border-white bg-White mx-auto w-full pb-2" >
      <main className="h-full w-full flex-1 flex flex-col transition duration-500 ease-in-out overflow-y-auto" >
        <div className="h-full w-full">
          <div className="mx-10 text-6xl lg:text-xl font-semibold text-gray-600">
          {macdataAddress.streetaddress} {macdataAddress.city},{macdataAddress.state},{macdataAddress.zip}
          </div>
          <div className=" flex items-center justify-between text-gray-600 shadow-xl">
            <div className="mx-10">
              <span> 
                <span className="text-green-500 mr-2 text-4xl lg:text-xl">{macdata.machinename}</span >
                 
              </span>
            </div>
          </div>
          <div id='ListOfLocations' ref={listRef} className="flex items-center justify-center w-full  overflow-y-scroll">
          <div className='w-5/6 h-full flex flex-col lg:flex-row items-center' >
       
          <div  className="w-full lg:w-1/4 m-3 h-full flex flex-col">
      <div className='mt-6 mb-1 text-left w-full'>tbd</div>     
        <div id="machineprofile2" className=" flex flex-col items-center lg:flex-row px-4 py-4 lg:justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg">
        
        <img className='profileImage'   src={macdata.machineselection}></img>
			  </div>
      </div>
      <div  className="w-3/4 h-full flex flex-col">
      <div className='mt-6 mb-1 text-left w-full'>Favorites</div>     
     
      <div id="machineprofile" className=" flex flex-col items-center lg:flex-row px-4 py-4 lg:justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg" >
    <div className="relative h-4/5 w-full flex flex-col items-center overflow-x-scroll">
      {favoriteEdit === false ? (
        <div className="relative h-4/5 w-full flex items-center overflow-x-scroll">
          {itemslist.map((item, index) => (
            <div key={index} className="w-1/4 flex-none grid grid-rows-2 inline-block p-2 justify-center items-center flex flex-col">
              <img className="w-2/5 transition-shadow duration-300 ease-in-out justify-self-center" src={item.img} />
              
              <span className='text-black  flex text-center text-sm  items-center justify-center onClick={() => deleteI(id, item.productId)}'>{item.productName}<CiSquareRemove onClick={() => deleteI(id, item.productId)} className='text-xl cursor-pointer text-black hover:text-red-500' /></span>
            </div>
          ))}
        </div>
      ) : (
        <Orderpage orderId={id} machinetype={macdata.machinetype} />
      )}
      <div>
      <button
  onClick={handleButtonClick}
  className="m-3 mr-4 text-white font-bold py-2 px-4 lg:text-xs text-4xl rounded-full"
  style={{ cursor: 'pointer', background: '#17252A' }}
>
  {favoriteEdit === false ? 'add items' : 'save'}
</button>

      </div>
      
    </div>
    
  </div>
  </div>
  <div className=" flex flex-col items-center lg:flex-row px-4 py-4 lg:justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg" >
  <ServiceRequest />
  </div>
  
  </div>
  </div>
  </div>
  </main>
  </div>



  )}

export default Machineprofile;
