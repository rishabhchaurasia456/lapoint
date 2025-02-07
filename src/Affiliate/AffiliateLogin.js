import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import config from '../config/config';

const AffiliateLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // To handle navigation

    useEffect(() => {
        // If the user is already logged in, redirect to the home page
        const token = localStorage.getItem("token-info");
        if (token) {
            navigate("/affiliate/home"); 
        }
    }, [navigate]);

    const handleusername = (e) => setEmail(e.target.value);
    const handlepassword = (e) => setPassword(e.target.value);

    const submitLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);

        // Prepare the login data
        const userData = {
            email,
            password,
        };

        try {
            // Send POST request to the backend using Axios
            const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/affiliate_login`, userData);
            console.log(response)

            // Check if login was successful
            if (response.status === 200) {
                // If successful, store token in localStorage
                localStorage.setItem("token-info", JSON.stringify(response.data.token)); // Save token from response
                localStorage.setItem("AffiliateuserId", JSON.stringify(response.data.user._id)); // Save token from response
                setIsLoggedin(true);
                // setEmail("");
                // setPassword("");
                setError(null); // Reset error message
                navigate('/affiliate/home'); // Redirect to the dashboard or home page
                window.location.reload();
            }
        } catch (err) {
            // Handle error response from backend
            console.error("Login error:", err);
            if (err.response) {
                // If response was received but with error status
                setError(err.response.data.message || "Login failed"); // Set error message from API
            } else {
                // If no response or network error
                setError("An error occurred while trying to log in.");
            }
            setIsLoggedin(false); // Ensure logged-in state is false if error occurs
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1 className='mt-5'>Affiliate Login</h1>
                        <div className="card p-5 mt-5">
                            <form onSubmit={submitLogin}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" onChange={handleusername} id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" onChange={handlepassword} id="password" placeholder="Password" />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button><br/>
                            </form>
                            <Link className="text-center" to="/register-affiliate" >Become an Affiliate? Register with us</Link>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

        </div>
    )
}

export default AffiliateLogin