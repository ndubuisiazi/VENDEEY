import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADDADDRESS } from '../../utils/mutations';


const AddressForm = () => {
  let { id } = useParams();
  const [Address, setAddress] = useState({ id: id, streetaddress: '', city: '', state: '', zip: '' });
  const [addAddress, { error, data }] = useMutation(ADDADDRESS);

  const handleSubmit = (event) => {
    const { name, value } = event.target;
    setAddress({
      ...Address,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addAddress({
        variables: { ...Address },
      });
  
    } catch (e) {
      console.error(e);
    }
  };
  

  return (
    <form onSubmit={handleFormSubmit} className="w-full justify-center grid grid-cols-2 gap-4 place-content-center max-w-md">
      <div className="mb-2">
        <label htmlFor="street-address" className="block text-gray-700 font-bold mb-2">
          Street Address
        </label>
        <input
          type="text"
          id="street-address"
          name='streetaddress'
          value={Address.streetaddress}
          onChange={handleSubmit}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
          City
        </label>
        <input
          type="text"
          id="city"
          name='city'
          value={Address.city}
          onChange={handleSubmit}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
          State
        </label>
        <input
          type="text"
          id="state"
          name='state'
          value={Address.state}
          onChange={handleSubmit}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="zip-code" className="block text-gray-700 font-bold mb-2">
          ZIP Code
        </label>
        <input
          type="text"
          id="zip"
          name='zip'
          value={Address.zip}
          onChange={handleSubmit}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="col-span-2 flex items-center justify-center">
      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Save
      </button>
      </div>
    </form>
  );
};

export default AddressForm;
