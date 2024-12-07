import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, parseISO, isSameDay, isWithinInterval } from 'date-fns';
import axios from 'axios';
import './DatePickerStyles.css';
import config from '../config/config';

const Datepicker = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    tripName,
    selectedDuration,
    counts,
    totalPrice,
    totalCount,
    levels,
    carRentalSelections,
    carRentalPrice,
    lineItems,
  } = location.state;

  console.log("levelssssssssssssssssssss", levels)

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [validDates, setValidDates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all date ranges using Axios and filter based on tripName and selectedDuration
  const fetchDateRanges = async () => {
    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/getall_date_ranges`);
      const data = response.data;

      // Filter for the selected tripName and duration
      const filteredDates = data.getAllTripDateRange
        .filter(
          (trip) => trip.tripName === tripName && trip.days === selectedDuration
        )
        .flatMap((trip) =>
          trip.dateRanges.map((range) => ({
            startDate: parseISO(range.startDate),
            endDate: parseISO(range.endDate),
            status: range.status,
          }))
        );

      setValidDates(filteredDates);
    } catch (error) {
      console.error("Error fetching date ranges:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tripName && selectedDuration) {
      fetchDateRanges();
    }
  }, [tripName, selectedDuration]);

  // Handle start date selection (only for available dates)
  const handleDateChange = (date) => {
    const selected = validDates.find(({ startDate }) => isSameDay(startDate, date));

    // Check if the selected date has an availability status
    if (selected) {
      // If the status is less than totalCount, show a message indicating availability
      if (selected.status < totalCount) {
        alert(`Only ${selected.status} are available for this date.`);
        return; // Prevent selecting the date
      }

      // If the status is sufficient, set the start date and calculate the end date
      setStartDate(date);
      const calculatedEndDate = addDays(date, getDurationInDays(selectedDuration));
      setEndDate(calculatedEndDate);
    } else {
      alert("Please select a valid date.");
    }
  };

  // Duration in days based on the selectedDuration directly
  const getDurationInDays = (selectedDuration) => {
    // Manually parsing the duration from the string (e.g., "7 days" -> 7)
    const durationInDays = parseInt(selectedDuration.split(' ')[0], 10);
    return durationInDays - 1; // Assuming the duration includes the start day
  };

  // Function to navigate to the final page with all data
  const handleNextPage = () => {
    if (startDate && endDate) {
      navigate("/checkout/room", {
        state: {
          tripName,
          selectedDuration,
          counts,
          totalPrice,
          totalCount,
          levels,
          startDate,
          endDate,
          carRentalSelections,
          carRentalPrice,
          lineItems,
        },
      });
    } else {
      alert("Please select a valid date.");
    }
  };

  // Add a custom CSS class to highlight start dates and set the status text
  const highlightStartDate = (date) => {
    const foundDate = validDates.find(({ startDate }) =>
      isSameDay(startDate, date)
    );

    if (foundDate) {
      if (foundDate.status === 0) {
        return "booked-date"; // Class for Booked
      } else if (foundDate.status >= 1 && foundDate.status <= 3) {
        return "few-left-date"; // Class for Few Left
      } else if (foundDate.status > 3) {
        return "available-date"; // Class for Available
      }
    }

    if (
      startDate &&
      endDate &&
      isWithinInterval(date, { start: startDate, end: endDate })
    ) {
      return "selected-range-date";
    }

    return ""; // Default class
  };

  return (
    <div>
      {loading ? (
        <div>Loading date ranges...</div>
      ) : (
        <div className="container-fluid level_container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 m-0 p-0">
              <div className="m-auto text-center m-0 p-0">
                <p className="text-center person_week">
                  <span>
                    {totalCount} Person/ {selectedDuration}/{" "}
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

                <div className="datepick_border"></div>
                <div className="date_visible">
                  <i className="fa fa-circle cir1" aria-hidden="true"></i>
                  <span className="date_visible_span"> Available </span>
                  <i className="fa fa-circle cir2" aria-hidden="true"></i>
                  <span className='date_visible_span'> Fully Booked</span>
                  <i className="fa fa-circle cir3" aria-hidden="true"></i>
                  <span className=''> Last spots</span>
                </div>
                <div className="datepicker_cont">
                  <div className="custom-datepicker">
                    <h2 className="cal_head mb-4">Select Start Date</h2>
                    <DatePicker
                      selected={startDate}
                      onChange={handleDateChange}
                      inline
                      monthsShown={2}
                      dateFormat="yyyy/MM/dd"
                      placeholderText="Select Start Date"
                      dayClassName={highlightStartDate}
                      className="custom-datepicker"
                    />
                  </div>
                </div>

                {startDate && endDate && (
                  <div className="fw-bold cal_head">
                    <span> {startDate.toLocaleDateString()} to </span>
                    <span> {endDate.toLocaleDateString()}</span>
                  </div>
                )}

              </div>
              <div className="btn_container">
                <button className="date_pick_btn mb-3" onClick={handleNextPage}>
                  Next
                </button>
              </div>
            </div>

            <div className="col-lg-2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Datepicker;

