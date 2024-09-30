import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Room = () => {
  const [countsbed, setCountsbed] = useState([0, 0, 0]); // Separate counts for each level
  const [canProceed, setCanProceed] = useState(false); // Control the visibility of the "Next" button
  const [roomPrices, setRoomPrices] = useState([0, 0, 0]); // To store individual room prices
  const [updatedTotalPrice, setUpdatedTotalPrice] = useState(0); // For the total price with rooms

  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDuration, counts, totalPrice, totalCount, levels, startDate, endDate } = location.state;

  // Room type array
  const roomtype = [
    { room: "Shared Room", price: 0 },
    { room: "Private Room", price: 35 },
    { room: "Double Room For Couples", price: 10 }
  ];

  // Calculate the total count for the current page
  const currentTotalCount = countsbed.reduce((acc, count) => acc + count, 0);

  // Update the "canProceed" state whenever the countsbed or totalCount changes
  useEffect(() => {
    if (currentTotalCount === totalCount) {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
  }, [currentTotalCount, totalCount]);

  // Calculate individual room prices based on the selected counts
  useEffect(() => {
    const newRoomPrices = roomtype.map((room, index) => countsbed[index] * room.price);
    setRoomPrices(newRoomPrices);

    // Calculate updated total price including room prices
    const totalRoomPrice = newRoomPrices.reduce((acc, price) => acc + price, 0);
    setUpdatedTotalPrice(totalPrice + totalRoomPrice);
  }, [countsbed, selectedDuration, roomtype, totalPrice]);

  // Increment count for a specific level
  const increment = (index) => {
    setCountsbed(prevCounts => {
      const newCounts = [...prevCounts];
      if (index === 2) {
        newCounts[index] += 2;
      } else {
        newCounts[index] += 1;
      }
      return newCounts;
    });
  };

  // Decrement count for a specific level
  const decrement = (index) => {
    setCountsbed(prevCounts => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        if (index === 2 && newCounts[index] >= 2) {
          newCounts[index] -= 2;
        } else {
          newCounts[index] -= 1;
        }
      }
      return newCounts;
    });
  };

  // Handle navigation to the next page
  const handleNext = () => {
    navigate('/activity', {
      state: {
        selectedDuration,
        countsbed, // Send the updated counts
        roomPrices, // Pass the individual room prices
        roomtype,  // Pass the room types
        updatedTotalPrice, // Pass the updated total price
        totalCount,
        levels,
        counts,
        startDate,
        endDate
      }
    });
  };

  return (
    <div>
      <h1>NextActivity Confirmation</h1>

      {/* <p><b>Selected Duration:</b> {selectedDuration}</p> */}
      {startDate && endDate && (
        <div>
          <span> {startDate.toLocaleDateString()} - </span>
          <span> {endDate.toLocaleDateString()}</span>
        </div>
      )}
      <p>
        <span>{totalCount} Person, {selectedDuration}</span>

        {/* Show details for each level where count is > 0 */}
        {levels.map((item, index) => (
          counts[index] > 0 && (
            <span key={index}>
              <span>
                <b>{item.level}</b>
                 {/* | Count: {counts[index]} | Price: € {counts[index] * item.price} */}
              </span>
            </span>
          )
        ))}
      </p>
      {/* <h3><b>Base Price:</b> € {totalPrice}</h3> */}

      {/* Room type selection */}
      <div className='container-fluid'>
        {roomtype.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-md-6">
              <p><span><b>{item.room}</b></span> | <span>+ € {item.price} + / per night</span></p>
            </div>
            <div className="col-md-6">
              <button
                className='btn btn-warning'
                onClick={(e) => {
                  e.preventDefault();
                  decrement(index);
                }}
              >
                -
              </button>
              <span>{countsbed[index]}</span>
              <button
                className='btn btn-warning'
                onClick={(e) => {
                  e.preventDefault();
                  increment(index);
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <h3><b>Updated Total Price:</b> € {updatedTotalPrice}</h3> */}

      {/* Conditionally show the "Next" button */}
      {canProceed && (
        <div>
          <button className='btn btn-primary' onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Room;
