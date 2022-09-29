import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <div >
                    <h1>Help Children</h1>
                    </div>
                    <h1>Donate to save lives</h1>
                    <Link to="/">Donate Now!</Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;