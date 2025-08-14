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
        UTN Shop
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
                Inicio
                </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                    Sobre nosotros
                    </Link>
                </li>
            {user && (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                    Gestión de Productos
                    </Link>
                </li>
            </>
        )}
            </ul>

        <ul className="navbar-nav">

            {!user ? (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                    Iniciar cesion
                </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/registrate">
                    Registrate
                    </Link>
                </li>
            </>
        ) : (
                <li className="nav-item">
                    <button onClick={logout} className="btn btn-danger">
                    Cerrar cesion
                    </button>
                </li>
        )}
            </ul>
        </div>
    </nav>
);
};

export default Navbar;