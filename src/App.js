import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Navbar from './components/NavBar'
import Products from './components/Product/Products';
import Home from './pages/Home/Home'
import { ProductPage } from './pages/Product/ProductPage';
export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/getproducts/:id' element={<Products/>}/>
                <Route path='/product/:id' element={<ProductPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}