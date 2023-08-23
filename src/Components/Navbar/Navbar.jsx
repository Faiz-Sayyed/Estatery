import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { BsHouseHeart } from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">

                <a
                    href="/"
                    className="navbar-logo">
                    <BsHouseHeart />
                    <div style={{ marginLeft: "0.3rem" }}>
                        Estatery
                    </div>
                </a>

                <NavLink
                    to="/rent"
                    className="navbar-links">
                    Rent
                </NavLink>

                <NavLink
                    to="/buy"
                    className="navbar-links">
                    Buy
                </NavLink>

                <NavLink
                    to="/sell"
                    className="navbar-links">
                    Sell
                </NavLink>

                <div
                    className="navbar-links">
                    <div style={{ marginRight: "0.3rem" }}>
                        Manage Property
                    </div>
                    <IoIosArrowDown />
                </div>

                <div
                    className="navbar-links">
                    <div style={{ marginRight: "0.3rem" }}>
                        Resources
                    </div>
                    <IoIosArrowDown />
                </div>

            </div>

            <div className="navbar-right">

                <div
                    className="navbar-right-login">
                    Login
                </div>

                <div
                    className="navbar-right-signup">
                    Sign up
                </div>

            </div>
        </div >
    )
}

export default Navbar