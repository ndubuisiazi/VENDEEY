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
      
      <div className='grid grid-row-3 lg:grid-cols-3  items-start w-2/3'>
        <div className='flex flex-row lg:flex-col justify-start m-10 lg:m-2 h-full'>
          <p className='text-left lg:text-2xl text-6xl mr-4'>
            <BsFill1CircleFill />
          </p>
          <div className='flex flex-row lg:flex-col justify-start '>
            <p className='h-full lg:text-lg text-4xl'>
              Sign up for our service. You'll be snacking like a pro in no time.
            </p>
          </div>
          <p className='flex justify-center text-4xl'>
            <ImPencil2/>
          </p>
        </div>
        <div className='flex flex-row lg:flex-col justify-start m-10 lg:m-2 h-full'>
        <p className='text-left lg:text-2xl text-6xl mr-4'>
            <BsFill2CircleFill />
          </p>
          <p className='h-full lg:text-lg text-4xl'>
            Pick the vending machine of your dreams. We've got a whole fleet of them.
          </p>
          <p className='flex justify-center text-4xl '>
            <GiVendingMachine/>
          </p>
        </div>
        <div className='flex flex-row lg:flex-col justify-start m-10 lg:m-2 h-full'>
          <p className='text-left lg:text-2xl text-6xl mr-4'>
            <BsFill3CircleFill className='text-red'/>
          </p>
          <p className='h-full lg:text-lg text-4xl'>
            Pick your favorite snacks! We've got everything from healthy options (for those who care about that
            sort of thing) to guilty pleasures (because let's face it, life's too short not to indulge).
          </p>
          <p className='flex justify-center text-4xl'>
            <MdOutlineDoneOutline className='text-red'/>
          </p>
        </div>
      </div>
      
          
      
      
    </div>
  );
};

export default HowItWorks;
