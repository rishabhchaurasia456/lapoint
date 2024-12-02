import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const Room = () => {
  const [countsbed, setCountsbed] = useState([]); // Dynamic counts for each room type
  const [canProceed, setCanProceed] = useState(false); // Control the visibility of the "Next" button
  const [roomPrices, setRoomPrices] = useState([]); // To store individual room prices
  const [updatedTotalPrice, setUpdatedTotalPrice] = useState(0); // For the total price with rooms
  const [roomtype, setRoomtype] = useState([]); // To store room details from API

  const location = useLocation();
  const navigate = useNavigate();
  const { tripName, selectedDuration, counts, totalPrice, totalCount, levels, startDate, endDate, carRentalSelections, carRentalPrice, lineItems } = location.state;

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.post(`${config.API_BASE_URL}/api/admin/getall_room`, { tripName });
        const tripRooms = response.data.getallTripRoom?.find(trip => trip.tripName === tripName)?.roomdetail || []; // Match by tripName
        setRoomtype(tripRooms);

        // Initialize countsbed and roomPrices arrays based on the number of room types
        setCountsbed(new Array(tripRooms.length).fill(0));
        setRoomPrices(new Array(tripRooms.length).fill(0));
      } catch (error) {
        console.error("Error fetching room details:", error);
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

    // Calculate updated total price including room prices
    const totalRoomPrice = newRoomPrices.reduce((acc, price) => acc + price, 0);
    setUpdatedTotalPrice(totalPrice + totalRoomPrice);
  }, [countsbed, roomtype, totalPrice]);

  const increment = (index) => {
    setCountsbed(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const decrement = (index) => {
    setCountsbed(prevCounts => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  // Handle navigation to the next page
  const handleNext = () => {
    const selectedRooms = roomtype
      .map((room, index) => ({
        room: room.roomName,
        count: countsbed[index],
        price: roomPrices[index], // Include price if needed
      }))
      .filter(room => room.count > 0);

    navigate('/activity', {
      state: {
        tripName,
        selectedDuration,
        countsbed,
        selectedRooms,
        updatedTotalPrice, // Pass the updated total price
        totalCount,
        levels,
        counts,
        carRentalSelections,
        carRentalPrice,
        startDate,
        endDate,
        lineItems
      }
    });
  };

  return (
    <>
      <div className="container-fluid level_container room_cont pb-5">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div>
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    <div className="person_week">
                      {startDate && endDate && (
                        <div>
                          <span> {startDate.toLocaleDateString()} - </span>
                          <span> {endDate.toLocaleDateString()}</span>
                        </div>
                      )}
                      <p>
                        <span>{totalCount} Person, {selectedDuration}, </span>
                        {levels && levels.length > 0 ? (
                          <span>
                            {levels.map((level, index) => (
                              <span key={index}>{level.name}, </span>
                            ))}
                          </span>
                        ) : (
                          <p>No levels selected.</p>
                        )}
                      </p>
                    </div>
                    <div className="datepick_border"> </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <p className="level_heading">Choose your room type | Price add-on per room for the duration</p>

                {roomtype.map((item, index) => (
                  <div className="row form_crd_row mt-4" key={item._id}>
                    <div className="col-md-9">
                      <div className="level_crd_text">
                        <p className="level_crd_para">
                          <span><b>{item.roomName}</b></span> | <span>+ € {item.price} + / per night</span>
                        </p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <i className="fa fa-minus-circle P_M_icon" onClick={(e) => { e.preventDefault(); decrement(index); }}></i>
                      <span>{countsbed[index]}</span>
                      <i className="fa fa-plus-circle P_M_icon" onClick={(e) => { e.preventDefault(); increment(index); }}></i>
                    </div>
                  </div>
                ))}
              </div>

              {canProceed && (
                <div className="btn_container">
                  <button className="level_btn" onClick={handleNext}>
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
};

export default Room;
