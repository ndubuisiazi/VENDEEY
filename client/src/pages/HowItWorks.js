import React from 'react';
import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill } from 'react-icons/bs';
import { ImPencil2 } from 'react-icons/im';
import { GiVendingMachine } from 'react-icons/gi';
import { MdOutlineDoneOutline } from 'react-icons/md';

const HowItWorks = () => {
  return (
    <div className='w-full h-full flex flex-col col-span-5 items-center' style={{ color: "#388087" , background: "#F6F6F2"}}>
      <div className='flex  text-2xl m-10'>
        <p>Ready to take snacking to the next level? Follow these easy steps:</p>
      </div>
      <div id="icons" className='grid grid-cols-3 mt-10 ml-10 mr-10 items-start w-2/3 mb-2 justify-center'>
          <p className='flex justify-center text-4xl'>
            <ImPencil2/>
          </p>
          <p className='flex justify-center text-4xl'>
            <GiVendingMachine/>
          </p>
          <p className='flex justify-center text-4xl'>
            <MdOutlineDoneOutline className='text-red'/>
          </p>
      </div>
      <div className='grid grid-cols-3 m-20 items-start w-2/3'>
        <div className='flex flex-col justify-center m-2'>
          <p className='text-left text-2xl mb-2'>
            <BsFill1CircleFill />
          </p>
          <div className='flex flex-col justify-center m-2'>
            <p>
              Sign up for our service. You'll be snacking like a pro in no time.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center m-2'>
        <p className='text-left text-2xl mb-2'>
            <BsFill2CircleFill />
          </p>
          <p>
            Pick the vending machine of your dreams. We've got a whole fleet of them.
          </p>
        </div>
        <div className='flex flex-col justify-center m-2'>
          <p className='text-left text-2xl mb-2'>
            <BsFill3CircleFill className='text-red'/>
          </p>
          <p>
            Pick your favorite snacks! We've got everything from healthy options (for those who care about that
            sort of thing) to guilty pleasures (because let's face it, life's too short not to indulge).
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
