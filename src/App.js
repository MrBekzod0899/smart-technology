import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/NavBar'
import Home from './pages/Home'
export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}