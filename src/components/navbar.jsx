import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleHamburgerClick = () => setOpen(!open);

    return (
        <>
            <div className="Navbar">
                <a className="navbar-title" href="/">Ong Zhi Li's Page</a>
                <div className="spacer" />
                <div className="hamburger" onClick={handleHamburgerClick}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className={`NavbarElements${open ? ' open' : ''}`}>
                    <NavbarElement>navbarge</NavbarElement>
                    <NavbarElement>navbarb</NavbarElement>
                    <NavbarElement>navbarc</NavbarElement>
                </div>
            </div>
        </>
    );
}

export function NavbarElement({children}) {
    return (
        <div className="NavbarElement" onClick={handleClick}>
            <a>
                {children}            
            </a>
        </div>
    );
}

function handleClick() {
    alert("clicked!");
}