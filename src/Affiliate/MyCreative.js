// import React, { useState, useEffect } from 'react';

// const MyCreative = () => {
//     const [selectedOption, setSelectedOption] = useState(""); // Track selected option
//     const [persons, setPersons] = useState([]); // Store persons data
//     const [selectedPerson, setSelectedPerson] = useState(""); // Track selected person

//     // Fetch persons data from the API when the component mounts
//     useEffect(() => {
//         fetch('http://localhost:3001/contact') // Your API endpoint
//             .then(response => response.json())
//             .then(data => {
//                 console.log('API Response:', data); // Inspect API response
//                 setPersons(data); // Access the 'contact' array
//             })
//             .catch(error => console.error('Error fetching persons:', error));
//     }, []);

//     const changebox = (event) => {
//         const value = event.target.value;
//         setSelectedOption(value); // Update the selected option in state
//     }

//     const handlePersonChange = (event) => {
//         const selectedId = event.target.value;
//         setSelectedPerson(selectedId); // Update selected person in state
//         console.log("Selected person ID:", selectedId); // Log the selected person ID
//     }

//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-3"></div>
//                     <div className="col-md-6">
//                         <div className="row mt-5">
//                             <div className="col-4">Person</div>
//                             <div className="col-8">
//                                 <select 
//                                     className='form-control'
//                                     value={selectedPerson}
//                                     onChange={handlePersonChange}
//                                 >
//                                     <option value="">Select Person</option>
//                                     {persons.length > 0 ? (
//                                         persons.map(person => (
//                                             <option key={person.id} value={person.id}>
//                                                 {person.first_name} {person.last_name}
//                                             </option>
//                                         ))
//                                     ) : (
//                                         <option disabled>Loading...</option>
//                                     )}
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="row mt-5">
//                             <div className="col-4">Name</div>
//                             <div className="col-8">
//                                 <input type='text' className='form-control' />
//                             </div>
//                         </div>
//                         <div className="row mt-5">
//                             <div className="col-4">Landing Page Link</div>
//                             <div className="col-8">
//                                 <input type='text' className='form-control' id=''/>
//                             </div>
//                         </div>
//                         <div className="row mt-5">
//                             <div className="col-4">Type</div>
//                             <div className="col-8">
//                                 <select className='form-control' onChange={changebox}>
//                                     <option value="">Select Type</option>
//                                     <option value="image">Image</option>
//                                     <option value="text_link">Text Link</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Image container - only shown when 'image' is selected */}
//                         {selectedOption === 'image' && (
//                             <div className="row mt-5" id="image_container">
//                                 <div className="row mt-5">
//                                     <div className="col-4">Image Link</div>
//                                     <div className="col-8">
//                                         <input type='text' className='form-control' />
//                                     </div>
//                                 </div>
//                                 <div className="row mt-5">
//                                     <div className="col-4">Alt text</div>
//                                     <div className="col-8">
//                                         <input type='text' className='form-control' />
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {/* Text link container - only shown when 'text_link' is selected */}
//                         {selectedOption === 'text_link' && (
//                             <div className="row mt-5" id="link_container">
//                                 <div className="row mt-5">
//                                     <div className="col-4">Text Link</div>
//                                     <div className="col-8">
//                                         <input type='text' className='form-control' value={{}}/>
//                                     </div>
//                                 </div>
//                                 <div className="row mt-5">
//                                     <div className="col-4">Alt text</div>
//                                     <div className="col-8">
//                                         <input type='text' className='form-control' />
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                     <div className="col-md-3"></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MyCreative;

import React, { useState, useEffect } from 'react';

const MyCreative = () => {
    const [selectedOption, setSelectedOption] = useState(""); // Track selected option
    const [persons, setPersons] = useState([]); // Store persons data, initialized as an empty array
    const [selectedPerson, setSelectedPerson] = useState(""); // Track selected person
    const [landingPageLink, setLandingPageLink] = useState(""); // Track Landing Page Link
    const [generatedLink, setGeneratedLink] = useState(""); // Store the generated link

    // Fetch persons data from the API when the component mounts
    useEffect(() => {
        fetch('http://localhost:3001/contact') // Your API endpoint
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data); // Inspect API response
                if (data) {
                    setPersons(data); // Access the 'contact' array only if it exists
                }
            })
            .catch(error => console.error('Error fetching persons:', error));
    }, []);

    const changebox = (event) => {
        const value = event.target.value;
        setSelectedOption(value); // Update the selected option in state
    }

    const handlePersonChange = (event) => {
        const selectedId = event.target.value;
        setSelectedPerson(selectedId); // Update selected person in state
        console.log("Selected person ID:", selectedId); // Log the selected person ID
    }

    const handleLandingPageChange = (event) => {
        setLandingPageLink(event.target.value); // Update landing page link in state
    }

    // Function to generate new link using selected person ID and Landing Page Link
    const generateNewLink = () => {
        if (selectedPerson && landingPageLink) {
            const newLink = `${landingPageLink}?id=${selectedPerson}`;
            setGeneratedLink(newLink); // Set the generated link
        } else {
            alert("Please select a person and provide a Landing Page Link!");
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="row mt-5">
                            <div className="col-4">Person</div>
                            <div className="col-8">
                                <select 
                                    className='form-control'
                                    value={selectedPerson}
                                    onChange={handlePersonChange}
                                >
                                    <option value="">Select Person</option>
                                    {persons && persons.length > 0 ? (
                                        persons.map(person => (
                                            <option key={person.id} value={person.id}>
                                                {person.first_name} {person.last_name}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>Loading...</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-4">Name</div>
                            <div className="col-8">
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        {/* <div className="row mt-5">
                            <div className="col-4">Landing Page Link</div>
                            <div className="col-8">
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    value={landingPageLink}
                                    onChange={handleLandingPageChange} // Capture Landing Page Link
                                />
                            </div>
                        </div> */}
                        <div className="row mt-5">
                            <div className="col-4">Type</div>
                            <div className="col-8">
                                <select className='form-control' onChange={changebox}>
                                    <option value="">Select Type</option>
                                    <option value="image">Image</option>
                                    <option value="text_link">Text Link</option>
                                </select>
                            </div>
                        </div>

                        {/* Image container - only shown when 'image' is selected */}
                        {selectedOption === 'image' && (
                            <div className="row mt-5" id="image_container">
                                <div className="row mt-5">
                                    <div className="col-4">Image Link</div>
                                    <div className="col-8">
                                        <input type='text' className='form-control' />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-4">Alt text</div>
                                    <div className="col-8">
                                        <input type='text' className='form-control' />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Text link container - only shown when 'text_link' is selected */}
                        {selectedOption === 'text_link' && (
                            
                            <div className="row mt-5">
                                <div className="col-4">Landing Page Link</div>
                                <div className="col-8">
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        value={landingPageLink}
                                        onChange={handleLandingPageChange} // Capture Landing Page Link
                                    />
                                </div>
                            </div>
                            
                        )}

                        <div className="row mt-5">
                            <div className="col-8">
                                <button className='btn btn-primary' onClick={generateNewLink}>
                                    Generate New Link
                                </button>
                            </div>
                        </div>

                        {generatedLink && (
                            <div className="row mt-5">
                                <div className="col-4">Generated Link</div>
                                <div className="col-8">
                                    <p>{generatedLink}</p> {/* Display the generated link */}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
}

export default MyCreative;
