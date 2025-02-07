import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Aff_Navbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token-info");
        localStorage.removeItem("AffiliateuserId");
        navigate("/affiliate");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Kiteactive Affiliate</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/affiliate/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/affiliate/creative">My Creative</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button> */}
                            <button className='btn btn-danger' onClick={logout}>Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Aff_Navbar