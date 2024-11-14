import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, parse, isSameDay, isWithinInterval } from 'date-fns';
import './DatePickerStyles.css'; // Import your custom CSS

const Datepicker = () => {
  const location = useLocation();
  const navigate = useNavigate(); // To navigate to the final page
  const { selectedDuration, counts, totalPrice, totalCount, levels, carRentalSelections, carRentalPrice, lineItems } = location.state;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [validDates, setValidDates] = useState([]);

  // Sample date ranges for different durations with status
  const dateRanges = {
    "7 Days": [
      { range: "2024/11/01 - 2024/11/07", status: 0 },
      { range: "2024/11/08 - 2024/11/14", status: 0 },
      { range: "2024/11/15 - 2024/11/21", status: 0 },
      { range: "2024/11/22 - 2024/11/28", status: 0 },
      { range: "2024/11/29 - 2024/12/05", status: 0 },
      { range: "2024/12/06 - 2024/12/12", status: 0 },
      { range: "2024/12/13 - 2024/12/19", status: 0 },
      { range: "2024/12/20 - 2024/12/26", status: 0 },
      { range: "2024/12/27 - 2025/01/02", status: 0 },
      { range: "2025/01/03 - 2025/01/10", status: 0 },
    ],
    "10 Days": [
      { range: "2024/11/01 - 2024/11/10", status: 0 },
      { range: "2024/11/11 - 2024/11/20", status: 0 },
      { range: "2024/11/21 - 2024/11/30", status: 0 },
      { range: "2024/12/01 - 2024/12/10", status: 0 },
      { range: "2024/12/11 - 2024/12/20", status: 0 },
      { range: "2024/12/21 - 2024/12/30", status: 0 },
      { range: "2024/12/31 - 2025/01/09", status: 0 },

    ],
    "14 Days": [
      { range: "2024/11/01 - 2024/11/14", status: 0 },
      { range: "2024/11/15 - 2024/11/28", status: 0 },
      { range: "2024/11/29 - 2024/12/03", status: 0 },
      { range: "2024/12/13 - 2024/12/26", status: 0 },
      { range: "2024/12/27 - 2025/01/09", status: 0 },
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
      case '7 Days':
        return 7;
      case '10 Days':
        return 10;
      case '14 Days':
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
          carRentalSelections,
          carRentalPrice, 
          lineItems
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

    if (startDate && endDate && isWithinInterval(date, { start: startDate, end: endDate })) {
      return 'selected-range-date';
    }
    return '';


  };
  return (
    <div>
      <div className="container-fluid level_container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 m-0 p-0">
            <div className='m-auto text-center m-0 p-0 '>
              <p className='text-center person_week'>
                <span>{totalCount} Person, {selectedDuration}, </span>
                {/* Show details for each level where count is > 0 */}
                {levels.map((item, index) => (
                  counts[index] > 0 && (
                    <span key={index}>
                      <span>
                        <b>{item.level}, </b>
                        {/* | Count: {counts[index]} | Price: € {counts[index] * item.price} */}
                      </span>
                    </span>
                  )
                ))}
              </p>

              <div className='datepick_border'> </div>
              {/* <h3>Total Price: € {totalPrice}</h3> */}
              {/* Date Range Picker */}
              <div className='datepicker_cont'>
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
