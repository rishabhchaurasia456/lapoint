import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '../config/config';

const Activity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [recommendedActivities, setRecommendedActivities] = useState([]);
  const [addOnActivities, setAddOnActivities] = useState([]);
  const [recommendedCounts, setRecommendedCounts] = useState([]);
  const [addOnCounts, setAddOnCounts] = useState([]);

  const { tripName, selectedDuration, updatedTotalPrice, totalCount, levels, startDate, endDate, counts, countsbed, selectedRooms, carRentalPrice, carRentalSelections, lineItems } = location.state;

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const response = await axios.post(`${config.API_BASE_URL}/api/admin/getall_activity`);

        // Filter data by the tripName passed from the previous component
        const tripActivities = response.data.getallTripActivity.filter(
          (activity) => activity.tripName === tripName
        );

        // Separate recommended and add-on activities
        const recommended = tripActivities
          .filter((activity) => activity.activitytype === "Recommended Activities")
          .flatMap((activity) => activity.activitydetail);

        const addOn = tripActivities
          .filter((activity) => activity.activitytype === "Add-On Activities")
          .flatMap((activity) => activity.activitydetail);

        setRecommendedActivities(recommended);
        setAddOnActivities(addOn);

        // Initialize the counts to zero for both recommended and add-on activities
        setRecommendedCounts(new Array(recommended.length).fill(0));
        setAddOnCounts(new Array(addOn.length).fill(0));

      } catch (error) {
        console.error("Error fetching trip activities:", error);
      }
    };

    fetchTripData();
  }, [tripName]);

  // Update count for recommended activities
  const incrementRecommended = (index) => {
    setRecommendedCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] < totalCount) {
        newCounts[index] += 1;
      }
      return newCounts;
    });
  };

  const decrementRecommended = (index) => {
    setRecommendedCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  // Update count for add-on activities
  const incrementAddOn = (index) => {
    setAddOnCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] < totalCount) {
        newCounts[index] += 1;
      }
      return newCounts;
    });
  };

  const decrementAddOn = (index) => {
    setAddOnCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  // Calculate the total price of selected activities
  const calculateTotalActivityPrice = () => {
    const recommendedPrice = recommendedActivities.reduce(
      (total, item, index) => total + recommendedCounts[index] * item.price,
      0
    );
    const addOnPrice = addOnActivities.reduce(
      (total, item, index) => total + addOnCounts[index] * item.price,
      0
    );
    return recommendedPrice + addOnPrice;
  };

  // Proceed to checkout with selected activities
  const handleCheckout = () => {
    const totalActivityPrice = calculateTotalActivityPrice();
    const finalTotalPrice = updatedTotalPrice + totalActivityPrice;

    const activityDetails = [
      ...recommendedActivities.map((item, index) => ({
        name: item.activityName,
        count: recommendedCounts[index],
        price: recommendedCounts[index] * item.price,
      })),
      ...addOnActivities.map((item, index) => ({
        name: item.activityName,
        count: addOnCounts[index],
        price: addOnCounts[index] * item.price,
      })),
    ].filter((activity) => activity.count > 0); // Filter out activities with count 0

    navigate('/checkout/checkout', {
      state: {
        tripName,
        selectedDuration,
        updatedTotalPrice: finalTotalPrice,
        totalCount,
        recommendedCounts,
        addOnCounts,
        activityDetails,
        levels,
        counts,
        countsbed,
        selectedRooms,
        carRentalPrice,
        carRentalSelections,
        startDate,
        endDate,
        lineItems,
      },
    });
  };

  return (
    <div className="container-fluid level_container  bg_cont pb-5">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="person_week">
                  {startDate && endDate && (
                    <div>
                      <span>{new Date(startDate).toLocaleDateString()} to </span>
                      <span>{new Date(endDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  <p>
                    <span>
                      {totalCount} Person/ {selectedDuration}/ {levels.map((item, index) => counts[index] > 0 && <span key={index}>{item.level} </span>)}
                    </span>
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
              </div>
            </div>
          </div>

          {/* Display Recommended Activities */}
          <h3 className='level_heading'>Recommended Products</h3>
          <div className="container-fluid">
            {recommendedActivities.map((item, index) => (
              <div className="row form_crd_row mt-4" key={index}>
                <div className="col-lg-10 col-md-11 col-sm-1 col">
                  <div className="level_crd_text">
                    <p>
                      <b>{item.activityName}</b> | From €{item.price}
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-1 col d-flex align-items-center justify-content-center">
                  <i className="fa fa-minus-circle P_M_icon" onClick={() => decrementRecommended(index)}></i>
                  <span>{recommendedCounts[index]}</span>
                  <i className="fa fa-plus-circle P_M_icon" onClick={() => incrementRecommended(index)}></i>
                </div>
              </div>
            ))}
          </div>

          {/* Display Add-On Activities */}
          <h3 className='level_heading'>Add On Activities</h3>
          <div className="container-fluid">
            {addOnActivities.map((item, index) => (
              <div className="row form_crd_row mt-4" key={index}>
                <div className="col-lg-10 col">
                  <div className="level_crd_text">
                    <p>
                      <b>{item.activityName}</b> | From €{item.price}
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col d-flex align-items-center justify-content-center">
                  <i className="fa fa-minus-circle P_M_icon" onClick={() => decrementAddOn(index)}></i>
                  <span>{addOnCounts[index]}</span>
                  <i className="fa fa-plus-circle P_M_icon" onClick={() => incrementAddOn(index)}></i>
                </div>
              </div>
            ))}
          </div>

          <div className="btn_container">
            <button className="level_btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default Activity;
