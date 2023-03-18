import { useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { PRODUCT_LIST } from '../utils/queries';
import { ADDITEM } from '../utils/mutations';
import { useStepperContext } from "../contexts/StepperContext";

const Home = () => {
  const { userData } = useStepperContext();
  const { loading, data } = useQuery(PRODUCT_LIST, {
    variables: { category: userData.machinetype },
  });
  const [clicked, setClicked] = useState([]);
  const [thing, setFriend] = useState("");
  const productData = data?.products || [];
  const [addItem, { error }] = useMutation(ADDITEM);  

  const handleClick = (productName, category, productId) => {
    setFriend(productName);
    setClicked(prevState => {
      if (prevState.find(item => item.name === productName)) {
        return prevState.filter(item => item.name !== productName);
      } else {
        return [...prevState, { name: productName }];
      }
    });
    addItem({
      variables: { 
        id: userData.id,
        productId: productId,
        productName: productName,
        category: category
      },
    }).catch(err => console.error(err));
  };

  return (
    <div className="relative h-4/5 w-full border flex items-center overflow-x-scroll">
      {productData.map(product => (
        <div key={product.productId} className="w-1/4 flex-none grid grid-rows-2 inline-block p-2 cursor-pointer justify-center items-center flex flex-col">
          <img onClick={() => handleClick(product.productName, product.category, product.productId)} className='w-2/5 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-self-center' src={product.img} alt="product photo" />
          <span className={`flex text-center text-sm ${clicked.find(item => item.name === product.productName) ? 'bg-green-500 text-white' : ''} items-center justify-center`}>
            {product.productName}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Home;
