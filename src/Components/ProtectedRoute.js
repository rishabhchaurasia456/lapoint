import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token-info"); // Check user login

    return isAuthenticated ? children : <Navigate to="/affiliate" replace />;
};

export default ProtectedRoute;
