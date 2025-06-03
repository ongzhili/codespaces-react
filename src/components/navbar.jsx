import './navbar.css';

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
        <a className="NavbarElement">
            {children}            
        </a>
    );
}