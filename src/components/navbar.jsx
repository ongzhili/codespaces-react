import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleHamburgerClick = () => setOpen(!open);

    return (
        <>
            <div className="Navbar">
                <a className="navbar-title" href={`${import.meta.env.BASE_URL}`}>Ong Zhi Li's Page</a>
                <div className="spacer" />
                <div className="hamburger" onClick={handleHamburgerClick}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className={`NavbarElements${open ? ' open' : ''}`}>
                    <NavbarElement link={`${import.meta.env.BASE_URL}`}>Study Notes</NavbarElement>
                    <NavbarElement>More Coming Soon!</NavbarElement>
                    {/*<NavbarElement>navbarc</NavbarElement> */}
                </div>
            </div>
        </>
    );
}

export function NavbarElement({ link, children }) {
    function handleClick() {
        alert("Coming Soon!");
    }

    return (
        <div className="NavbarElement">
            {link ? (
                <a href={link} className="NavbarElementLink">
                    {children}
                </a>
            ) : (
                <a className="NavbarElementLink" onClick={handleClick}>
                    {children}
                </a>
            )}
        </div>
    );

}
