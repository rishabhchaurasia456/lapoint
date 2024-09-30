// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Userinfo = () => {
//     const location = useLocation();

//     const {
//         selectedDuration,
//         counts, // Number of travelers
//         countsbed,
//         roomPrices,
//         roomtype,
//         updatedTotalPrice,
//         totalCount, // Total number of travelers
//         levels,
//         startDate,
//         endDate,
//         actcounts,
//         activityDetails
//     } = location.state;

//     const [userDetails, setUserDetails] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//     });

//     const [useSameDetails, setUseSameDetails] = useState(false);

//     const [travellers, setTravellers] = useState(
//         Array.from({ length: totalCount }).map(() => ({
//             firstName: '',
//             lastName: '',
//             email: '',
//             dob: '',
//             gender: '',
//             size: ''
//         }))
//     );

//     // Handle input changes for user details
//     const handleUserChange = (field, value) => {
//         setUserDetails({ ...userDetails, [field]: value });
//         if (field === 'email' && useSameDetails) {
//             handleChange(0, 'email', value); // Update the email for traveller 1 when toggled
//         }
//     };

//     // Handle input changes for each traveler
//     const handleChange = (index, field, value) => {
//         const updatedTravellers = [...travellers];
//         updatedTravellers[index][field] = value;
//         setTravellers(updatedTravellers);
//     };

//     // Handle toggling to use same details for Traveller 1
//     const handleToggle = () => {
//         setUseSameDetails(!useSameDetails);
//         if (!useSameDetails) {
//             // Copy user details into traveller 1 when toggled on
//             handleChange(0, 'firstName', userDetails.firstName);
//             handleChange(0, 'lastName', userDetails.lastName);
//             handleChange(0, 'email', userDetails.email);
//         }
//     };

//     // Function to submit and log traveler and user data
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('User Info for Payment:', userDetails);
//         console.log('Travellers Info:', travellers);
//     };

//     // Function to generate the traveler forms based on the number of travelers (counts)
//     const renderTravellerForms = () => {
//         return travellers.map((_, index) => (
//             <div className='card my-3 p-2' key={index}>
//                 <h2 className="text-center">Traveller #{index + 1} Information</h2>
//                 <div className='row my-2'>
//                     <div className="col">
//                         <input
//                             type='text'
//                             className='form-control'
//                             placeholder='First Name'
//                             value={travellers[index].firstName}
//                             onChange={(e) => handleChange(index, 'firstName', e.target.value)}
//                             disabled={index === 0 && useSameDetails} // Disable if using same details
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type='text'
//                             className='form-control'
//                             placeholder='Last Name'
//                             value={travellers[index].lastName}
//                             onChange={(e) => handleChange(index, 'lastName', e.target.value)}
//                             disabled={index === 0 && useSameDetails} // Disable if using same details
//                         />
//                     </div>
//                 </div>
//                 <div className='row mt-2'>
//                     <div className="col">
//                         <input
//                             type='text'
//                             className='form-control'
//                             placeholder='Email'
//                             value={travellers[index].email}
//                             onChange={(e) => handleChange(index, 'email', e.target.value)}
//                             disabled={index === 0 && useSameDetails} // Disable if using same details
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type='date'
//                             className='form-control'
//                             placeholder='Date of Birth'
//                             value={travellers[index].dob}
//                             onChange={(e) => handleChange(index, 'dob', e.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <div className='row mt-2'>
//                     <div className="col-6">
//                         <label>Gender</label>
//                         <select
//                             className='form-control'
//                             value={travellers[index].gender}
//                             onChange={(e) => handleChange(index, 'gender', e.target.value)}
//                         >
//                             <option value=''>Select</option>
//                             <option value='Female'>Female</option>
//                             <option value='Male'>Male</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="row mt-2">
//                     <div className="col-6">
//                         <label>Size</label>
//                         <select
//                             className='form-control'
//                             value={travellers[index].size}
//                             onChange={(e) => handleChange(index, 'size', e.target.value)}
//                         >
//                             <option value=''>Select</option>
//                             <option value='S'>S</option>
//                             <option value='M'>M</option>
//                             <option value='L'>L</option>
//                             <option value='XL'>XL</option>
//                             <option value='XXL'>XXL</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         ));
//     };

//     return (
//         <div>
//             <div className="container">
//                 <div className="row my-5">
//                     {/* User Information Form */}
//                     <form className='card my-3 p-2'>
//                         <h2 className="text-center">User Information for Payment</h2>
//                         <div className='row my-2'>
//                             <div className="col">
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     placeholder='First Name'
//                                     value={userDetails.firstName}
//                                     onChange={(e) => handleUserChange('firstName', e.target.value)}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     placeholder='Last Name'
//                                     value={userDetails.lastName}
//                                     onChange={(e) => handleUserChange('lastName', e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                         <div className='row mt-2'>
//                             <div className="col">
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     placeholder='Email'
//                                     value={userDetails.email}
//                                     onChange={(e) => handleUserChange('email', e.target.value)}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     placeholder='Phone No'
//                                     value={userDetails.phone}
//                                     onChange={(e) => handleUserChange('phone', e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                         <div className='row mt-2'>
//                             <div className="col">
//                                 <select className='form-control'>
//                                     <option>India</option>
//                                     <option>UK</option>
//                                     <option>USA</option>
//                                 </select>
//                             </div>
//                             <div className="col">
//                                 <select className='form-control'>
//                                     <option>How did you find us</option>
//                                     <option>Kiteschool</option>
//                                     <option>Advertisement</option>
//                                     <option>Socials</option>
//                                     <option>From a friend</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </form>

//                     <div className='form-check my-3'>
//                         <input
//                             type='checkbox'
//                             className='form-check-input'
//                             id='useSameDetails'
//                             checked={useSameDetails}
//                             onChange={handleToggle}
//                         />
//                         <label className='form-check-label' htmlFor='useSameDetails'>
//                             Use the same information for Traveller 1
//                         </label>
//                     </div>

//                     {/* Render Traveller Forms */}
//                     {renderTravellerForms()}

//                     {/* Submit button */}
//                     <button className="btn btn-primary" onClick={handleSubmit}>
//                         Submit Travellers Info
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Userinfo;



// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Userinfo = () => {
//     const location = useLocation();

//     const {
//         selectedDuration,
//         counts, // Number of travelers
//         countsbed,
//         roomPrices,
//         roomtype,
//         updatedTotalPrice,
//         totalCount, // Total number of travelers
//         levels,
//         startDate,
//         endDate,
//         actcounts,
//         activityDetails // List of available activities
//     } = location.state;

//     const [userDetails, setUserDetails] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//     });

//     const [useSameDetails, setUseSameDetails] = useState(false);

//     const [travellers, setTravellers] = useState(
//         Array.from({ length: totalCount }).map(() => ({
//             firstName: '',
//             lastName: '',
//             email: '',
//             dob: '',
//             gender: '',
//             size: '',
//             selectedActivities: [] // Storing selected activities for each traveler
//         }))
//     );

//     // Handle input changes for user details
//     const handleUserChange = (field, value) => {
//         setUserDetails({ ...userDetails, [field]: value });
//         if (field === 'email' && useSameDetails) {
//             handleChange(0, 'email', value); // Update the email for traveller 1 when toggled
//         }
//     };

//     // Handle input changes for each traveler
//     const handleChange = (index, field, value) => {
//         const updatedTravellers = [...travellers];
//         updatedTravellers[index][field] = value;
//         setTravellers(updatedTravellers);
//     };

//     // Handle activity checkbox change for a traveler
//     // const handleActivityChange = (index, activity) => {
//     //     const updatedTravellers = [...travellers];
//     //     const selectedActivities = updatedTravellers[index].selectedActivities;

//     //     if (selectedActivities.includes(activity)) {
//     //         // If activity is already selected, remove it
//     //         updatedTravellers[index].selectedActivities = selectedActivities.filter(a => a !== activity);
//     //     } else {
//     //         // Otherwise, add the activity
//     //         updatedTravellers[index].selectedActivities = [...selectedActivities, activity];
//     //     }

//     //     setTravellers(updatedTravellers);
//     // };

//     // Handle activity checkbox change for a traveler
//     const handleActivityChange = (index, activity) => {
//         const updatedTravellers = [...travellers];
//         const selectedActivities = updatedTravellers[index].selectedActivities;

//         if (selectedActivities.includes(activity)) {
//             // If activity is already selected, remove it
//             updatedTravellers[index].selectedActivities = selectedActivities.filter(a => a !== activity);
//         } else {
//             // Check if the selected activities count exceeds the limit (actcounts)
//             if (selectedActivities.length < actcounts) {
//                 // Add the activity if under the limit
//                 updatedTravellers[index].selectedActivities = [...selectedActivities, activity];
//             } else {
//                 // Prevent further selections if limit is reached
//                 alert(`You can select up to ${actcounts} activities.`);
//             }
//         }

//         setTravellers(updatedTravellers);
//     };


//     // Handle toggling to use same details for Traveller 1
//     const handleToggle = () => {
//         setUseSameDetails(!useSameDetails);
//         if (!useSameDetails) {
//             // Copy user details into traveller 1 when toggled on
//             handleChange(0, 'firstName', userDetails.firstName);
//             handleChange(0, 'lastName', userDetails.lastName);
//             handleChange(0, 'email', userDetails.email);
//         }
//     };

//     // Function to submit and log traveler and user data
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('User Info for Payment:', userDetails);
//         console.log('Travellers Info:', travellers);
//     };

//     // Function to generate the traveler forms based on the number of travelers (counts)
//     const renderTravellerForms = () => {
//         return travellers.map((traveller, index) => (
//             <div className='card my-3 p-2' key={index}>
//                 <h2 className="text-center">Traveller #{index + 1} Information</h2>
//                 <div className='row my-2'>
//                     <div className="col">
//                         <input
//                             type='text'
//                             className='form-control'
//                             placeholder='First Name'
//                             value={travellers[index].firstName}
//                             onChange={(e) => handleChange(index, 'firstName', e.target.value)}
//                             disabled={index === 0 && useSameDetails} // Disable if using same details
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type='text'
//                             className='form-control'
//                             placeholder='Last Name'
//                             value={travellers[index].lastName}
//                             onChange={(e) => handleChange(index, 'lastName', e.target.value)}
//                             disabled={index === 0 && useSameDetails} // Disable if using same details
//                         />
//                     </div>
//                 </div>
//                 <div className='row mt-2'>
//                     <div className="col">
//                         <input
//                             type='text'
//                             className='form-control'
//                             placeholder='Email'
//                             value={travellers[index].email}
//                             onChange={(e) => handleChange(index, 'email', e.target.value)}
//                             disabled={index === 0 && useSameDetails} // Disable if using same details
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type='date'
//                             className='form-control'
//                             placeholder='Date of Birth'
//                             value={travellers[index].dob}
//                             onChange={(e) => handleChange(index, 'dob', e.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <div className='row mt-2'>
//                     <div className="col-6">
//                         <label>Gender</label>
//                         <select
//                             className='form-control'
//                             value={travellers[index].gender}
//                             onChange={(e) => handleChange(index, 'gender', e.target.value)}
//                         >
//                             <option value=''>Select</option>
//                             <option value='Female'>Female</option>
//                             <option value='Male'>Male</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="row mt-2">
//                     <div className="col-6">
//                         <label>Size</label>
//                         <select
//                             className='form-control'
//                             value={travellers[index].size}
//                             onChange={(e) => handleChange(index, 'size', e.target.value)}
//                         >
//                             <option value=''>Select</option>
//                             <option value='S'>S</option>
//                             <option value='M'>M</option>
//                             <option value='L'>L</option>
//                             <option value='XL'>XL</option>
//                             <option value='XXL'>XXL</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Activity checkboxes */}
//                 <div className="mt-3">
//                     <h5>Activities</h5>
//                     {activityDetails.map((activity, activityIndex) => (
//                         <div key={activityIndex} className='form-check'>
//                             <input
//                                 type='checkbox'
//                                 className='form-check-input'
//                                 id={`activity-${index}-${activityIndex}`}
//                                 checked={travellers[index].selectedActivities.includes(activity.name)}
//                                 onChange={() => handleActivityChange(index, activity.name)}
//                             />
//                             <label className='form-check-label' htmlFor={`activity-${index}-${activityIndex}`}>
//                                 {activity.name} {/* Ensure only the 'name' field of the object is rendered */}
//                             </label>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         ));
//     };

//     return (
//         <div>
//             <div className="container">
//                 <div className="row my-5">
//                     {/* User Information Form */}
//                     <form className='card my-3 p-2'>
//                         <h2 className="text-center">User Information for Payment</h2>
//                         <div className='row my-2'>
//                             <div className="col">
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     placeholder='First Name'
//                                     value={userDetails.firstName}
//                                     onChange={(e) => handleUserChange('firstName', e.target.value)}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     placeholder='Last Name'
//                                     value={userDetails.lastName}
//                                     onChange={(e) => handleUserChange('lastName', e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                         <div className='row mt-2'>
//                             <div className="col">
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     placeholder='Email'
//                                     value={userDetails.email}
//                                     onChange={(e) => handleUserChange('email', e.target.value)}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     placeholder='Phone No'
//                                     value={userDetails.phone}
//                                     onChange={(e) => handleUserChange('phone', e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                         <div className='row mt-2'>
//                             <div className="col">
//                                 <select className='form-control'>
//                                     <option>India</option>
//                                     <option>UK</option>
//                                     <option>USA</option>
//                                 </select>
//                             </div>
//                             <div className="col">
//                                 <select className='form-control'>
//                                     <option>How did you find us</option>
//                                     <option>Kiteschool</option>
//                                     <option>Advertisement</option>
//                                     <option>Socials</option>
//                                     <option>From a friend</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </form>

//                     <div className='form-check my-3'>
//                         <input
//                             type='checkbox'
//                             className='form-check-input'
//                             id='useSameDetails'
//                             checked={useSameDetails}
//                             onChange={handleToggle}
//                         />
//                         <label className='form-check-label' htmlFor='useSameDetails'>
//                             Use the same information for Traveller 1
//                         </label>
//                     </div>

//                     {/* Render Traveller Forms */}
//                     {renderTravellerForms()}

//                     {/* Submit button */}
//                     <button className="btn btn-primary" onClick={handleSubmit}>
//                         Submit Travellers Info
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Userinfo;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Userinfo = () => {
    const location = useLocation();

    const {
        selectedDuration,
        counts, // Number of travelers
        countsbed,
        roomPrices,
        roomtype,
        updatedTotalPrice,
        totalCount, // Total number of travelers
        levels,
        startDate,
        endDate,
        actcounts,
        activityDetails // List of available activities
    } = location.state;

    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const [useSameDetails, setUseSameDetails] = useState(false);

    const [travellers, setTravellers] = useState(
        Array.from({ length: totalCount }).map(() => ({
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            gender: '',
            size: '',
            selectedActivities: [] // Storing selected activities for each traveler
        }))
    );

    // State to track global selection count for each activity
    const [activitySelections, setActivitySelections] = useState(
        activityDetails.reduce((acc, activity) => {
            acc[activity.name] = 0; // Initialize count to 0 for each activity
            return acc;
        }, {})
    );

    // Handle input changes for user details
    const handleUserChange = (field, value) => {
        setUserDetails({ ...userDetails, [field]: value });
        if (field === 'email' && useSameDetails) {
            handleChange(0, 'email', value); // Update the email for traveller 1 when toggled
        }
    };

    // Handle input changes for each traveler
    const handleChange = (index, field, value) => {
        const updatedTravellers = [...travellers];
        updatedTravellers[index][field] = value;
        setTravellers(updatedTravellers);
    };

    // Handle activity checkbox change for a traveler
    const handleActivityChange = (index, activity) => {
        const updatedTravellers = [...travellers];
        const selectedActivities = updatedTravellers[index].selectedActivities;

        const activityCount = activityDetails.find(act => act.name === activity).count; // Get the count limit for this activity

        // Check if the traveler has already selected this activity
        if (selectedActivities.includes(activity)) {
            // Remove activity from the traveler's selected activities
            updatedTravellers[index].selectedActivities = selectedActivities.filter(a => a !== activity);
            // Update global selection count
            setActivitySelections({
                ...activitySelections,
                [activity]: activitySelections[activity] - 1,
            });
        } else {
            // Check if the global count for this activity exceeds the limit
            if (activitySelections[activity] < activityCount) {
                // Add activity if under the limit
                updatedTravellers[index].selectedActivities = [...selectedActivities, activity];
                // Update global selection count
                setActivitySelections({
                    ...activitySelections,
                    [activity]: activitySelections[activity] + 1,
                });
            } else {
                // Prevent further selections if limit is reached
                alert(`The activity "${activity}" can only be selected by ${activityCount} traveler(s).`);
            }
        }

        setTravellers(updatedTravellers);
    };

    // Handle toggling to use same details for Traveller 1
    const handleToggle = () => {
        setUseSameDetails(!useSameDetails);
        if (!useSameDetails) {
            // Copy user details into traveller 1 when toggled on
            handleChange(0, 'firstName', userDetails.firstName);
            handleChange(0, 'lastName', userDetails.lastName);
            handleChange(0, 'email', userDetails.email);
        }
    };

    // Function to submit and log traveler and user data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Info for Payment:', userDetails);
        console.log('Travellers Info:', travellers);
    };

    // Function to generate the traveler forms based on the number of travelers (counts)
    const renderTravellerForms = () => {
        return travellers.map((traveller, index) => (
            <div className='card my-3 p-2' key={index}>
                <h2 className="text-center">Traveller #{index + 1} Information</h2>
                <div className='row my-2'>
                    <div className="col">
                        <input
                            type='text'
                            className='form-control'
                            placeholder='First Name'
                            value={travellers[index].firstName}
                            onChange={(e) => handleChange(index, 'firstName', e.target.value)}
                            disabled={index === 0 && useSameDetails} // Disable if using same details
                        />
                    </div>
                    <div className="col">
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Last Name'
                            value={travellers[index].lastName}
                            onChange={(e) => handleChange(index, 'lastName', e.target.value)}
                            disabled={index === 0 && useSameDetails} // Disable if using same details
                        />
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className="col">
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Email'
                            value={travellers[index].email}
                            onChange={(e) => handleChange(index, 'email', e.target.value)}
                            disabled={index === 0 && useSameDetails} // Disable if using same details
                        />
                    </div>
                    <div className="col">
                        <input
                            type='date'
                            className='form-control'
                            placeholder='Date of Birth'
                            value={travellers[index].dob}
                            onChange={(e) => handleChange(index, 'dob', e.target.value)}
                        />
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className="col-6">
                        <label>Gender</label>
                        <select
                            className='form-control'
                            value={travellers[index].gender}
                            onChange={(e) => handleChange(index, 'gender', e.target.value)}
                        >
                            <option value=''>Select</option>
                            <option value='Female'>Female</option>
                            <option value='Male'>Male</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <label>Size</label>
                        <select
                            className='form-control'
                            value={travellers[index].size}
                            onChange={(e) => handleChange(index, 'size', e.target.value)}
                        >
                            <option value=''>Select</option>
                            <option value='S'>S</option>
                            <option value='M'>M</option>
                            <option value='L'>L</option>
                            <option value='XL'>XL</option>
                            <option value='XXL'>XXL</option>
                        </select>
                    </div>
                </div>

                {/* Activity checkboxes */}
                <div className="mt-3">
                    <h5>Activities</h5>
                    {activityDetails.map((activity, activityIndex) => (
                        <div key={activityIndex} className='form-check'>
                            <input
                                type='checkbox'
                                className='form-check-input'
                                id={`activity-${index}-${activityIndex}`}
                                checked={travellers[index].selectedActivities.includes(activity.name)}
                                onChange={() => handleActivityChange(index, activity.name)}
                            />
                            <label className='form-check-label' htmlFor={`activity-${index}-${activityIndex}`}>
                                {activity.name} ({activity.count} available)
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        ));
    };

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    {/* User Information Form */}
                    <form className='card my-3 p-2'>
                        <h2 className="text-center">User Information for Payment</h2>
                        <div className='row my-2'>
                            <div className="col">
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='First Name'
                                    value={userDetails.firstName}
                                    onChange={(e) => handleUserChange('firstName', e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Last Name'
                                    value={userDetails.lastName}
                                    onChange={(e) => handleUserChange('lastName', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className="col">
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Email'
                                    value={userDetails.email}
                                    onChange={(e) => handleUserChange('email', e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Phone No'
                                    value={userDetails.phone}
                                    onChange={(e) => handleUserChange('phone', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className="col">
                                <select className='form-control'>
                                    <option>India</option>
                                    <option>UK</option>
                                    <option>USA</option>
                                </select>
                            </div>
                            <div className="col">
                                <select className='form-control'>
                                    <option>How did you find us</option>
                                    <option>Kiteschool</option>
                                    <option>Advertisement</option>
                                    <option>Socials</option>
                                    <option>From a friend</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <div className='form-check my-3'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='useSameDetails'
                            checked={useSameDetails}
                            onChange={handleToggle}
                        />
                        <label className='form-check-label' htmlFor='useSameDetails'>
                            Use the same information for Traveller 1
                        </label>
                    </div>

                    {/* Render Traveller Forms */}
                    {renderTravellerForms()}

                    {/* Submit button */}
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Submit Travellers Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Userinfo;


