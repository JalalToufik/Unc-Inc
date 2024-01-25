// rafce

import { NavLink } from "react-router-dom";

import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/home"> 
                <h1>Home</h1>
            </NavLink>
            <NavLink to="/dashboard"> 
                Dashboard
            </NavLink>
            <NavLink to="/login"> 
                Login
            </NavLink>
        </nav>
    )
}

export default Navbar