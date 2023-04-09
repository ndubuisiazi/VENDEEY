import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCT_LIST } from "../utils/queries";
import { ADDITEM } from "../utils/mutations";
import { useStepperContext } from "../contexts/StepperContext";

const ProductItem = ({ product, handleClick, clicked, orderId }) => (
  <div
    key={product.productId}
    className="w-1/4 flex-none grid grid-rows-2 inline-block p-2 cursor-pointer justify-center items-center flex flex-col"
  >
    <img
      onClick={() =>
        handleClick(product.productName, product.category, product.productId, product.img, orderId)
      }
      className="w-2/5 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-self-center"
      src={product.img}
      alt="product photo"
    />
    <span
      className={`flex text-center text-sm ${
        clicked.find(item => item.name === product.productName)
          ? "bg-green-500 text-white"
          : ""
      } items-center justify-center`}
    >
      {product.productName}
    </span>
  </div>
);


const Orderpage = ({ orderId, machinetype }) => {
  const { userData } = useStepperContext();

  console.log(machinetype)
  const { data } = useQuery(PRODUCT_LIST, {
    variables: { category: userData.machinetype ?? machinetype },
  });
  const [clicked, setClicked] = useState([]);
  
  const productData = data?.products || [];
  const [addItem, { error }] = useMutation(ADDITEM);
  const handleClick = (productName, category, productId,img,orderId) => {
    setClicked(prevState => {
      if (prevState.find(item => item.name === productName)) {
        return prevState.filter(item => item.name !== productName);
      } else {
        return [...prevState, { name: productName }];
      }
    });
    addItem({
      variables: {
        id: userData.id ?? orderId,
        productId: productId,
        productName: productName,
        category: category,
        img:img
      },
      
    }).catch(err => console.error(err));
    // console.log(orderId)
    
  };

  return (
    <div className="relative h-4/5 w-full flex items-center overflow-x-scroll">
    {productData.map(product => (
      <ProductItem
        key={product.productId}
        product={product}
        handleClick={handleClick}
        clicked={clicked}
        orderId={orderId}
      />
    ))}
  </div>
  );
};

export default Orderpage;
