import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchfilter = () => {
    const [anyTime, setAnyTime] = useState('');
    const [chooseStyle, setChooseStyle] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/kitecamp?anyTime=${anyTime}&chooseStyle=${chooseStyle}`);
    };
    return (

        // filter css in herosection.css 


        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="select_box_div">
                        <div className="inputbox_row d-flex justify-content-center align-items-center">
                            <div className="col mat-input d-flex justify-content-center">
                                <select
                                    className="form-select w-50"
                                    value={anyTime}
                                    onChange={(e) => setAnyTime(e.target.value)}
                                >
                                    <option value="">Any Time</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>

                                <select
                                    className="form-select w-50"
                                    value={chooseStyle}
                                    onChange={(e) => setChooseStyle(e.target.value)}
                                >
                                    <option value="">Choose Style</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="Beginner paradise">Beginner paradise</option>
                                    <option value="Weekender">Weekender</option>
                                    <option value="Featured">Featured</option>
                                </select>
                            </div>
                            <button onClick={handleSearch} className="searchbtn">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchfilter;