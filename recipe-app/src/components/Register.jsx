import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    // Validation function
    const validateForm = () => {
        if (!username.trim() || !email.trim() || !password.trim() || password !== confirmPassword) {
            setError("Please fill in all fields and make sure passwords match.");
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
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/register.php`, {
                username, email, password
            });
            console.log(response.data);

            // Reset form fields after successful submission
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            setIsLoading(false);
            if (response.data.success) {
                setSuccess('Registration successful! You are now logged in.');

                // Simulate user login: store authentication token
                const { token, user } = response.data;  // Assuming response contains a token and user data
                localStorage.setItem('authToken', token); // Store token in localStorage
                localStorage.setItem('user', JSON.stringify(user)); // Optionally store user data
                // Set user state if needed (e.g., via context or Redux)

                // Redirect to a logged-in page (e.g., dashboard or home)
                navigate('/dashboard');  // Adjust the path as needed for your app
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setIsLoading(false);
            setError('Registration failed. Please try again later.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-danger">Create an Account</h2>

            {error && <div className="alert alert-success">{error}</div>}
            {success && (
                <div className="alert alert-danger"> {/* Changed to success alert */}
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded bg-white border">
                <div className="mb-4">
                    <label htmlFor="username" className="form-label font-weight-bold">Username</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

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

                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label font-weight-bold">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-danger btn-lg" disabled={isLoading}>
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
