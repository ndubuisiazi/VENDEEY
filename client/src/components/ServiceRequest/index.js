import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_SERVICE_REQUEST } from '../../utils/mutations';


const ServiceRequest = () => {
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const [addServiceRequest, { error }] = useMutation(ADD_SERVICE_REQUEST);  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await addServiceRequest({
          variables: { 
              id, 
              servicerequest: comment 
            },
        });
    } catch (err) {
        console.error(err);
    }

    setComment("");
    window.location.assign("/");
  };

  return (
    <form onSubmit={handleSubmit} className="col-span-4 mx-auto w-full h-full flex flex-col justify-center items-center  py-4">
      <label htmlFor="comment" className="text-gray-700 font-bold mb-2" style={{ height: '10%' }}>
        Service Request
      </label>
      <textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-1/2 h-40 md:h-48 border-2 rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
        required
        style={{ height: '50%',outline: "none" }}
        
      />
      <button
        type="submit"
        className="mt-4 w-1/3 md:w-1/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default ServiceRequest;
