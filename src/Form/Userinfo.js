import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

    const standard_startdate = startDate.toLocaleDateString()
    const standard_endDate = endDate.toLocaleDateString()

    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        findus: '',
        tripName: tripName,
        selectedDuration: selectedDuration,
        startDate: standard_startdate,
        endDate: standard_endDate
    });

    const [useSameDetails, setUseSameDetails] = useState(false);
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);

    const [travellers, setTravellers] = useState(
        Array.from({ length: totalCount }).map(() => ({
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            country: '',
            address: '',
            city: '',
            postalcode: '',
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

        const levelNames = levels.map(level => level.name);

        // Bundle them into one object
        let data = {
            userDetails: userDetails,
            travellers: travellers,
            room: selectedRooms,
            levels: levelNames,
            totalprice: updatedTotalPrice,
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
            // start_date: startDate,
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
            standard_startdate,
            standard_endDate
        };

        try {
            // const response = await axios.post(`${config.API_BASE_URL}/api/user/send-to-zoho`, customerData);
            // console.log("Data sent to Zoho successfully", response.data);
            // googleSubmit();
            // handleBooking();
            const [zohoResponse, googleResponse, bookingResponse] = await Promise.all([
                axios.post(`${config.API_BASE_URL}/api/user/send-to-zoho`, customerData),
                googleSubmit(),
                handleBooking()
            ]);

            console.log("Data sent to Zoho successfully", zohoResponse.data);
            console.log("Data sent to Google Sheet successfully", googleResponse.data);
            console.log("Booking updated successfully", bookingResponse.data);

            // navigate('/thankyou'); // Redirect after all are done
        } catch (error) {
            console.error("Error sending data to Zoho:", error);
        }
    };

    const isButtonDisabled = (isTermsAccepted == false)

    const renderTravellerForms = () => {
        return travellers.map((traveller, index) => (
            <div className="container-fluid " style={{ backgroundColor: '#000000' }}>
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
                                    <label className="ps-3">First Name</label>
                                    <input type="text" className='w-100'
                                        placeholder='First Name' value={travellers[index].firstName}
                                        onChange={(e) => handleChange(index, 'firstName', e.target.value)} disabled={index === 0 && useSameDetails} />
                                </div>

                                <div class="col mat-input">
                                    <label className="ps-3">Last Name</label>
                                    <input type="text" className='w-100'
                                        placeholder='Last Name'
                                        value={travellers[index].lastName}
                                        onChange={(e) => handleChange(index, 'lastName', e.target.value)}
                                        disabled={index === 0 && useSameDetails} />
                                </div>

                            </div>
                            <div className='row mt-2'>
                                <div class="col mat-input">
                                    <label className="ps-3">Email</label>
                                    <input type="text" className='w-100'
                                        placeholder='Email'
                                        value={travellers[index].email}
                                        onChange={(e) => handleChange(index, 'email', e.target.value)}
                                        disabled={index === 0 && useSameDetails} // Disable if using same details 
                                    />
                                </div>

                                <div className="col mat-input">
                                    <select
                                        className='100 form-select'
                                        value={travellers[index].gender}
                                        onChange={(e) => handleChange(index, 'gender', e.target.value)}>
                                        <option value=''>Select Gender</option>
                                        <option value='Female'>Female</option>
                                        <option value='Male'>Male</option>
                                        <option value='Male'>Other</option>
                                    </select>
                                </div>
                            </div>

                            <hr className='mt-4' />
                            <div className='row mt-2'>
                                <div className="col">
                                    {/* <input
                                        type='date'
                                        className=' w-100 forDob'
                                        placeholder='Date of Birth'
                                        value={travellers[index].dob}
                                        onChange={(e) => handleChange(index, 'dob', e.target.value)}
                                    /> */}
                                    <DatePicker
                                        selected={travellers[index].dob ? new Date(travellers[index].dob) : null}
                                        onChange={(date) => handleChange(index, "dob", date ? date.toISOString().split("T")[0] : "")}
                                        placeholderText="Date of Birth"
                                        className="mat-input-fordob w-100"
                                        dateFormat="yyyy-MM-dd"
                                        portalId="root-portal" // Ensure this ID matches your app's root
                                    />
                                </div>
                                <div class="col mat-input">
                                    <label className="ps-3">Address</label>
                                    <input type="text" className='w-100'
                                        placeholder='Address' value={travellers[index].address}
                                        onChange={(e) => handleChange(index, 'address', e.target.value)} />
                                </div>
                            </div>

                            <div className='row mt-2'>
                                <div class="col mat-input">
                                    <label className="ps-3">Postal code</label>
                                    <input type="text" className='w-100'
                                        placeholder='Postal code' value={travellers[index].postalcode}
                                        onChange={(e) => handleChange(index, 'postalcode', e.target.value)} />
                                </div>
                                <div class="col mat-input">
                                    <label className="ps-3">City</label>
                                    <input type="text" className='w-100'
                                        placeholder='City' value={travellers[index].city}
                                        onChange={(e) => handleChange(index, 'city', e.target.value)} />
                                </div>
                            </div>

                            <div className='row mt-2'>
                                <div className="col mat-input">
                                    <select className='w-100 form-select'
                                        value={travellers[index].country}
                                        onChange={(e) => handleChange(index, 'country', e.target.value)}>
                                        <option value=''>Select Country</option>
                                        <option value='Afghanistan'>Afghanistan</option>
                                        <option value='Albania'>Albania</option>
                                        <option value='Algeria'>Algeria</option>
                                        <option value='Andorra'>Andorra</option>
                                        <option value='Bangladesh'>Bangladesh</option>
                                        <option value='Barbados'>Barbados</option>
                                        <option value='Belgium'>Belgium</option>
                                        <option value='Belize'>Belize</option>
                                        <option value='Bhutan'>Bhutan</option>
                                        <option value='Canada'>Canada</option>
                                        <option value='China'>China</option>
                                        <option value='Colombia'>Colombia</option>
                                        <option value='Egypt'>Egypt</option>
                                        <option value='Ethiopia'>Ethiopia</option>
                                        <option value='Estonia'>Estonia</option>
                                        <option value='Finland'>Finland</option>
                                        <option value='France'>France</option>
                                        <option value='Germany'>Germany</option>
                                        <option value='Ghana'>Ghana</option>
                                        <option value='Georgia'>Georgia</option>
                                        <option value='Guyana'>Guyana</option>
                                        <option value='Hong Kong'>Hong Kong</option>
                                        <option value='Hungary'>Hungary</option>
                                        <option value='Iceland'>Iceland</option>
                                        <option value='India'>India</option>
                                        <option value='Indonesia'>Indonesia</option>
                                        <option value='Iran'>Iran</option>
                                        <option value='Ireland'>Ireland</option>
                                        <option value='Italy'>Italy</option>
                                        <option value='Japan'>Japan</option>
                                        <option value='Jordan'>Jordan</option>
                                        <option value='Kenya'>Kenya</option>
                                        <option value='Korea'>Korea</option>
                                        <option value='Kuwait'>Kuwait</option>
                                        <option value='Liberia'>Liberia</option>
                                        <option value='Malaysia'>Malaysia</option>
                                        <option value='Maldives'>Maldives</option>
                                        <option value='Monaco'>Monaco</option>
                                        <option value='Myanmar'>Myanmar</option>
                                        <option value='Nepal'>Nepal</option>
                                        <option value='Netherlands'>Netherlands</option>
                                        <option value='New Zealand'>New Zealand</option>
                                        <option value='Nepal'>Nepal</option>
                                        <option value='Norway'>Norway</option>
                                        <option value='Oman'>Oman</option>
                                        <option value='Pakistan'>Pakistan</option>
                                        <option value='Poland'>Poland</option>
                                        <option value='Russian'>Russian</option>
                                        <option value='Saudi Arabia'>Saudi Arabia</option>
                                        <option value='South Africa'>South Africa</option>
                                        <option value='Spain'>Spain</option>
                                        <option value='Sri Lanka'>Sri Lanka</option>
                                        <option value='Tanzania'>Tanzania</option>
                                        <option value='Thailand'>Thailand</option>
                                        <option value='United Kingdom'>United Kingdom</option>
                                        <option value='USA'>USA</option>
                                        <option value='Serbia'>Serbia</option>
                                        <option value='Zimbabwe'>Zimbabwe</option>
                                    </select>
                                </div>
                                <div className="col mat-input">
                                    <select
                                        className='w-100 form-select'
                                        value={travellers[index].size}
                                        onChange={(e) => handleChange(index, 'size', e.target.value)}>
                                        <option value=''>Select Size</option>
                                        <option value='S'>S</option>
                                        <option value='M'>M</option>
                                        <option value='L'>L</option>
                                        <option value='XL'>XL</option>
                                        <option value='XXL'>XXL</option>
                                    </select>
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
            <div className="container-fluid " style={{ backgroundColor: '#000000' }}>
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
                                <span>{totalCount} Person/ {selectedDuration}/ </span>

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
            <div className="container-fluid " style={{ backgroundColor: '#000000' }}>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 card mb-3 p-3 mt-3">
                        <form className=''>
                            <h5 className="form_head">User Information for Payment</h5>
                            <div className='row'>
                                <div class="col mat-input">
                                    <label className="ps-3">First Name</label>
                                    <input id="" type="text" className='w-100' value={userDetails.firstName} placeholder="First name" onChange={(e) => handleUserChange('firstName', e.target.value)} />
                                </div>

                                <div class="col mat-input">
                                    <label className="ps-3">Last Name</label>
                                    <input id="" type="text" className='w-100' value={userDetails.lastName} placeholder="Last name" onChange={(e) => handleUserChange('lastName', e.target.value)} />
                                </div>


                            </div>
                            <div className='row mt-2'>
                                <div class="col mat-input">
                                    <label className="ps-3">Email</label>
                                    <input id="" type="text" className='w-100' value={userDetails.email} placeholder='Email' onChange={(e) => handleUserChange('email', e.target.value)} />
                                </div>


                                <div class="col mat-input">
                                    <label className="ps-3">Phone</label>
                                    <input id="" type="text" className='w-100' value={userDetails.phone} placeholder='Phone Number' onChange={(e) => handleUserChange('phone', e.target.value)} />
                                </div>

                            </div>

                        </form>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
            {/* Render Traveller Forms */}
            {renderTravellerForms()}


            <div className="container-fluid " style={{ backgroundColor: '#000000' }}>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 card">
                        <div className='row mb-2 mt-2'>
                            <div className="col mat-input">
                                <select className='w-100 form-select' value={userDetails.findus} onChange={(e) => handleUserChange('findus', e.target.value)}>
                                    <option value="">How did you find us</option>
                                    <option value="Kiteschool">Kiteschool</option>
                                    <option value="Advertisement">Advertisement</option>
                                    <option value="Socials">Socials</option>
                                    <option value="From a friend">From a friend</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>


            {/* Make reservation btn  */}
            <div className="container-fluid " style={{ backgroundColor: '#000000' }}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mt-3">
                        <input
                            type="checkbox"
                            checked={isTermsAccepted}
                            onChange={handleTermsChange}
                        />
                        <span className="ms-2 text-light fs-6">I agree to the <a href="/Term_Condition" className='text-warning' target="_blank">Terms and Conditions</a></span>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="btn_container mb-5">
                            <button
                                className="level_btn fixed-bottom"
                                onClick={handleSubmit}
                                disabled={isButtonDisabled}
                                style={{
                                    backgroundColor: isButtonDisabled ? "gray" : "#ffc800",
                                    cursor: isButtonDisabled ? "not-allowed" : "pointer",
                                    color: isButtonDisabled ? "darkgray" : "white",
                                }}
                            > Make Reservation
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


