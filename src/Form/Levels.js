import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import "./Form.css"
import axios from 'axios';
import { Helmet } from 'react-helmet';
import config from '../config/config';

const Levels = () => {
  const [selectedDuration, setSelectedDuration] = useState('');
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const [carRentalSelections, setCarRentalSelections] = useState([]);
  const [zohoItems, setZohoItems] = useState([]);
  const [availableDurations, setAvailableDurations] = useState([]);
  const location = useLocation();
  // const { tripName } = location.state || {};

  const { trip_name } = useParams();
  const tripName = trip_name
  console.log("level strip name", trip_name)

  // Fetch trip data and set available durations
  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const { data } = await axios.post(`${config.API_BASE_URL}/api/admin/admin_get_form_level`);
        const tripData = data.getAllTripLevelDate || [];
        const selectedTrip = tripData.find(trip => trip.trip_name.toLowerCase() === tripName.toLowerCase());

        if (selectedTrip) {
          setAvailableDurations(selectedTrip.days || []);
          setSelectedDuration(selectedTrip.days[0]); // Set the first available duration as default
        }
      } catch (error) {
        console.error("Error fetching trip levels:", error);
      }
    };

    fetchTripData();
  }, [tripName]);

  // Fetch Zoho items only when selectedDuration is set
  useEffect(() => {
    if (!selectedDuration) return;

    const fetchZohoItems = async () => {
      try {
        const { data } = await axios.get(`${config.API_BASE_URL}/api/user/get-data-to-zoho`);
        if (data && data.data) {
          const items = data.data.items || [];
          const filteredItems = items.filter(item => {
            const itemName = item.name?.toLowerCase() || '';
            return (
              itemName.includes(tripName?.toLowerCase() || '') &&
              itemName.includes(selectedDuration?.toLowerCase() || '')
            );
          });
          setZohoItems(filteredItems);
        }
      } catch (error) {
        console.error("Error fetching Zoho items:", error);
      }
    };

    fetchZohoItems();
  }, [tripName, selectedDuration]);

  useEffect(() => {
    if (zohoItems.length > 0) {
      // Initialize car rental selections to false for all items
      setCarRentalSelections(zohoItems.map(() => false));
    }
  }, [zohoItems]);

  const navigate = useNavigate();

  const handleDurationChange = (event) => setSelectedDuration(event.target.value);

  const increment = (index) => setCounts(prev => prev.map((c, i) => (i === index ? c + 1 : c)));
  const decrement = (index) => setCounts(prev => prev.map((c, i) => (i === index && c > 0 ? c - 1 : c)));

  const toggleCarRental = (index) => {
    setCarRentalSelections((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  const totalCount = counts.reduce((acc, count) => acc + count, 0);

  const getNumericDuration = (duration) => {
    // Extract number from the string using regex
    const number = parseInt(duration.replace(/\D/g, '')); // Remove non-numeric characters and parse
    return number;
  };

  const numericValue = getNumericDuration(selectedDuration);

  const totalPrice = counts.reduce((total, count, index) => {
    if (zohoItems[index]) {
      const rate = count * zohoItems[index].rate;
      const itemName = zohoItems[index].name?.toLowerCase() || '';

      // For Level 1 (identified by the item name), set the car rental price to 0
      const carRental = itemName.includes('level 1')
        ? 0
        : (carRentalSelections[index] && count > 0)
          ? count * 60 * numericValue
          : 0;

      return total + rate + carRental;
    }
    return total;
  }, 0);


  const carRentalPrice = counts.reduce((total, count, index) => {
    const itemName = zohoItems[index]?.name?.toLowerCase() || '';

    // For Level 1, do not include the kite rental price
    const carRental = itemName.includes('level 1')
      ? 0
      : (carRentalSelections[index] && count > 0)
        ? count * 60 * numericValue
        : 0;

    return total + carRental;
  }, 0);

  const handleNext = (event) => {
    event.preventDefault();

    // Create line items for the next page
    const lineItems = counts.map((count, index) => {
      if (count > 0 && zohoItems[index]) {
        return {
          item_id: zohoItems[index].item_id, // Item ID from Zoho
          quantity: count, // Quantity selected by the user
          rate: zohoItems[index].rate, // Item rate from Zoho
        };
      }
      return null;
    }).filter(item => item !== null); // Filter out null values

    // Navigate to the next page with all required data
    navigate(`/${tripName}/checkout/datepicker`, {
      state: {
        tripName, // Selected trip name
        selectedDuration, // Selected duration
        counts: counts.filter((count) => count > 0), // Counts > 0
        totalPrice, // Total price
        totalCount, // Total count
        levels: zohoItems.filter((_, index) => counts[index] > 0), // Filter levels with count > 0
        carRentalSelections, // Car rental selections
        carRentalPrice, // Total car rental price
        lineItems, // Detailed line items
      },
    });
  };


  // button disable 
  const isButtonDisabled = !(selectedDuration && counts.some(count => count > 0));


  return (
    <>
      <Helmet>
          <title>KiteActive Checkout</title>
          <meta name="description" content="This is the home page of your website where you can find information about surfcamps, lifestyle, and more." />
          <meta name="keywords" content="surfcamp, lifestyle, adventure, activities, reviews" />
      </Helmet>
    <div className="container-fluid level_container bg_cont">
      <div className="row pb-3">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="mt-2">
            <h1 className="tripName">{tripName}</h1>
          </div>
          <form onSubmit={handleNext}>
            <h5 className="level_heading">Choose duration</h5>
            <select
              className="form-control form-select w-100 level_input"
              id="duration"
              onChange={handleDurationChange}
              value={selectedDuration}
              required
            >
              {availableDurations.map((duration, index) => (
                <option key={index} value={duration}>
                  {duration.charAt(0).toUpperCase() + duration.slice(1)}
                </option>
              ))}
            </select>

            <h5 className="level_heading">
              <div className="container">
                <div className="row">
                  <div className="col">
                    Choose your package
                  </div>
                  <div className="col">
                    <div className="float-end">
                      No. of People
                    </div>
                  </div>
                </div>
              </div>
            </h5>
            <div className="container-fluid">
              {zohoItems.length > 0 ? (
                zohoItems.map((item, index) => (
                  <div className="row form_crd_row mt-4" key={item.item_id}>
                    {/* Column for Item Details */}
                    <div className="col-lg-8 col-sm-12">
                      <div className="level_crd_text">
                        <p className="level_crd_para">
                          <div className="row">
                            <span className='col-sm-12'>
                              <b>{item.name}</b>
                            </span>
                            <span className='col-sm-12 level_crd_price'> | From: €{item.rate}</span>
                          </div>
                        </p>
                      </div>
                      <div className="mx-3 my-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`carRental-${index}`}
                            checked={
                              // Always checked for "Level 1" items
                              item.name.toLowerCase().includes('level 1')
                                ? true
                                : carRentalSelections[index] // Use state for other items
                            }
                            onChange={() => {
                              // Allow toggling only for non-Level 1 items
                              if (!item.name.toLowerCase().includes('level 1')) {
                                toggleCarRental(index);
                              }
                            }}
                            disabled={item.name.toLowerCase().includes('level 1')} // Disable for "Level 1"
                          />
                          <label
                            className="form-check-label check_box_text"
                            htmlFor={`carRental-${index}`}
                          >
                            {item.name.toLowerCase().includes('level 1')
                              ? 'Shared Kite Rental – Always Included (€60 x person x days)'
                              : `Rental Of Complete kiteset (€60 x person x days)`}
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Row for Additional Actions */}
                    <div className="col-lg-12 col-12">
                      <div className="mx-3">
                        <div className="col" key={index}>
                          <div className="col-lg-2 col-4 p_m_col mt-0 pt-0">
                            <div className="p_m_col d-flex align-items-center">
                              <i
                                className="fa fa-minus-circle P_M_icon"
                                onClick={() => decrement(index)}
                              ></i>
                              <span className="add_num mx-2">{counts[index]}</span>
                              <i className="fa fa-plus-circle P_M_icon"
                                onClick={() => increment(index)}
                              ></i>
                            </div>
                          </div>
                          <details className="">
                            <summary className="styled-dropdown summary-header text-dark">What's the Deal</summary>
                            <div class="row">
                              <div className="dropdown-content fs-5 mb-2">
                                {item.description.split("\n").map((line, lineIndex) => (
                                  <p key={lineIndex} className="fs-6 text-dark">
                                    <i className="fa fa-check-circle text-warning mx-2"></i>{line}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </details>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className='background_black'>No items available for the selected duration.</p>
              )}

              <div className="btn_container">
                <button
                  className="level_btn fixed-bottom"
                  type="submit"
                  disabled={isButtonDisabled}
                  style={{
                    backgroundColor: isButtonDisabled ? "gray" : "#ffc800",
                    cursor: isButtonDisabled ? "not-allowed" : "pointer",
                    color: isButtonDisabled ? "darkgray" : "white",
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    </>
  );
};

export default Levels;
