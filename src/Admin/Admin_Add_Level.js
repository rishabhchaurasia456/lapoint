import React, { useState } from 'react';
import axios from 'axios';

const Admin_Add_Level = () => {
  const [tripName, setTripName] = useState('');
  const [days, setDays] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data
    const data = {
      trip_name: tripName,
      days: days.split(',').map(day => day.trim()), // Convert comma-separated values into an array
    };

    try {
      // Send POST request using Axios
      const response = await axios.post('http://localhost:5500/api/admin/admin_form_level', data);
      alert(response.data.message || 'Entry added successfully!');
      setTripName('');
      setDays('');
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Failed to add entry. Please try again.');
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div>
              <label className='form-label'>Trip Name</label>
              <input
                type='text'
                className='form-control'
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='form-label'>Levels Duration in Days (comma-separated)</label>
              <input
                type='text'
                className='form-control'
                value={days}
                onChange={(e) => setDays(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Admin_Add_Level;





// import React, { useState } from 'react';
// import axios from 'axios';

// const Admin_Add_Level = () => {
//   const [tripName, setTripName] = useState('');
//   const [days, setDays] = useState([]);
//   const [dateRanges, setDateRanges] = useState([{ range: '', status: 0 }]);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle adding new days
//   const addDay = () => {
//     setDays([...days, '']);
//   };

//   // Handle day change
//   const handleDayChange = (index, value) => {
//     const updatedDays = [...days];
//     updatedDays[index] = value;
//     setDays(updatedDays);
//   };

//   // Handle removing a day
//   const removeDay = (index) => {
//     const updatedDays = days.filter((_, i) => i !== index);
//     setDays(updatedDays);
//   };

//   // Handle adding new date range
//   const addDateRange = () => {
//     setDateRanges([...dateRanges, { range: '', status: 0 }]);
//   };

//   // Handle date range change
//   const handleDateRangeChange = (index, field, value) => {
//     const updatedRanges = [...dateRanges];
//     updatedRanges[index][field] = field === 'status' ? parseInt(value, 10) : value;
//     setDateRanges(updatedRanges);
//   };

//   // Handle removing a date range
//   const removeDateRange = (index) => {
//     const updatedRanges = dateRanges.filter((_, i) => i !== index);
//     setDateRanges(updatedRanges);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       trip_name: tripName,
//       days,
//       date_ranges: dateRanges,
//     };

//     setIsSubmitting(true);

//     try {
//       const response = await axios.post('http://localhost:5500/api/admin/admin_form_level', formData);
//       if (response.status === 200) {
//         alert('Data saved successfully!');
//         setTripName('');
//         setDays([]);
//         setDateRanges([{ range: '', status: 0 }]);
//       } else {
//         alert('Failed to save data. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error saving data:', error);
//       alert('An error occurred while saving data.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Data Entry Form</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Trip Name Input */}
//         <div className="form-group">
//           <label>Trip Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={tripName}
//             onChange={(e) => setTripName(e.target.value)}
//             required
//           />
//         </div>

//         {/* Days Input */}
//         <div className="form-group">
//           <label>Days</label>
//           {days.map((day, index) => (
//             <div key={index} className="input-group mb-2">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={day}
//                 onChange={(e) => handleDayChange(index, e.target.value)}
//                 placeholder="e.g., 7 days"
//                 required
//               />
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={() => removeDay(index)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button type="button" className="btn btn-primary" onClick={addDay}>
//             Add Day
//           </button>
//         </div>

//         {/* Date Ranges Input */}
//         <div className="form-group">
//           <label>Date Ranges</label>
//           {dateRanges.map((dateRange, index) => (
//             <div key={index} className="input-group mb-2">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={dateRange.range}
//                 onChange={(e) =>
//                   handleDateRangeChange(index, 'range', e.target.value)
//                 }
//                 placeholder="e.g., 2024/11/01 - 2024/11/07"
//                 required
//               />
//               <select
//                 className="form-control"
//                 value={dateRange.status}
//                 onChange={(e) =>
//                   handleDateRangeChange(index, 'status', e.target.value)
//                 }
//               >
//                 <option value={0}>Available</option>
//                 <option value={1}>Unavailable</option>
//               </select>
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={() => removeDateRange(index)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button type="button" className="btn btn-primary" onClick={addDateRange}>
//             Add Date Range
//           </button>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-success" disabled={isSubmitting}>
//           {isSubmitting ? 'Saving...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Admin_Add_Level;

