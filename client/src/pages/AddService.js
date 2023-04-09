import React, { useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_MACHINE } from '../utils/mutations';
import { useStepperContext } from "../contexts/StepperContext"

import Auth from '../utils/auth';

const AddService = (props) => {
  const { userData, setUserData } = useStepperContext();
  let { id } = useParams();

  const [formState, setFormState] = useState({ machinetype: ''});
  const [addMachine, { error, data }] = useMutation(ADD_MACHINE);
  let navigate = useNavigate();

  const [buttonClicked, setButtonClicked] = useState(
    {Drinks:false,
      Snacks:false
    });

  const MachineSelection = async (machinetype) => {
    const { name, value,idName, idValue } = {
      name:"machinetype", 
      value:machinetype, 
      idName:"id", 
      idValue:id
    };
    setUserData({ ...userData, [name]: value, [idName]: idValue });
    let checked=true;

       
    
    try {
      const { data } =await addMachine({
        variables: { id, machinetype },
      });
      
      // console.log(Auth.getProfile().data._id)
      // navigate(`/MachineSelection/${id}/${machinetype}`);
    } catch (err) {
      console.error(err);
    }
    console.log(userData)
    machinetype=="Drinks" ? setButtonClicked({
      Drinks:true,
    }):setButtonClicked({
      Snacks:true
    })
    
  };

  return (
    <div className="justify-center p-12 h-full w-2/3 flex-1 flex flex-row  transition duration-500 ease-in-out overflow-y-auto">
      <button
        className={`m-2 w-full inline-block px-7 mt-4 py-3 text-white font-large text-sm leading-snug uppercase  focus:shadow-lg focus:ring-0  active:shadow-lg transition duration-150 ease-in-out ${buttonClicked.Drinks ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-700 hover:shadow-lg'}`}
        onClick={() => MachineSelection("Drinks")}
        style={{ outline: "none" }}
      >
        Drinks
      </button>
      <button 
        className={`m-2 w-full inline-block px-7 mt-4 py-3  text-white font-large text-sm leading-snug uppercase  focus:shadow-lg focus:ring-0  active:shadow-lg transition duration-150 ease-in-out ${buttonClicked.Snacks ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-700 hover:shadow-lg'}`}
        onClick={() => MachineSelection("Snacks")}
        style={{ outline: "none" }}
      >
        Snacks
      </button>
    </div>
  );
};

export default AddService;
