

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Userinfo = () => {
    const location = useLocation();

    const {
        selectedDuration,
        counts,
        // countsbed,
        // roomPrices,
        // roomtype,
        // updatedTotalPrice,
        totalCount, // Total number of travelers
        levels,
        startDate,
        endDate,
        // actcounts,
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

    // State to track global selection count for each level
    const [levelSelections, setLevelSelections] = useState(
        levels.reduce((acc, level, index) => {
            acc[level.level] = 0; // Initialize count to 0 for each level
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

    // Handle level selection for a traveler
    const handleLevelChange = (index, levelName) => {
        const updatedTravellers = [...travellers];
        const previousLevel = updatedTravellers[index].selectedLevel; // Store the previously selected level

        const levelIndex = levels.findIndex(level => level.level === levelName); // Find the level by name
        const levelCount = counts[levelIndex]; // Get the count limit for this level

        // Check if the new level is different from the previously selected level
        if (previousLevel !== levelName) {
            // First, check if the new level is within the allowed count
            if (levelSelections[levelName] < levelCount) {
                // Update the traveler's level
                updatedTravellers[index].selectedLevel = levelName;

                // Adjust the global level selections
                const newLevelSelections = { ...levelSelections };

                // If the traveler had a previously selected level, decrease its count
                if (previousLevel) {
                    newLevelSelections[previousLevel] -= 1;
                }

                // Increase the count for the newly selected level
                newLevelSelections[levelName] += 1;

                // Update the state
                setTravellers(updatedTravellers);
                setLevelSelections(newLevelSelections);
            } else {
                // Prevent further selections if the limit for the new level is reached
                alert(`The level "${levelName}" can only be selected by ${levelCount} traveler(s).`);
            }
        }
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

    const renderTravellerForms = () => {
        return travellers.map((traveller, index) => (

            <div className="container-fluid level_container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 card mb-3 p-4">
                        <h5 className="form_head">Traveller #{index + 1} Information</h5>

                        <div className='form-check my-3'>
                            <input type='checkbox' className='form-check-input' id='useSameDetails' checked={useSameDetails} onChange={handleToggle} />
                            <label className='form-check-label' htmlFor='useSameDetails'>
                                Use the same information for Traveller 1
                            </label>
                        </div>

                        <div className='' key={index}>
                            <div className='row my-2'>
                                <div class="col mat-input">
                                    <label for="">First Name</label>
                                    <input type="text" className='w-100'
                                        placeholder='First Name' value={travellers[index].firstName}
                                        onChange={(e) => handleChange(index, 'firstName', e.target.value)} disabled={index === 0 && useSameDetails} />
                                </div>

                                <div class="col mat-input">
                                    <label for="">Last Name</label>
                                    <input type="text" className='w-100'
                                        placeholder='Last Name'
                                        value={travellers[index].lastName}
                                        onChange={(e) => handleChange(index, 'lastName', e.target.value)}
                                        disabled={index === 0 && useSameDetails} />
                                </div>

                            </div>
                            <div className='row mt-2'>

                                <div class="col mat-input">
                                    <label for="">Email</label>
                                    <input type="text" className='w-100'
                                        placeholder='Email'
                                        value={travellers[index].email}
                                        onChange={(e) => handleChange(index, 'email', e.target.value)}
                                        disabled={index === 0 && useSameDetails} // Disable if using same details 
                                    />
                                </div>



                                <div className="col mat-input">
                                    <input
                                        type='date'
                                        className=' w-100'
                                        placeholder='Date of Birth'
                                        value={travellers[index].dob}
                                        onChange={(e) => handleChange(index, 'dob', e.target.value)}
                                    />
                                </div>
                            </div>

                            <hr className='mt-4' />


                            <div className='row mt-2'>

                                <div className="col-6 mat-input">
                                    <h5 className='form_head'>Gender</h5>
                                    <select
                                        className='100'
                                        value={travellers[index].gender}
                                        onChange={(e) => handleChange(index, 'gender', e.target.value)}>
                                        {/* <option value=''>Gender</option> */}
                                        <option value='Female'>Female</option>
                                        <option value='Male'>Male</option>
                                    </select>
                                </div>                      
                            </div>

                            <div className="row mt-2">
                                <div className="col-6 mat-input">
                                    <h5 className='form_head'>Size</h5>     
                                    <select
                                        className='w-100'
                                        value={travellers[index].size}
                                        onChange={(e) => handleChange(index, 'size', e.target.value)}>
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


                            {/* {/ Level selection /} */}

                            <div className="mt-3">
                                <h5>Levels</h5>
                                {levels.map((level, levelIndex) => (
                                    <div key={levelIndex} className='form-check'>
                                        <input
                                            type='radio'
                                            className='form-check-input'
                                            id={`level-${index}-${levelIndex}`}
                                            checked={travellers[index].selectedLevel === level.level}
                                            onChange={() => handleLevelChange(index, level.level)}
                                        />
                                        <label className='form-check-label' htmlFor={`level-${index}-${levelIndex}`}>
                                            {level.level} (Limit: {counts[levelIndex]})
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2"></div>
                </div>
            </div>

        ));
    };

    return (
        <div>
            <div className="container-fluid level_container">
                <div className="row">
                    <div className="col text-center">
                        <div className=" person_week">
                            {/* <p><b>Selected Duration:</b> {selectedDuration}</p> */}
                            {startDate && endDate && (
                                <div>
                                    <span> {startDate.toLocaleDateString()} - </span>
                                    <span> {endDate.toLocaleDateString()}</span>
                                </div>
                            )}
                            <p>
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
                        </div>
                        <div className="datepick_border"> </div>
                    </div>
                </div>

            </div>


            <div className="row level_container">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <form className='card mb-3 p-4'>
                        <h5 className="form_head">User Information for Payment</h5>
                        <div className='row'>

                            <div class="col mat-input">
                                <label for="">First Name</label>
                                <input id="" type="text" className='w-100' value={userDetails.firstName} placeholder="First name" onChange={(e) => handleUserChange('firstName', e.target.value)} />
                            </div>

                            <div class="col mat-input">
                                <label for="">Last Name</label>
                                <input id="" type="text" className='w-100' value={userDetails.lastName} placeholder="Last name" onChange={(e) => handleUserChange('lastName', e.target.value)} />
                            </div>


                        </div>
                        <div className='row mt-2'>

                            <div class="col mat-input">
                                <label for="">Email</label>
                                <input id="" type="text" className='w-100' value={userDetails.email} placeholder='Email' onChange={(e) => handleUserChange('email', e.target.value)} />
                            </div>


                            <div class="col mat-input">
                                <label for="">Phone</label>
                                <input id="" type="text" className='w-100' value={userDetails.phone} placeholder='Phone Number' onChange={(e) => handleUserChange('phone', e.target.value)} />
                            </div>

                        </div>
                        <div className='row mt-2'>

                            <div className="col mat-input">
                                <select className='w-100'>
                                    <option>Select Country</option>
                                    <option>India</option>
                                    <option>UK</option>
                                    <option>USA</option>
                                </select>
                            </div>


                            <div className="col mat-input">
                                <select className='w-100'>
                                    <option>How did you find us</option>
                                    <option>Kiteschool</option>
                                    <option>Advertisement</option>
                                    <option>Socials</option>
                                    <option>From a friend</option>
                                </select>
                            </div>


                        </div>
                    </form>


                </div>
                <div className="col-lg-2"></div>
            </div>


            {/* Render Traveller Forms */}
            {renderTravellerForms()}


            <div className="container-fluid level_container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className='btn_container mb-5'>
                            <button className="level_btn " onClick={handleSubmit}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Userinfo;


