import React, { useEffect, useState } from 'react'
import img1 from '../../Images/downwinder1.webp'
import img2 from '../../Images/downwinder2.webp'

// card data img 
import crdimg1 from '../../Images/downwinder3.webp';
import crdimg2 from '../../Images/downwinder4.webp';
import crdimg3 from '../../Images/downwinder5.webp';
import { useParams } from 'react-router-dom';
import config from '../../config/config';
import axios from 'axios';



const imgData = [
  {
    id: 1,
    image: crdimg1,
  },
  {
    id: 2,
    image: crdimg2,
  },
  {
    id: 3,
    image: crdimg3,
  },
];

const Storiespage = () => {
  const { id } = useParams();
  // const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState({});

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.post(`${config.API_BASE_URL}/api/user/get_single_storiespage/${id}`);
        if (response.data && response.data.length > 0) {
          setPagedata(response.data[0]); // Assuming response.data is an array with one object
        }
      } catch (error) {
        console.error('Error fetching story details:', error);
        alert('Failed to fetch story details.');
      }
    };
    fetchStory();
  }, [id]);

  // if (loading) {
  //   return <div>Loading...</div>; // Show loading indicator while fetching
  // }

  return (
    // <div>Storiespage</div>

    <div className="container d-flex flex-column align-items-center justify-content-center surf_container mt-3 pt-3">
      <div className="row">
        <div className="col">
          <h1 className="surf_text">
            <span className="text_span fs-1">{pagedata?.storiesName}</span>
          </h1>
          <p className="surf_para fs-6 mt-3" >
            {pagedata?.para1}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <img src={`${config.API_BASE_URL}/${pagedata?.img1}`} alt="" className='w-100 rounded-4' />
        </div>
        <div className="col-lg-6">
          <img src={`${config.API_BASE_URL}/${pagedata?.img2}`} alt="" className='w-100 rounded-4' />
        </div>
      </div>

      <div className='text-start'>
        <p className="surf_para fs-6 mt-3" >
          {pagedata?.para2}
        </p>

        {Array.isArray(pagedata?.data) && pagedata.data.length > 0 ? (
          pagedata.data.map((item, index) => (
            <div key={index}>
              <h1 className="surf_text">
                <span className="text_span fs-1">{item.title}</span>
              </h1>
              <p className="surf_para fs-6 mt-3">{item.para}</p>
            </div>
          ))
        ) : (
          <p>No additional data available.</p>
        )}


        {/* <div className="container">
          <div className="row">
            {imgData.map((item) => (
              <div className="col-lg-4 mb-4" key={item.id}>
                <div className="card border-0 shadow h-100">
                  <img
                    src={item.image}
                    alt={`Image ${item.id}`}
                    className="card-img-top rounded-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow h-100">
                <img
                  src={`${config.API_BASE_URL}/${pagedata?.img3}`}
                  className="card-img-top rounded-3"
                />
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow h-100">
                <img
                  src={`${config.API_BASE_URL}/${pagedata?.img3}`}
                  className="card-img-top rounded-3"
                />
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow h-100">
                <img
                  src={`${config.API_BASE_URL}/${pagedata?.img3}`}
                  className="card-img-top rounded-3"
                />
              </div>
            </div>
          </div>
        </div>




        {/* <h1 className="surf_text">
          <span className="text_span fs-1"> TOGETHER TOWARDS THE MOST BEAUTIFUL ADVENTURE</span>
        </h1>
        <p className="surf_para fs-6 mt-3" >So, are you ready to explore Brazil’s breathtaking coastline as you follow the wind and ride the waves? Join us for an unforgettable trip full of adventure and kitesurfing fun.
          As you prepare for our exciting downwinders in Brazil, it’s crucial to be well prepared so you can enjoy this adventure to the fullest. Here’s a comprehensive list of what to bring:

        </p>


        <h1 className="surf_text">
          <span className="text_span fs-1"> Kitesurfing Equipment</span>
        </h1>
        <p className="surf_para fs-6 mt-3" >
          <strong>  Own kite gear:</strong>
          Own kite gear: We recommend bringing your own kite gear, including kites in different sizes (e.g. 7, 9, 11 and/or 12 meters). This allows you to deliver the best performance, adapted to different wind conditions.
          <p>

            <strong>Twin tip and directional board:</strong>
            Depending on your preference, you can choose between a twintip board and/or a directional board. Make sure the board is suitable for the conditions you will encounter during the downwinder.

          </p>
        </p> */}

      </div>







    </div>
  )
}

export default Storiespage