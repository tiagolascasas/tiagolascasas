import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Layout.css';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="layout-wrapper">
            <header className="header">
                <div className="container header-container">
                    <NavLink to="/" className="logo-link" onClick={closeMenu}>
                        Tiago Lascasas Santos
                    </NavLink>

                    <div className="header-actions">
                        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                            <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
                            <NavLink to="/cv" className="nav-link" onClick={closeMenu}>CV</NavLink>
                            <NavLink to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</NavLink>
                            <NavLink to="/publications" className="nav-link" onClick={closeMenu}>Publications</NavLink>
                            <NavLink to="/blog" className="nav-link" onClick={closeMenu}>Blog</NavLink>
                        </nav>

                        <ThemeToggle />

                        <button
                            className="mobile-menu-btn"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span className="hamburger"></span>
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Tiago Lascasas. Built with React & Vite.</p>
                </div>
            </footer>
        </div>
    );
}
