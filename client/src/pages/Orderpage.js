import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PRODUCT_LIST } from '../utils/queries';

const Home = () => {

    const { loading, data } = useQuery(PRODUCT_LIST);
    const productdata = data?.products || [];
    console.log(data)
    
    return (
      
      <div class= "w-full h-1/2 flex flex-wrap content-around justify-center flex-row">
        {Object.keys(productdata).map((key)=>(
          <div class="w-1/5 m-8 items-center max-w-sm flex flex-col rounded overflow-hidden ">
            <img id="imgs" class="h-full" src={productdata[key].img} alt="product photo"></img>
            <div class="px-4 ">
            <div class="font-bold text-base ">{productdata[key].productName}</div>
            </div>
            <div class="px-4 pt-4 pb-2">
             {/* <button
                  class="px-4 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none">Add
            to cart</button> */}
            </div>
            </div>
        ))

        }
       </div>
       
    );
};

export default Home;