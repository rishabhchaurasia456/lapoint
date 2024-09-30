import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();

    // Destructure the passed state
    const {
        selectedDuration,
        counts,
        countsbed,
        roomPrices,
        roomtype,
        updatedTotalPrice,
        totalCount,
        levels,
        startDate,
        endDate,
        actcounts,
        activityDetails
    } = location.state;


    const navigate = useNavigate()

    const handleUserinfo = () => {
    navigate('/userinfo',{
        state: {
        selectedDuration,
        counts,
        countsbed,
        roomPrices,
        roomtype,
        updatedTotalPrice,
        totalCount,
        levels,
        startDate,
        endDate,
        actcounts,
        activityDetails
        }
    })
    }
    return (
        <div>
            <h1>Checkout Page</h1>

            <p><b>Selected Duration:</b> {selectedDuration}</p>
            <p><b>Total Count:</b> {totalCount}</p>

            <div>
                <h2>Room Details</h2>
                {roomtype.map((room, index) => (
                    countsbed[index] > 0 && (
                        <div key={index}>
                            <p>
                                <b>{room.room}</b> | Count: {countsbed[index]} | Room Price: € {roomPrices[index]}
                            </p>
                        </div>
                    )
                ))}
            </div>

            <div>
                <h2>Selected room</h2>
                {levels.map((item, index) => (
                    counts[index] > 0 && (
                        <div key={index}>
                            <p>
                                <b>{item.level}</b> | Count: {counts[index]} | Price: € {counts[index] * item.price}
                            </p>
                        </div>
                    )
                ))}
            </div>

            <div>
                {/* <h2>Recreational Activities</h2>
        {actcounts.map((count, index) => (
          count > 0 && (
            <div key={index}>
              <p>Activity {index + 1}: Count: {count}</p>
            </div>
          )
        ))} */}
                <h2>Selected Activities</h2>
                {activityDetails.map((activity, index) => (
                    <div key={index}>
                        <p><b>{activity.name}</b> | Count: {activity.count} | Total Price: € {activity.price}</p>
                    </div>
                ))}
            </div>

            <h3><b>Updated Total Price:</b> € {updatedTotalPrice}</h3>

            <div>
                <p><b>Start Date:</b> {new Date(startDate).toLocaleDateString()}</p>
                <p><b>End Date:</b> {new Date(endDate).toLocaleDateString()}</p>
            </div>

            {/* Additional checkout actions can be added here, like payment buttons */}
            <button className="btn btn-success" onClick={handleUserinfo}>Confirm and Pay</button>
        </div>
    );
};

export default Checkout;
