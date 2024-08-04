// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Security from './pages/Security';
import Home from './pages/Home'; // Import Home component if it exists

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/security" element={<Security />} />
                {/* Add more routes here as needed */}
            </Routes>
        </Router>
    );
}

export default App;
