import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from './pages/Products'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element=<Home/> />
                <Route path='/about' element=<About/> />
                <Route path='/contacts' element=<Contact/> />
                <Route path='/products' element=<Product/> />
            </Routes>
        </BrowserRouter>
    );
};

export default App;