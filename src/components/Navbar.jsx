import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
};

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
        Navbar
    </Link>
    <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggleNav}
        aria-controls="navbarNav"
        aria-expanded={isNavOpen}
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mr-auto">
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="/">
                Home
            </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                Login
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/registrate">
                Registrate
                </Link>
            </li>
        </ul>
    </div>
    </nav>
);
};

export default Navbar;