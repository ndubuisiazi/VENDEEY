import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {

  return ( 
    <div id="homeContainer" class="grid grid-rows-3 items-center">
      <div class="self-center text-xs sm:text-2xl justify-self-center">We Provide Delicious & Customizable Drinks and Snacks For Your Facility At No Cost To You.</div>
      <div class="grid items-center">
        <div class="flex flex-row self-center justify-self-center">
                
                <img class="" id="imgs" src="https://snacknation.com/wp-content/uploads/2021/09/bars_shadow.png"></img>
                <img id="imgs" src="https://snacknation.com/wp-content/uploads/2021/09/chips_shadow.png"></img>
                <img id="imgs" src="https://snacknation.com/wp-content/uploads/2021/09/granola_shadow.png"></img>
          </div>
          <div class="flex flex-row self-center justify-self-center">
                    <img id="imgs" src="https://snacknation.com/wp-content/uploads/2021/09/classics_shadow.png"></img>                    
                    <img id="imgs" src="https://snacknation.com/wp-content/uploads/2021/09/nuts_trial_milk_shadow.png"></img>
                    <img id="imgs" src="https://snacknation.com/wp-content/uploads/2021/09/cookies_shadow.png"></img>
          </div>
          </div>
    </div>  
      );
};

export default Home;