import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Activity = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate to other pages

  const { selectedDuration, counts, countsbed, roomPrices, roomtype, updatedTotalPrice, totalCount, levels, startDate, endDate } = location.state;

  const [actcounts, setactCounts] = useState([0, 0, 0, 0, 0]);

  const recc_activity = [
    { level: 'Longsleeve lycra', price: 45, link: '/1' },
    { level: 'Kitesurf sunglasses', price: 50, link: '/2' },
    { level: 'Kite shoes', price: 35, link: '/3' },
    { level: 'Gear rental', price: 450, link: '/4' },
    { level: 'Boardbag', price: 200, link: '/5' },
  ];

  // Increment count for a specific level
  const increment = (index) => {
    setactCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] < totalCount) {
        newCounts[index] += 1;
      }
      return newCounts;
    });
  };

  // Decrement count for a specific level
  const decrement = (index) => {
    setactCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) newCounts[index] -= 1;
      return newCounts;
    });
  };


  const calculateTotalActivityPrice = () => {
    return recc_activity.reduce((total, item, index) => {
      return total + actcounts[index] * item.price;
    }, 0);
  };
  // Handler to navigate to the checkout page
  const handleCheckout = () => {
    const totalActivityPrice = calculateTotalActivityPrice();
    const finalTotalPrice = updatedTotalPrice + totalActivityPrice;

    const activityDetails = recc_activity.map((item, index) => ({
      name: item.level,
      count: actcounts[index],
      price: actcounts[index] * item.price,
    })).filter(activity => activity.count > 0);

    navigate('/checkout', {
      state: {
        selectedDuration,
        counts,
        countsbed,
        roomPrices,
        roomtype,
        // updatedTotalPrice,
        updatedTotalPrice: finalTotalPrice,
        totalCount,
        levels,
        startDate,
        endDate,
        actcounts, // Pass the activity counts as well
        activityDetails
      },
    });
  };

  return (
    <div>

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

      {/* <h3><b>Updated Total Price:</b> € {updatedTotalPrice}</h3> */}


      <div className="container-fluid">
        {recc_activity.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-md-6">
              <p>
                <span>
                  <b>{item.level}</b>
                </span>{' '}
                | <span>From € {item.price}</span>
              </p>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  decrement(index);
                }}
              >
                -
              </button>
              <span>{actcounts[index]}</span>
              <button
                className="btn btn-warning"
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

      {/* Button to navigate to checkout page */}
      <button className="btn btn-primary" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Activity;
