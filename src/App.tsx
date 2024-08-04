// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Security from './pages/Security';
import Home from './pages/Home';
import Registration from "./pages/Registration.tsx";
import Login from "./pages/Login.tsx";
import Authentication from "./pages/Authentication.tsx";
import Logout from "./pages/Logout.tsx";
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Security" element={<Security />} />
                <Route path="/Registration" element={<Registration/>} />
                <Route path="/Authentication" element={<Authentication/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Logout" element={<Logout/>} />
            </Routes>
        </Router>
    );
}

export default App;
