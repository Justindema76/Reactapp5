import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function UserDashboard() {
    const navigate = useNavigate();
    const [error, setError] = useState(null); // Define state for error
    const loggedInUser = localStorage.getItem('loggedInUser');

    // Redirect to login page if no user is logged in
    useEffect(() => {
        if (!loggedInUser) {
            navigate('/login');
        }
    }, [loggedInUser, navigate]);

    const handleLogout = () => {
        // Remove the user from localStorage when logging out
        localStorage.removeItem('loggedInUser');
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h4 className="display-4 ">Welcome Back, {loggedInUser}!</h4>
                <p className="lead text-muted">Manage your account and explore our features.</p>
            </div>

            {/* Display error if it exists */}
            {error && (
                <div className="alert alert-danger text-center">
                    <strong>Error:</strong> {error}
                </div>
            )}

            {/* Action Buttons */}
            <div className="d-flex flex-column align-items-center gap-3">

            <Link to="/create-recipe">
                    <button className="btn btn-success btn-lg px-5 py-3 fw-bold">
                        Create a Recipe
                    </button>
            </Link>
                <button
                    className="btn btn-danger btn-lg px-5 py-3 fw-bold"
                    onClick={handleLogout}
                >
                    Logout
                </button>

                
            </div>
        </div>
    );
}

export default UserDashboard;
