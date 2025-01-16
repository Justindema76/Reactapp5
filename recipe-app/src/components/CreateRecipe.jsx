import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateRecipe() {
    const [title, setTitle] = useState('');
    const [recipe, setRecipe] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(''); // State for storing the error message

    const navigate = useNavigate();

    // Validation function
    const validateForm = () => {
        if (!title.trim() || !recipe.trim() || !name.trim()) {
            setError("Please fill in all fields.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // reset error message on new submission

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/create-recipe.php`, {
                title,
                recipe,
                name
            });
            console.log(response.data);

            // Reset form fields after successful submission
            setTitle('');
            setRecipe('');
            setName('');

            navigate('/');
        } catch (error) {
            console.error(error);
            setError('Failed to create recipe. Please try again later.');
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-5">
    <h2 className="text-center mb-4 text-danger">Create a New Recipe</h2>

    {error && <div className="alert alert-danger" role="alert">{error}</div>}

    <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded bg-white border">
        <div className="mb-4">
            <label htmlFor="title" className="form-label font-weight-bold">Recipe Name</label>
            <input
                type="text"
                className="form-control form-control-lg"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter your recipe name"
            />
        </div>
        
        <div className="mb-4">
            <label htmlFor="recipe" className="form-label font-weight-bold">Recipe Instructions</label>
            <textarea
                className="form-control form-control-lg"
                id="recipe"
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                required
                placeholder="Enter your recipe instructions"
                rows="6"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="name" className="form-label font-weight-bold">Your Name</label>
            <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
            />
        </div>

        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-danger btn-lg" disabled={isLoading} style={{ minWidth: "150px" }}>
                {isLoading ? (
                    <span>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Creating Recipe...
                    </span>
                ) : 'Create Recipe'}
            </button>
        </div>
    </form>
</div>

    );
}

export default CreateRecipe;
