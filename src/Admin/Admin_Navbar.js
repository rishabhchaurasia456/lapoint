import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Navbar = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/admin/dashboard">Kiteactive</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/admin/dashboard">Home</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="">Form</Link>
                                    </li> */}
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Form
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" to="/admin/levels">Levels</Link></li>
                                            <li><Link class="dropdown-item" to="/admin/dates">Dates</Link></li>
                                            <li><Link class="dropdown-item" to="/admin/room">Room</Link></li>
                                            <li><Link class="dropdown-item" to="/admin/activity">Activity</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Admin_Navbar