import './navbar.css';
import { Dropdown } from 'react-bootstrap';
import BasicButtonExample from './navdropdown';

export default function Navbar() {
    return (
    <div className="Navbar">
        <NavbarElement>navbarge</NavbarElement>
        <NavbarElement>navbarb</NavbarElement>
        <NavbarElement>navbarc</NavbarElement>
    </div>);
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