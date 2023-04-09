import React, { useState } from 'react';
import { Users } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { MdEditNote, MdAddCircle } from 'react-icons/md';
import { UPDATE_USER } from '../../utils/mutations';

const CompanyProfile = () => {
  const [editState, setEditState] = useState({
    edit: "none",
    editWindow: ""
  });

  const handleEditState = async () => {
    setEditState({
      editWindow: "none"
    });
    console.log(editState);
  };

  const [formState, setFormState] = useState({
    updateUserId: Auth.getProfile().data._id,
    username: '',
    email: '',
    companyname: '',
    phone: '',
  });

  const [updateUser, { error, data }] = useMutation(UPDATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;


    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formState.companyname)
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // setEditState({
      //   edit: "none",
      // });
      const { data } = await updateUser({
        variables: {
          updateUserId: Auth.getProfile().data._id,
          input: {
            username:formState.username,
            companyname:formState.companyname,
            // email:"",
            phone:formState.phone,
          },
        },
        
      });
      // console.log(formState.companyname)
      // console.log(formState.phone)
      // console.log(macdata)
      
    } catch (error) { 
      console.error(error);
    }

    setFormState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    window.location.reload()
  };
  
  

  const { loading, data: usersData } = useQuery(Users, {
    variables: { id: Auth.getProfile().data._id },
  });
  const macdata = usersData?.users[0] || [];

  

  return (
    <div className="w-full flex justify-center">
            <div className="w-full grid p-10" style={{ display: editState.editWindow }}>
      <div className='flex items-center pb-2'>
      <div class="rounded-full bg-black relative flex justify-center items-center text-white h-20 w-20">
        <h1>{macdata.username}</h1>
        </div>
      <h1 className="text-2xl font-medium text-black p-2" >{macdata.companyname}</h1>
      </div>
    <div className="border-b h-auto pb-2">
      
      </div>
      <div className="text-xl font-medium text-black pb-2">{macdata.companyname ? macdata.companyname : "Update Company Name"}</div>
      <div className='pb-2'>
      <p class="text-gray-500">Phone:
      <a href={`tel:${macdata.phone}`} class="text-gray-500 divide divide-digits pl-2">
      {macdata.phone ? macdata.phone : "Update Phone Number"}
      </a>
      </p>
      </div>

        <div className='pb-2'><span className='text-gray-500' >Email:</span><span className="text-gray-500 pl-2"> {macdata.email ? macdata.email:"TBD"}</span></div>
        <MdEditNote onClick={handleEditState} className='opacity-100 cursor-pointer hover:opacity-50' />
        </div>

        <form style={{ display: editState.edit }}
        onSubmit={handleFormSubmit} 
        className="bg-white px-6 py-8 justify-center flex-col text-black w-2/5">
        <label>
          Username
        <input 
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder={macdata.username}
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
        </label>
        <label>
          Email
        <input 
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        </label>
        <label>
        Company Name
        <input 
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder="Company Name"
          name="companyname"
          type="text"
          value={formState.companyname}
          onChange={handleChange}
        />
        </label>
        <label>Phone Number
        <input 
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder="Phone #"
          name="phone"
          type="number"
          value={formState.phone}
          onChange={handleChange}
        />
        </label>
        <button
          className="w-full inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
          style={{ cursor: 'pointer' }}
          type="submit"
        >
          Save
        </button>
      </form>
        
      </div>
    
  );
};

export default CompanyProfile;


{/* <div className="border-b h-auto">
      <h1 className="text-2xl font-medium text-black" >{Auth.getProfile().data.username}</h1>
      </div>
      
        <div className="text-xl font-medium text-black">Acme Corporation</div>
        <div><p className="text-gray-500">Phone: (123) 456-7890</p></div>
        <div><p className="text-gray-500">Email: info@acmecorp.com</p></div> */}