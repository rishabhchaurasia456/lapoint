// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import config from '../config/config';

const Admin_TripLink = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row m-2">
                    <div className="col-6">
                        <h1>All Trip Link</h1>
                    </div>
                    <div className="col-6">
                        <Link to="/admin/add/triplink" className="btn btn-success float-end">
                            Add New Trip Activity
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin_TripLink