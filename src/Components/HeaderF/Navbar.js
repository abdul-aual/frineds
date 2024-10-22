import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className="container">
                <ul className="list-container">
                    <li className="list-items"> <Link to='/all'>All Friends</Link> </li>
                    <li className="list-items"><Link to='/current'>Current Friends</Link></li>
                    <li className="list-items"><Link to='/visited'>Visited Friends</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;