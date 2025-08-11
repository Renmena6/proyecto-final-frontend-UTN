import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/UserContext'; 

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { user, logout } = useAuth(); 

    const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
};

return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
        Tienda
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggleNav}
        aria-controls="navbarNav"
        aria-expanded={isNavOpen}
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">
                Home
                </Link>
                </li>
            {user && (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                    Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                    About
                    </Link>
                </li>
            </>
        )}
            </ul>

        <ul className="navbar-nav">
          {/* --- CAMBIO: Lógica para mostrar Login/Registro si no hay usuario --- */}
            {!user ? (
            <>
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
            </>
        ) : (
            // --- CAMBIO: Mostrar botón de Logout si el usuario está logueado ---
                <li className="nav-item">
                    <button onClick={logout} className="btn btn-danger">
                    Logout
                    </button>
                </li>
        )}
            </ul>
        </div>
    </nav>
);
};

export default Navbar;