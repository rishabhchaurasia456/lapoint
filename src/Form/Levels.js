import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import "./Form.css"
import axios from 'axios';

const Levels = () => {
  const [selectedDuration, setSelectedDuration] = useState('7 Days'); // Track selected duration
  const [counts, setCounts] = useState([0, 0, 0]); // Separate counts for each level
  const [carRentalSelections, setCarRentalSelections] = useState([true, false, false]); // Car rental for Level 1 is always true
  const [zohoItems, setZohoItems] = useState([]);

  const location = useLocation();
  const { tripName } = location.state || {};

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://backend-kiteactive.onrender.com/api/user/get-data-to-zoho");

        if (response.data && response.data) {
          const itemsResponse = response.data;
          console.log("API Response:", itemsResponse.data.items);

          // Filter items based on tripName and selectedDuration
          const filteredItems = itemsResponse.data.items.filter(item => {
            const itemName = item.name ? item.name.toLowerCase().trim() : '';
            const tripNameLower = tripName ? tripName.toLowerCase().trim() : '';
            const durationLower = selectedDuration ? selectedDuration.toLowerCase().trim() : '';

            const matchesTripName = itemName.includes(tripNameLower);
            const matchesDuration = itemName.includes(durationLower);

            console.log("matchesTripName:", matchesTripName);
            console.log("matchesDuration:", matchesDuration);

            return matchesTripName && matchesDuration;
          });

          setZohoItems(filteredItems);
        } else {
          console.log("No items found in the response.");
          console.log("Too Many Request , Please Try Sometimes Later")
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [tripName, selectedDuration]);


  const navigate = useNavigate();

  // Handle duration selection change
  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  // Increment count for a specific level
  const increment = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  // Decrement count for a specific level
  const decrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) newCounts[index] -= 1;
      return newCounts;
    });
  };

  // Handle car rental selection for a specific level (only for levels other than 1)
  const toggleCarRental = (index) => {
    if (index !== 0) { // Prevent changing for Level 1
      setCarRentalSelections((prevSelections) => {
        const newSelections = [...prevSelections];
        newSelections[index] = !newSelections[index];
        return newSelections;
      });
    }
  };

  // Array to hold dynamic data for different levels with base prices
  const basePrices = {
    '7 Days': { beginner: 949, waterstart: 649, zelfstandig: 499 },
    '10 Days': { beginner: 1049, waterstart: 749, zelfstandig: 599 },
    '14 Days': { beginner: 1249, waterstart: 949, zelfstandig: 799 },
  };

  // Get the prices based on the selected duration
  const prices = basePrices[selectedDuration];

  const levels = [
    { level: 'Level 1 – Beginner', price: prices.beginner, link: '#' },
    { level: 'Level 2 – Waterstart', price: prices.waterstart, link: '#' },
    { level: 'Level 3 – Zelfstandig', price: prices.zelfstandig, link: '#' },
  ];

  // Determine the number of days based on the selected duration
  const daysMap = {
    '7 Days': 7,
    '10 Days': 10,
    '14 Days': 14,
  };
  const selectedDays = daysMap[selectedDuration];

  // Calculate total count (sum of all counts)
  const totalCount = counts.reduce((acc, count) => acc + count, 0);

  const totalPrice = counts.reduce((acc, count, index) => {
  if (zohoItems[index]) {
    const levelRate = count * zohoItems[index].rate; // Use the Zoho item rate
    console.log("Item Rate for Level:", zohoItems[index].rate);
    // Only add car rental price for levels where the checkbox is selected
    const carRentalPrice = carRentalSelections[index] && count > 0 ? selectedDays * 60 * count : 0;
    console.log("carRentalPriceeeeeeeeeeeeeeeeeeeeeeee", carRentalPrice)
    return acc + levelRate + carRentalPrice;
  }
  return acc;
}, 0);
  console.log("totalpriceeeeee", totalPrice)


  const carRentalPrice = counts.reduce((acc, count, index) => {
    // Only include the Kiteset rental if the checkbox is selected for levels and count > 0
    return acc + (carRentalSelections[index] && count > 0 ? selectedDays * 60 * count : 0);
  }, 0);

  console.log("cccccccccccccccccc", carRentalPrice)
  // Only include levels with a count > 0
  const selectedLevels = levels.filter((_, index) => counts[index] > 0);

  // Navigate to the next page and pass data
  const handleNext = (event) => {
    event.preventDefault();

    const lineItems = counts.map((count, index) => {
      if (count > 0 && zohoItems[index]) {
        return {
          item_id: zohoItems[index].item_id,
          quantity: count,
          rate: zohoItems[index].rate
        };
      }
      return null;
    }).filter(item => item !== null);

    navigate('/datepicker', {
      state: {
        selectedDuration,
        counts: counts.filter((count) => count > 0), // Only pass counts that are > 0
        totalPrice,
        totalCount, // Pass the total count
        levels: selectedLevels, // Only pass selected levels where count > 0
        carRentalSelections, // Pass car rental selection per level
        carRentalPrice,
        lineItems
      },
    });
  };


  return (
    <div>
      <div className="container-fluid level_container ">
        <div className="row pb-3">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div class="mt-4 pt-5 mb-5">
              <h1 className='tripName'>
                {tripName}
              </h1>
            </div>

            <form onSubmit={handleNext}>
              <h5 className='level_heading'>Choose duration</h5>
              <select className="form-control w-100 p-3" id="duration" onChange={handleDurationChange} value={selectedDuration} required>
                <option>7 Days</option>
                <option>10 Days</option>
                <option>14 Days</option>
              </select>
              <h5 className='level_heading'>Choose one package per traveller</h5>

              <div className="container-fluid">
                {zohoItems.length > 0 ? (
                  zohoItems.map((item, index) => (
                    <div className="row form_crd_row mt-4" key={item.item_id}>
                      <div className="col-md-9">
                        <div className='level_crd_text'>
                          <p className='level_crd_para'>
                            <span>
                              <b>{item.name}</b>
                            </span>{' '}
                            | <span name="rate">Price: €{item.rate}</span>
                          </p>
                        </div>

                        <div className="mx-3 my-3 ">
                          <div className="form-check ">
                            <input type="checkbox"
                              className="form-check-input"
                              id={`carRental-${index}`}
                              checked={carRentalSelections[index]}
                              onChange={() => {
                                toggleCarRental(index);
                              }}
                              disabled={index === 0}
                              required
                            />
                            <label className="form-check-label " htmlFor={`carRental-${index}`}>
                              {index === 0
                                ? 'Rent of complete Kiteset – Always Included (€60 per person)'
                                : `Add Rent of complete Kiteset for ${item.level} (€60 per person)`}
                            </label>
                          </div>
                        </div>


                        <div className="mx-3 mb-2">
                          <NavLink to="/form" className='moreinfo_btn'>
                            More info
                          </NavLink>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <i className="fa fa-minus-circle P_M_icon" onClick={(e) => { e.preventDefault(); decrement(index); }}></i>
                        <span className='add_num'>{counts[index]}</span>
                        <i className="fa fa-plus-circle P_M_icon" onClick={(e) => { e.preventDefault(); increment(index); }}></i>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No items available for the selected duration.</p>
                )}
              </div>

              <div className='btn_container'>
                <button className="level_btn" onClick={handleNext}>
                  Continue <i className='fa fa-arrow-right'></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Levels;
