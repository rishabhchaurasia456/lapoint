import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';


const Userinfo = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        tripName,
        selectedDuration,
        counts,
        // countsbed,
        // roomPrices,
        selectedRooms,
        updatedTotalPrice,
        totalCount,
        levels,
        startDate,
        endDate,
        // actcounts,
        activityDetails, // List of available activities
        lineItems,
        carRentalPrice,
        discountAmount
    } = location.state;

    console.log("updatedTotalPriceeeeeeeeeeeeeeeeeeeeeeeeee", updatedTotalPrice)
    console.log("discountAmounttttttttttttttttttttttttttttt", discountAmount)
    console.log("line itemssssssssss", lineItems)
    console.log("roomtypeeeeeeeeeeeeeeeeeeeee", selectedRooms)
    console.log("zoho_senttttttttttttttttttttttttttt", carRentalPrice)
    const datestatus = {
        tripName,
        startDate,
        selectedDuration,
        totalCount
    }
    console.log("datestatussss", datestatus)
    const handleBooking = async () => {
        const bookingData = {
            tripName,
            startDate,
            selectedDuration,
            totalCount
        };
      
        try {
          const response = await axios.post(`${config.API_BASE_URL}/api/user/update-seats`, bookingData);
          console.log('Status updated successfully:', response.data);
        } catch (error) {
          console.error('Error updating status:', error.response?.data || error.message);
        }
      };


    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const [useSameDetails, setUseSameDetails] = useState(false);
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);

    const [travellers, setTravellers] = useState(
        Array.from({ length: totalCount }).map(() => ({
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            address: '',
            city: '',
            pincode: '',
            gender: '',
            size: '',
        }))
    );

    const handleTermsChange = (e) => {
        setIsTermsAccepted(e.target.checked);
    };

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

    const handleToggle = () => {
        setUseSameDetails(!useSameDetails);
        if (!useSameDetails) {
            // Copy user details into traveller 1 when toggled on
            handleChange(0, 'firstName', userDetails.firstName);
            handleChange(0, 'lastName', userDetails.lastName);
            handleChange(0, 'email', userDetails.email);
        }
    };


    const googleSubmit = async () => {

        // Bundle them into one object
        let data = {
            userDetails: userDetails,
            travellers: travellers
        };
        console.log("ddddddddddddddd", data)
        try {
            // Send the data to the backend
            const gresponse = await axios.post(`${config.API_BASE_URL}/api/user/send-to-sheet`, data);
            console.log("Data sent to sheet successfully", gresponse.data);

            if (gresponse.status === 200) {
                console.log('Listing added successfully:', gresponse.data);
                navigate('/thankyou');
            }

        } catch (error) {
            // Log any errors for debugging
            console.error("Error sending data to sheet:", error.response?.data || error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const customerData = {
            contact_name: `${userDetails.firstName} ${userDetails.lastName}`,
            company_name: 'Your Company Name',  // Replace with actual company name
            contact_persons: [
                {
                    first_name: userDetails.firstName,
                    last_name: userDetails.lastName,
                    email: userDetails.email,
                    phone: userDetails.phone
                }
            ],

            line_items: lineItems.map(item => ({
                item_id: item.item_id, // Use the item ID from lineItems
                quantity: item.quantity,  // Use the quantity from lineItems
                rate: item.rate,  // Use the rate from lineItems
            })),

            activityDetails,
            selectedRooms,
            carRentalPrice,
            totalCount,
            discountAmount,
        };

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/user/send-to-zoho`, customerData);
            console.log("Data sent to Zoho successfully", response.data);
            googleSubmit();
        } catch (error) {
            console.error("Error sending data to Zoho:", error);
        }
    };


    const renderTravellerForms = () => {
        return travellers.map((traveller, index) => (
            <div className="container-fluid level_container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 card mb-3 p-4">
                        <h5 className="form_head">Traveller #{index + 1} Information</h5>
                        <div className='d-flex mt-2'>
                            <div>
                                <label class="switch">
                                    <input type='checkbox' className='form-check-input' id='useSameDetails' checked={useSameDetails} onChange={handleToggle} />
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className='mx-2'>
                                <p>  Use the same information for Traveller 1</p>
                            </div>
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
                                <div className="col mat-input">
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
                                <div className="col mat-input">
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

                            <div className='row mt-2'>
                                <div class="col mat-input">
                                    <label for="">Address</label>
                                    <input type="text" className='w-100'
                                        placeholder='Address' value={travellers[index].address}
                                        onChange={(e) => handleChange(index, 'address', e.target.value)} />
                                </div>
                                <div class="col mat-input">
                                    <label for="">City</label>
                                    <input type="text" className='w-100'
                                        placeholder='City' value={travellers[index].city}
                                        onChange={(e) => handleChange(index, 'city', e.target.value)} />
                                </div>
                            </div>

                            <div className='row mt-2'>
                                <div class="col-6 mat-input">
                                    <label for="">Pincode</label>
                                    <input type="text" className='w-100'
                                        placeholder='Pincode' value={travellers[index].pincode}
                                        onChange={(e) => handleChange(index, 'pincode', e.target.value)} />
                                </div>
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

            {/* show selected trip data by user   */}

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
                                <span>{totalCount} Person, {selectedDuration}, </span>

                                {/* Show details for each level where count is > 0 */}
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
                            <div className="datepick_border"> </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* user information form  */}
            <div className="container-fluid level_container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 card mb-3 p-3 mt-3">
                        <form className=''>
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
                                        <option>Afghanistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                        <option>Andorra</option>
                                        <option>Bangladesh</option>
                                        <option>Barbados</option>
                                        <option>Belgium</option>
                                        <option>Belize</option>
                                        <option>Bhutan</option>
                                        <option>Canada</option>
                                        <option>China</option>
                                        <option>Colombia</option>
                                        <option>Egypt</option>
                                        <option>Ethiopia</option>
                                        <option>Estonia</option>
                                        <option>Finland</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                        <option>Ghana</option>
                                        <option>Georgia</option>
                                        <option>Ghana</option>
                                        <option>Guyana</option>
                                        <option>Hong Kong</option>
                                        <option>Hungary</option>
                                        <option>Iceland</option>
                                        <option>India</option>
                                        <option>Indonesia</option>
                                        <option>Iran</option>
                                        <option>Ireland</option>
                                        <option>Italy</option>
                                        <option>Japan</option>
                                        <option>Jordan</option>
                                        <option>Kenya</option>
                                        <option>Korea</option>
                                        <option>Kuwait</option>
                                        <option>Liberia</option>
                                        <option>Malaysia</option>
                                        <option>Maldives</option>
                                        <option>Monaco</option>
                                        <option>Myanmar</option>
                                        <option>Nepal</option>
                                        <option>Netherlands</option>
                                        <option>New Zealand</option>
                                        <option>Nepal</option>
                                        <option>Norway</option>
                                        <option>Oman</option>
                                        <option>Pakistan</option>
                                        <option>Poland</option>
                                        <option>Russian</option>
                                        <option>Saudi Arabia</option>
                                        <option>South Africa</option>
                                        <option>Spain</option>
                                        <option>Sri Lanka</option>
                                        <option>Tanzania</option>
                                        <option>Thailand    </option>
                                        <option>United Kingdom</option>
                                        <option>USA</option>
                                        <option>Serbia</option>
                                        <option>Zimbabwe</option>

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
            </div>
            {/* Render Traveller Forms */}
            {renderTravellerForms()}


            {/* Make reservation btn  */}
            <div className="container-fluid level_container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <input
                            type="checkbox"
                            checked={isTermsAccepted}
                            onChange={handleTermsChange}
                        />
                        <span className="ms-2">I agree to the <a href="/Term_Condition" target="_blank">Terms and Conditions</a></span>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className='btn_container mb-5'>
                            {/* Conditionally render the button based on isTermsAccepted */}
                            {isTermsAccepted ? (
                                <button className="level_btn" onClick={handleBooking}>
                                    Make Reservation
                                </button>
                            ) : null} {/* Button is not rendered if isTermsAccepted is false */}
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>




        </div>
    );
};

export default Userinfo;


