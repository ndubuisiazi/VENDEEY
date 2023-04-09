import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { MACHINE_TYPE, Orders } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { ADD_MACHINE_TYPE } from '../utils/mutations';
import { useStepperContext } from "../contexts/StepperContext"


function MachineTypeSelection() {
  const [Clicked, setClicked] = useState("Test");
  const { userData, setUserData } = useStepperContext();
  let id  = userData.id;
  let machinetype = userData.machinetype
  let navigate = useNavigate();
  

  const [addMachineType, { error}] = useMutation(ADD_MACHINE_TYPE);  

  let {loading, data } = useQuery(MACHINE_TYPE, {
      variables: { type: machinetype },
    });

    const MachineTypeFunc = async (machineselection) => {
      setClicked(machineselection.macname) 
      console.log(Clicked)
        try {
          const { data } =await addMachineType({
            variables: { id, machineselection:machineselection.img, machinename: machineselection.macname},
            
          });
          
        
        }
        
        
        catch (err) {
          console.error(err);
        }
      };
      const macdata = data?.machinetype || [];
    
    
  return (
    <div className='relative h-3/5 w-full flex items-center overflow-x-scroll'>
        
          {Object.keys(macdata).map((key)=>(
          <div className={`hover:shadow-xl w-4/5  ${Clicked==macdata[key].name ? 'border-4 border-green-500' : ''}`}>
          <div style={{ textAlign: "center" }}>
            <img
              className='h-48 inline-block p-2 cursor-pointer transition-shadow duration-300 ease-in-out '
              src={macdata[key].img}
              alt='/'
              onClick={() => MachineTypeFunc({img:macdata[key].img,macname:macdata[key].name})}
            />
          </div>
          <ul className='text-xs text-center mt-0'>
            <li>{macdata[key].name}</li>
            <li><span className='mr-2'>Height:{macdata[key].Height.slice(0,3)}cm</span> <span>Width:{macdata[key].Width.slice(0,3)}cm</span></li>
          </ul>
          </div>
          ))}
          
      </div>
  
               
	



    
    


      
      )}


export default MachineTypeSelection;
