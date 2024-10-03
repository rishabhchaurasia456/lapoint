import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, parse, isSameDay } from 'date-fns';
import './DatePickerStyles.css'; // Import your custom CSS

const Datepicker = () => {
  const location = useLocation();
  const navigate = useNavigate(); // To navigate to the final page
  const { selectedDuration, counts, totalPrice, totalCount, levels } = location.state;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [validDates, setValidDates] = useState([]);

  // Sample date ranges for different durations with status
  const dateRanges = {
    "1 week": [
      { range: "2024/09/15 - 2024/09/21", status: 0 }, // Available
      { range: "2024/09/22 - 2024/09/28", status: 1 }, // Unavailable
      { range: "2024/09/29 - 2024/10/05", status: 0 },  // Available
      { range: "2024/10/01 - 2024/10/7", status: 0 },  // Available
      { range: "2024/10/13 - 2024/10/19", status: 0 },  // Available
    ],
    "10 Days": [
      { range: "2024/09/17 - 2024/09/26", status: 1 }, // Unavailable
      { range: "2024/09/27 - 2024/10/06", status: 0 }  // Available
    ],
    "2 weeks": [
      { range: "2024/09/17 - 2024/09/30", status: 0 }, // Available
      { range: "2024/10/01 - 2024/10/14", status: 1 }  // Unavailable
    ],
  };

  // Extract start dates with status
  const generateValidStartDates = (duration) => {
    const ranges = dateRanges[duration];
    let validStartDateArray = [];

    ranges.forEach(({ range, status }) => {
      const [start] = range.split(" - ");
      const startDate = parse(start, "yyyy/MM/dd", new Date());

      validStartDateArray.push({ date: startDate, status });
    });

    return validStartDateArray;
  };

  // Calculate the valid start dates based on the selected duration
  useEffect(() => {
    if (selectedDuration) {
      const validStartDatesArray = generateValidStartDates(selectedDuration);
      setValidDates(validStartDatesArray);
    }
  }, [selectedDuration]);
  

  // Handle start date selection (only for available dates)
  const handleDateChange = (date) => {
    const selected = validDates.find(({ date: validDate, status }) => isSameDay(validDate, date) && status === 0);

    if (selected) {
      setStartDate(date);
      const calculatedEndDate = addDays(date, getDurationInDays() - 1);
      setEndDate(calculatedEndDate);
    } else {
      alert('Selected date is unavailable. Please choose another date.');
    }
  };

  // Duration in days based on the previous page selection
  const getDurationInDays = () => {
    switch (selectedDuration) {
      case '1 week':
        return 7;
      case '10 Days':
        return 10;
      case '2 weeks':
        return 14;
      default:
        return 0;
    }
  };

  // Function to navigate to the final page with all data
  const handleNextPage = () => {
    if (startDate && endDate) {
      navigate('/room', {
        state: {
          selectedDuration,
          counts,
          totalPrice,
          totalCount,
          levels,
          startDate,
          endDate,
        },
      });
    } else {
      alert('Please select a valid date.');
    }
  };

  // Add a custom CSS class to start dates for highlighting (available/unavailable)
  const highlightStartDate = (date) => {
    const foundDate = validDates.find(({ date: validDate }) => isSameDay(validDate, date));

    if (foundDate) {
      if (foundDate.status === 1) {
        return 'unavailable-date';
      }
      return 'available-date';
    }
    return '';
    
  };


  
    // // Function to highlight the date range
    // const highlightStartDatea = (date) => {
    //   if (!startDate) return ""; // No highlight if no date selected
  
    //   const endDate = new Date(startDate);
    //   endDate.setDate(startDate.getDate() + 6); // Set end date to 6 days after the start date
  
    //   // Check if the current date falls within the range
    //   if (date >= startDate && date <= endDate) {
    //     return 'highlight-range'; // Add custom class if date is in range
    //   }
    //   return ''; // No class if date is outside the range
    // };




  return (
    <div>
      <div className="container-fluid level_container">
        <div className="row">

          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className='m-auto text-center  '>
              <p className='text-center person_week'>
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

              <div className='datepick_border'> </div>
              {/* <h3>Total Price: € {totalPrice}</h3> */}
              {/* Date Range Picker */}
              <div className='custom-datepicker'>
                <h2 className='cal_head mb-4'>Select Start Date</h2>
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  inline
                  monthsShown={2} // Display two months
                  dateFormat="yyyy/MM/dd"
                  placeholderText="Select Start Date"
                  dayClassName={highlightStartDate} // Add custom class to start dates
                  className="custom-datepicker" />
              </div>

              {/* date visiblity  */}
              <div className='date_visible'>
                <i class="fa fa-circle cir1" aria-hidden="true"></i>
                <span className='date_visible_span'> Available Date</span>

                <i class="fa fa-circle cir2" aria-hidden="true"></i>
                <span className=''> Booked Date</span>
              </div>


              {/* Display the selected start and end dates */}
              {startDate && endDate && (
                <div className='fw-bold cal_head '>
                  <span> {startDate.toLocaleDateString()} - </span>
                  <span> {endDate.toLocaleDateString()}</span>
                </div>
              )}

              {/* Button to navigate to the final page */}
              {/* <button  className=""></button> */}

               <div className='btn_container'>
                  <button className="level_btn mb-5 " onClick={handleNextPage}>
                  Next 
                  </button>
                </div>

            </div>
          </div>

          <div className="col-lg-2"></div>


        </div>
      </div>
    </div>
  );
};

export default Datepicker;
