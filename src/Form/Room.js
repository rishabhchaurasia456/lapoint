import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const Room = () => {
  const [countsbed, setCountsbed] = useState([]);
  const [canProceed, setCanProceed] = useState(false);
  const [roomPrices, setRoomPrices] = useState([]);
  const [updatedTotalPrice, setUpdatedTotalPrice] = useState(0);
  const [roomtype, setRoomtype] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(null); // Track active card index

  const location = useLocation();
  const navigate = useNavigate();
  const {
    tripName,
    selectedDuration,
    counts,
    totalPrice,
    totalCount,
    levels,
    startDate,
    endDate,
    carRentalSelections,
    carRentalPrice,
    lineItems,
  } = location.state;

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.post(`${config.API_BASE_URL}/api/admin/getall_room`, { tripName });
        const tripRooms = response.data.getallTripRoom?.find(trip => trip.tripName === tripName)?.roomdetail || [];
        setRoomtype(tripRooms);

        setCountsbed(new Array(tripRooms.length).fill(0));
        setRoomPrices(new Array(tripRooms.length).fill(0));
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    fetchRoomDetails();
  }, [tripName]);

  const currentTotalCount = countsbed.reduce((acc, count) => acc + count, 0);

  useEffect(() => {
    setCanProceed(currentTotalCount === totalCount);
  }, [currentTotalCount, totalCount]);

  useEffect(() => {
    const newRoomPrices = roomtype.map((room, index) => countsbed[index] * room.price);
    setRoomPrices(newRoomPrices);

    const totalRoomPrice = newRoomPrices.reduce((acc, price) => acc + price, 0);
    setUpdatedTotalPrice(totalPrice + totalRoomPrice);
  }, [countsbed, roomtype, totalPrice]);

  const increment = index => {
    setCountsbed(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const decrement = index => {
    setCountsbed(prevCounts => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };



  const handleNext = () => {
    const selectedRooms = roomtype
      .map((room, index) => ({
        room: room.roomName,
        count: countsbed[index],
        price: roomPrices[index],
      }))
      .filter(room => room.count > 0);

    navigate(`/${tripName}/checkout/activity`, {
      state: {
        tripName,
        selectedDuration,
        countsbed,
        selectedRooms,
        updatedTotalPrice,
        totalCount,
        levels,
        counts,
        carRentalSelections,
        carRentalPrice,
        startDate,
        endDate,
        lineItems,
      },
    });
  };

  const toggleDetails = index => {
    setActiveCardIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle active card
  };


  // button disbale 
  const isButtonDisabled = countsbed.every((count) => count === 0);


  return (
    <div className="container-fluid level_container room_cont pb-5">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="container-fluid">
            <div className="datepick_border mt-5"></div>
            <p className="level_heading text-center mt-5">
              Choose your room type
            </p>

            <div className="row mt-4 justify-content-center">
              {roomtype.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-0" key={item._id}>
                  <div className="card h-100 rounded-2">
                    <img
                      src={`${config.API_BASE_URL}/${item.images[0]}`}
                      className="card-img-top rounded-top-2"
                      alt={item.roomName}
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = require('../Images/flexbanner.jpg');
                      }}
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col-7">
                          <h5 className="card-title">{item.roomName}</h5>
                          <p className="card-text">€ {item.price} / per night</p>
                        </div>
                        <div className="col-5 d-flex align-items-center justify-content-center">
                          <i className="fa fa-minus-circle P_M_icon" onClick={() => decrement(index)}></i>
                          <span>{countsbed[index]}</span>
                          <i className="fa fa-plus-circle P_M_icon" onClick={() => increment(index)}></i>
                        </div>
                      </div>
                      <button
                        className="level_btn fs-6 mt-3"
                        onClick={() => toggleDetails(index)}
                      >
                        {activeCardIndex === index ? 'Hide Details' : 'View Details'}
                      </button>

                      {activeCardIndex === index && (
                        <div className="room-details mt-3">
                          <h5 className="level_heading">{item.roomName} Details</h5>
                          <div className="image-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                            {item.images.map((img, imgIndex) => (
                              <div className="image-wrapper" key={imgIndex} style={{ display: 'inline-block', flexShrink: 0 }}>
                                <img
                                  src={`${config.API_BASE_URL}/${img}`}
                                  className="img-fluid"
                                  alt="Room"
                                  style={{ width: '100%', height: 'auto' }}
                                  onError={e => {
                                    e.target.onerror = null;
                                    e.target.src = require('../Images/flexbanner.jpg');
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                          <p className="level_para mt-2">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {activeCardIndex !== null && (
              <div className="row mt-3 room_container_desktop">
                <div className="col-12">
                  <div className="level_container">
                    <div className="col-lg-12 card p-4">
                      <div className="row">
                        <h5 className='level_heading'>{roomtype[activeCardIndex]?.roomName} Details</h5>
                        <div className="image-container" style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                          {roomtype[activeCardIndex]?.images.map((img, imgIndex) => (
                            <div className="col-md-4" key={imgIndex} style={{ flexShrink: 0 }}>
                              <img
                                src={`${config.API_BASE_URL}/${img}`}
                                className="img-fluid w-100"
                                alt="Room"
                                onError={e => {
                                  e.target.onerror = null;
                                  e.target.src = require('../Images/flexbanner.jpg');
                                }}
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className='level_para mt-2'>
                            {roomtype[activeCardIndex].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}


            <div className="btn_container">
              <button
                className="level_btn fixed-bottom"
                onClick={handleNext}
                disabled={isButtonDisabled}
                style={{
                  backgroundColor: isButtonDisabled ? "gray" : "#ffc800",
                  cursor: isButtonDisabled ? "not-allowed" : "pointer",
                  color: isButtonDisabled ? "darkgray" : "white",
                }}
              > Next
              </button>
            </div>


          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default Room;
