import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreateRecipe from './components/CreateRecipe';
import Post from './components/Post';
import PostList from './components/PostList';
import Register from './components/Register';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<PostList />} />
            <Route path="/create-recipe" element={<CreateRecipe />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-dashboard" element={<UserDashboard />} /> {/* New route */}
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;