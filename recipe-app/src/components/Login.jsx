import React, { useState, useEffect } from 'react'; // Import useEffect
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    // Check if the user is already logged in and redirect to the dashboard
    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser'); // Get logged-in user from localStorage
        if (loggedInUser) {
            navigate('/user-dashboard'); // Redirect if already logged in
        }
    }, [navigate]); // Only rerun when navigate changes

    const validateForm = () => {
        if (!email.trim() || !password.trim()) {
            setError('Please fill in both email and password.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
  
        if (!validateForm()) {
            return;
        }
  
        setIsLoading(true);
  
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/login.php`, {
                email, password
            });
            console.log(response.data);
  
            setIsLoading(false);
  
            if (response.data.success) {
                // Store the username/email in localStorage
                localStorage.setItem('loggedInUser', email);
  
                setSuccess('Login successful!');
                setTimeout(() => {
                    navigate('/user-dashboard'); // Redirect to the new user dashboard page
                }, 1500);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setIsLoading(false);
            setError('Login failed. Please try again later.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Login</h2>

            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded bg-white border">
                <div className="mb-4">
                    <label htmlFor="email" className="form-label font-weight-bold">Email Address</label>
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="form-label font-weight-bold">Password</label>
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
