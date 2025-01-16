import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { useNavigate, Link } from 'react-router-dom';

function UserDashboard() {
    const navigate = useNavigate();
    const [error, setError] = useState(null); // Define state for error
    const loggedInUser = localStorage.getItem('loggedInUser');

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
            <h2 className="text-center mb-4">Welcome, {loggedInUser}</h2>

            {/* Display error if it exists */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Logout Button */}
            <div className="d-flex justify-content-center mb-4">
                <button className="btn btn-primary btn-lg" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            {/* Link to Create Recipe Page */}
            <div className="d-flex justify-content-center">
                <Link to="/create-recipe">
                    <button className="btn btn-success btn-lg">
                        Create a Recipe
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default UserDashboard;
