import { useState } from 'react';
import { NavLink, Link, useLocation, Outlet } from 'react-router-dom';
import { FileText, GraduationCap, FolderGit2, BookOpen, User, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Layout.css';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const [prevPath, setPrevPath] = useState(location.pathname);
    if (prevPath !== location.pathname) {
        setPrevPath(location.pathname);
        setIsMenuOpen(false);
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="layout-wrapper">
            <header className="header no-print">
                <div className="container header-container">
                    <NavLink to="/" className="brand-link" onClick={closeMenu}>
                        <span className="brand-name">Tiago Lascasas Santos</span>
                    </NavLink>

                    <div className="header-actions">
                        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                                <span>Home</span>
                            </NavLink>

                            <NavLink to="/resume" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                                <FileText size={16} className="nav-icon" />
                                <span>Résumé</span>
                            </NavLink>

                            <NavLink to="/cv" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                                <GraduationCap size={16} className="nav-icon" />
                                <span>Curriculum Vitae</span>
                            </NavLink>

                            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                                <FolderGit2 size={16} className="nav-icon" />
                                <span>Projects</span>
                            </NavLink>

                            <NavLink to="/publications" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                                <BookOpen size={16} className="nav-icon" />
                                <span>Publications</span>
                            </NavLink>

                            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                                <User size={16} className="nav-icon" />
                                <span>About Me</span>
                            </NavLink>
                        </nav>

                        <ThemeToggle />

                        <button
                            className="mobile-menu-btn"
                            onClick={toggleMenu}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            <main className="main-content">
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer className="footer no-print">
                <div className="container footer-container">
                    <div className="footer-left">
                        <p className="footer-title">Tiago Lascasas Santos</p>
                        {/* <p className="footer-subtitle">Faculty of Engineering, University of Porto (FEUP) & INESC TEC</p> */}
                    </div>
                    <div className="footer-links">
                        <Link to="/resume">Résumé</Link>
                        <span className="dot">•</span>
                        <Link to="/cv">Curriculum Vitae</Link>
                        <span className="dot">•</span>
                        <Link to="/projects">Projects</Link>
                        <span className="dot">•</span>
                        <Link to="/publications">Publications</Link>
                        <span className="dot">•</span>
                        <Link to="/about">About Me</Link>
                    </div>
                    <p className="footer-copy">© {new Date().getFullYear()} Tiago Lascasas Santos.</p>
                </div>
            </footer>
        </div>
    );
}
