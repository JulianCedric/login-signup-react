import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/tasks'>Tasks</Link>
        </nav>
    )
};

export default NavBar;