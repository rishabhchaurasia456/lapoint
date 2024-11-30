import axios from 'axios';
import React, { useEffect } from 'react'

const Thankyou = () => {
  useEffect(() => {
    const  usertracked_book= async () => {
      try {
        const response = await axios.get("http://localhost:5500/api/affiliate/thankyou");
        console.log(response);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    usertracked_book();
    
  }, []);
  return (
    <div>
    <h1 className='text-center mt-5 pt-5'>
        Thankyou
    </h1>
    </div>
  )
}

export default Thankyou