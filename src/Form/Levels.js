import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import "./Form.css"
import axios from 'axios';

const Levels = () => {
  const [selectedDuration, setSelectedDuration] = useState('');
  const [counts, setCounts] = useState([0, 0, 0]);
  const [carRentalSelections, setCarRentalSelections] = useState([true, false, false]);
  const [zohoItems, setZohoItems] = useState([]);
  const [availableDurations, setAvailableDurations] = useState([]);
  const location = useLocation();
  const { tripName } = location.state || {};

  // Fetch trip data and set available durations
  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const { data } = await axios.post("http://localhost:5500/api/admin/admin_get_form_level");
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
        const { data } = await axios.get("https://api.kiteactiveventures.com/api/user/get-data-to-zoho");
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

  const navigate = useNavigate();

  const handleDurationChange = (event) => setSelectedDuration(event.target.value);

  const increment = (index) => setCounts(prev => prev.map((c, i) => (i === index ? c + 1 : c)));
  const decrement = (index) => setCounts(prev => prev.map((c, i) => (i === index && c > 0 ? c - 1 : c)));

  const toggleCarRental = (index) => {
    if (index !== 0) {
      setCarRentalSelections(prev => prev.map((val, i) => (i === index ? !val : val)));
    }
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
      const carRental = carRentalSelections[index] && count > 0 ? count * 60 * numericValue : 0;
      return total + rate + carRental;
    }
    return total;
  }, 0);


  const carRentalPrice = counts.reduce((total, count, index) => {
    const carRental = carRentalSelections[index] && count > 0 ? count * 60 * numericValue : 0;
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
    navigate('/datepicker', {
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

  return (
    <div className="container-fluid level_container">
      <div className="row pb-3">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="mt-4 pt-5 mb-5">
            <h1 className="tripName">{tripName}</h1>
          </div>
          <form onSubmit={handleNext}>
            <h5 className="level_heading">Choose duration</h5>
            <select
              className="form-control w-100 p-3"
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

            <h5 className="level_heading">Choose one package per traveller</h5>
            <div className="container-fluid">
              {zohoItems.length > 0 ? (
                zohoItems.map((item, index) => (
                  <div className="row form_crd_row mt-4" key={item.item_id}>
                    <div className="col-md-9">
                      <div className="level_crd_text">
                        <p className="level_crd_para">
                          <span>
                            <b>{item.name}</b>
                          </span>{' '}
                          | <span>Price: €{item.rate}</span>
                        </p>
                      </div>
                      <div className="mx-3 my-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`carRental-${index}`}
                            checked={carRentalSelections[index]}
                            onChange={() => toggleCarRental(index)}
                            disabled={index === 0}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`carRental-${index}`}
                          >
                            {index === 0
                              ? 'Rent of complete Kiteset – Always Included (€60 per person)'
                              : `Add Rent of complete Kiteset for this level (€60 per person)`}
                          </label>
                        </div>
                      </div>
                      <div className="mx-3 mb-2">
                        <NavLink to="/form" className="moreinfo_btn">
                          More info
                        </NavLink>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <i
                        className="fa fa-minus-circle P_M_icon"
                        onClick={() => decrement(index)}
                      ></i>
                      <span className="add_num">{counts[index]}</span>
                      <i
                        className="fa fa-plus-circle P_M_icon"
                        onClick={() => increment(index)}
                      ></i>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items available for the selected duration.</p>
              )}
            </div>
            <div className="btn_container">
              <button className="level_btn" type="submit">
                Continue <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Levels;
