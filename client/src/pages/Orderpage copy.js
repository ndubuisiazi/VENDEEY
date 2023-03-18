import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PRODUCT_LIST } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { ADDITEM } from '../utils/mutations';
import { useStepperContext } from "../contexts/StepperContext"
import React, { useState } from "react";

const Home = () => {
  const { userData } = useStepperContext();
  const [clicked, setClicked] = useState(false);
  

  let {loading, data } = useQuery(PRODUCT_LIST, {
    variables: { category: userData.machinetype },
  });

    const productdata = data?.products || [];
    const [additem, { error}] = useMutation(ADDITEM);  
    const AddItem = async (productName,category,productId) => {
      try {
        setClicked(true);
        const { data } =await additem({
          variables: { 
            id: userData.id,
            productId: productId,
            productName: productName,
            category: category},
        });
  
      }
      
      catch (err) {
        console.error(err);
      }
    };    
    
    return (
      
      
			<div class= "relative h-4/5 w-full border flex items-center overflow-x-scroll">
        {Object.keys(productdata).map((key)=>(
          
            <img onClick={() => AddItem(productdata[key].productName,productdata[key].category,productdata[key].productId)} className=' w-1/5 inline-block p-2 cursor-pointer  hover:shadow-xl transition-shadow duration-300 ease-in-out' src={productdata[key].img} alt="product photo"/>
            
         
            
             
        ))}
        {clicked && (
        <div className="absolute inset-0 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18.707 3.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L8 12.586l9.293-9.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
        
       </div>


    //        <button
    //        class="px-4 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none">Add
    //  to cart</button>
    );
};

export default Home;