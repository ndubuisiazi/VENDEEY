import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PRODUCT_LIST } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { ADDITEM } from '../utils/mutations';

const Home = () => {
  
  let { machinetype }= useParams()
  let { id } = useParams();

  let {loading, data } = useQuery(PRODUCT_LIST, {
    variables: { category: machinetype },
  });

    const productdata = data?.products || [];
    const [additem, { error}] = useMutation(ADDITEM);  
    const AddItem = async (productName,category,productId) => {
      try {
        const { data } =await additem({
          variables: { 
            id: id,
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
      
      <div id="home" className="w-full flex flex-col lg:flex-row md:flex-col sm:flex-col" >
               <div className=" w-full flex overflow-hidden">
	
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
			<div class= "w-full h-1/2 flex flex-wrap content-around justify-center flex-row">
        {Object.keys(productdata).map((key)=>(
          <div onClick={() => AddItem(productdata[key].productName,productdata[key].category,productdata[key].productId)} class="w-1/5 m-8 items-center max-w-sm flex flex-col rounded overflow-hidden cursor-pointer">
            <img id="imgs" class="h-full" src={productdata[key].img} alt="product photo"></img>
            <div class="px-4 ">
            <div class="font-bold text-base ">{productdata[key].productName}</div>
            </div>
            <div class="px-4 pt-4 pb-2">
            </div>
            </div>
        ))

        }
       </div>


		</div>

	</main>

</div>
      </div>
    //        <button
    //        class="px-4 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none">Add
    //  to cart</button>
    );
};

export default Home;