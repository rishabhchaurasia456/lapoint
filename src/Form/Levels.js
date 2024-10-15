import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import "./Form.css"
import axios from 'axios';


const Levels = () => {
  const [selectedDuration, setSelectedDuration] = useState('1 week'); // Track selected duration
  const [counts, setCounts] = useState([0, 0, 0]); // Separate counts for each level
  const [carRentalSelections, setCarRentalSelections] = useState([true, false, false]); // Car rental for Level 1 is always true
  const [zanzibarItems, setZanzibarItems] = useState([]);


  // useEffect(() => {
  //   const itemsResponse = axios.get("http://localhost:5000/api/get-data-to-zoho")
  //   console.log("iiiiiiiiiiiiiiiiii", itemsResponse)
  // }, []);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/get-data-to-zoho");


  //       // Check if the request was successful and the data exists
  //       if (response.data && response.data) {
  //         const itemsResponse = response.data;
  //         console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrr", itemsResponse.data.items)

  //         // Filter items containing "Zanzibar" in the name field
  //         const zanzibarItems = itemsResponse.data.items.filter(item => item.name && item.name.includes("Zanzibar"));

  //         // Log the filtered items
  //         console.log("Filtered Zanzibar Items:", zanzibarItems);
  //       } else {
  //         console.log("No items found in the response.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching items:", error);
  //     }
  //   };

  //   fetchItems();
  // }, []);

  useEffect(() => { 
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get-data-to-zoho");

        // Check if the request was successful and the data exists
        if (response.data && response.data) {
          const itemsResponse = response.data;
          console.log("API Response:", itemsResponse.data.items);

          // Filter items containing "Zanzibar" in the name field
          const zanzibarItems = itemsResponse.data.items.filter(item => item.name && item.name.includes("Zanzibar"));

          // Update the state with the filtered items
          setZanzibarItems(zanzibarItems);
        } else {
          console.log("No items found in the response.");
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
}, []);


  const navigate = useNavigate(); // useNavigate for navigation

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
    '1 week': { beginner: 949, waterstart: 649, zelfstandig: 499 },
    '10 Days': { beginner: 1049, waterstart: 749, zelfstandig: 599 },
    '2 weeks': { beginner: 1249, waterstart: 949, zelfstandig: 799 },
  };

  // Get the prices based on the selected duration
  const prices = basePrices[selectedDuration];

  const levels = [
    { level: 'Level 1 – Beginner', price: prices.beginner, link: '/1' },
    { level: 'Level 2 – Waterstart', price: prices.waterstart, link: '/4' },
    { level: 'Level 3 – Zelfstandig', price: prices.zelfstandig, link: '/3' },
  ];


  // Calculate total count (sum of all counts)
  const totalCount = counts.reduce((acc, count) => acc + count, 0);

  // Calculate total price based on counts and car rental selection for each level
  const totalPrice = counts.reduce((acc, count, index) => {
    const levelPrice = count * levels[index].price;
    const carRentalPrice = carRentalSelections[index] ? count * 100 : 0;
    return acc + levelPrice + carRentalPrice;
  }, 0);

  // Only include levels with a count > 0
  const selectedLevels = levels.filter((_, index) => counts[index] > 0);

  // Navigate to the next page and pass data
  const handleNext = (event) => {
    event.preventDefault();
    navigate('/datepicker', {
      state: {
        selectedDuration,
        counts: counts.filter((count) => count > 0), // Only pass counts that are > 0
        totalPrice,
        totalCount, // Pass the total count
        levels: selectedLevels, // Only pass selected levels where count > 0
        carRentalSelections, // Pass car rental selection per level
      },
    });
  };

  const location = useLocation();
  const { tripName } = location.state || {};

  return (
    <div>

      <div className="container-fluid level_container ">
        <div className="row pb-3">
          <div className="col-md-2"></div>
          <div className="col-md-8">

            <div class="mt-4 pt-5 mb-5">
              {/* show the trip name  */}
              <h1 className='tripName' >
                {/* <p>{tripName ? `${tripName}` : 'No trip selected'}</p> */}
                {tripName}
              </h1>
            </div>

            <form onSubmit={handleNext} >
              <h5 className='level_heading'>Choose duration</h5>
              {/* Dropdown for selecting the duration */}
              <select className="form-control w-100 p-3" id="duration" onChange={handleDurationChange} value={selectedDuration} required>
                <option>1 week</option>
                <option>10 Days</option>
                <option>2 weeks</option>
              </select>
              <h5 className='level_heading'>Choose one package per traveller</h5>
              {/* <div className="container-fluid">
                {levels.map((item, index) => (
                  <div className="row form_crd_row mt-4" key={index}>
                    <div className="col-md-9">
                      <div className='level_crd_text'>
                        <p className='level_crd_para'>
                          <span>
                            <b>{item.level}</b>

                          </span>{' '}
                          | <span>From € {item.price}</span>
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
                              ? 'Car Rental for Level 1 – Always Included (€100 per person)'
                              : `Add Car Rental for ${item.level} (€100 per person)`}
                          </label>
                        </div>
                      </div>

                     

                      <div className='mx-3 mb-2'>
                        <NavLink to="/form" className='moreinfo_btn'>
                          More info
                        </NavLink>
                      </div>


                    </div>

                    <div className="col-md-3">
                      <i className="fa fa-minus-circle P_M_icon " onClick={(e) => { e.preventDefault(); decrement(index); }}></i>
                      <span className='add_num'>{counts[index]}</span>
                      <i className="fa fa-plus-circle P_M_icon" onClick={(e) => { e.preventDefault(); increment(index); }} ></i>
                    </div>


                  </div>
                ))}
              </div> */}

              <div className="container-fluid">
  {zanzibarItems.length > 0 ? (
    zanzibarItems.map((item, index) => (
      <div className="row form_crd_row mt-4" key={item.item_id}>
        <div className="col-md-9">
          <div className='level_crd_text'>
            <p className='level_crd_para'>
              <span>
                <b>{item.name}</b> {/* Display the item name */}
              </span>{' '}
              | <span>Price: €{item.rate}</span> {/* Display the price */}
            </p>
          </div>

          {/* You can add additional fields from the API response here */}
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
    <p>No Zanzibar items available.</p>
  )}
</div>



              <div className='btn_container'>
                <button className="level_btn " onClick={handleNext}>
                  Continue <i className='fa fa-arrow-right'></i>
                </button>
              </div>

              {/* Button to navigate to the next page and pass data */}



            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Levels;
