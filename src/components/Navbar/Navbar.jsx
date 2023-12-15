import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <Link to='/' style={{textDecoration:'none'}}><h3>FARID</h3></Link>
            </div>
            <div className="nav-items">
                <Link to='about'  style={{textDecoration:'none'}}><a className="nav-item">ABOUT</a></Link>
                <Link to='products' style={{textDecoration:'none'}}><a className="nav-item">PRODUCTS</a></Link>
                <Link to='contacts' style={{textDecoration:'none'}}><a className="nav-item">CONTACT</a></Link>
            </div>
        </div>
    );
};

export default Navbar;