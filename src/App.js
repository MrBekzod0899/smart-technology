import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Navbar from './components/NavBar'
import ViewBlog from './components/ViewBlog';
import About from './pages/About';
import GetProducts from './pages/GetProducts/GetProducts';
import Home from './pages/Home/Home'
import News from './pages/News/News';
import { ProductPage } from './pages/Product/ProductPage';
import Service from './pages/Service';

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/getproducts/:id' element={<GetProducts/>}/>
                <Route path='/product/:id' element={<ProductPage/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/news/:id' element={<ViewBlog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/service' element={<Service/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}