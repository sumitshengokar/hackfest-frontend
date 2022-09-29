import React from 'react'

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/' style={{textAlign:'center', justifyContent:'center'}}>StartYoungUK</a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/admin/overview">Admin</a></li>
                    <li><a href="/login"> Login</a></li> 
                    <li><a href="/register"> Register</a></li> 
                    <li><a href="/AboutUs">About Us</a></li>
                                   
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;