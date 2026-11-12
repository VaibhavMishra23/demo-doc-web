import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../css/Navbar.css';

import surgery from '../assets/surgery.webp';
import diagnostics from '../assets/diagnostics.webp';
import active_care from '../assets/active_care.webp';
import recovery from '../assets/recovery.webp';
import speciality from '../assets/speciality.webp';

const services = [
    {
        category: 'SURGERY',
        name: 'Fracture & Trauma Care',
        image: surgery,
        href: 'services/fracture-trauma-care',
    },
    {
        category: 'SPECIALITY',
        name: 'Rheumatology & Arthritis',
        image: speciality,
        href: 'services/rheumatology-arthritis',
    },
    {
        category: 'ACTIVE CARE',
        name: 'Sports Medicine',
        image: active_care,
        href: 'services/sports-medicine',
    },
    {
        category: 'DIAGNOSTICS',
        name: 'Digital X-Ray',
        image: diagnostics,
        href: 'services/digital-xray',
    },
    {
        category: 'RECOVERY',
        name: 'Physiotherapy & Rehabilitation',
        image: recovery,
        href: 'services/physiotherapy-rehabilitation',
    },
];

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setServicesOpen(false);
    };

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>

            <div className="navbar-container">

                {/* Logo */}
                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={closeMenu}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}logo.webp`}
                        alt="Dr. Sushil Kumar Patle"
                    />
                </Link>


                {/* Desktop Navigation */}
                <nav className="desktop-nav">

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/aboutdoctor"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        About
                    </NavLink>


                    {/* Services Mega Menu */}
                    <div className="nav-dropdown">

                        <button
                            type="button"
                            className="nav-link dropdown-trigger"
                        >
                            Services
                            <span className="dropdown-arrow"></span>
                        </button>

                        <div className="dropdown-menu">

                            <div className="mega-menu-grid">

                                {services.map((service) => (

                                    <Link
                                        to={`/${service.href}`}
                                        className="mega-menu-item"
                                        key={service.name}
                                    >

                                        <img
                                            src={service.image}
                                            alt={service.name}
                                        />

                                        <div className="mega-menu-content">

                                            <span>
                                                {service.category}
                                            </span>

                                            <h4>
                                                {service.name}
                                            </h4>

                                        </div>

                                    </Link>

                                ))}

                                {/* View All Services */}
                                <Link
                                    to="/services"
                                    className="mega-menu-cta"
                                >
                                    View All Services
                                    <span>⟶</span>
                                </Link>

                            </div>

                        </div>

                    </div>


                    <NavLink
                        to="/gallery"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Gallery
                    </NavLink>

                    <NavLink
                        to="/faq"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        FAQ
                    </NavLink>

                    <NavLink
                        to="/contact"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </NavLink>

                </nav>


                {/* Desktop Actions */}
                <div className="navbar-actions">

                    <a
                        href="tel:+910000000000"
                        className="navbar-phone"
                    >

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z" />
                        </svg>

                        00000 00000

                    </a>


                    <Link
                        to="/appointment"
                        className="appointment-btn"
                    >
                        Book Appointment
                    </Link>

                </div>


                {/* Mobile Hamburger */}
                <button
                    type="button"
                    className={`mobile-menu-btn ${menuOpen ? 'is-open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={
                        menuOpen
                            ? 'Close navigation menu'
                            : 'Open navigation menu'
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>


            {/* Mobile Navigation */}
            <nav
                id="mobile-navigation"
                className={`mobile-nav ${menuOpen ? 'show' : ''}`}
            >

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                    onClick={closeMenu}
                >
                    Home
                </NavLink>


                <NavLink
                    to="/aboutdoctor"
                    end
                    className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                    onClick={closeMenu}
                >
                    About
                </NavLink>


                {/* Mobile Services Dropdown */}
                <div className="mobile-services">

                    <button
                        type="button"
                        className="mobile-nav-link mobile-services-btn"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        aria-expanded={servicesOpen}
                    >

                        Services

                        <span
                            className={`dropdown-arrow ${servicesOpen ? 'rotated' : ''}`}
                        ></span>

                    </button>


                    <div
                        className={`mobile-services-list ${servicesOpen ? 'expanded' : ''}`}
                    >

                        {services.map((service) => (

                            <Link
                                to={`/${service.href}`}
                                key={service.name}
                                onClick={closeMenu}
                            >
                                {service.name}
                            </Link>

                        ))}

                    </div>

                </div>


                <NavLink
                    to="/gallery"
                    end
                    className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                    onClick={closeMenu}
                >
                    Gallery
                </NavLink>

                <NavLink
                    to="/faq"
                    end
                    className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                    onClick={closeMenu}
                >
                    FAQ
                </NavLink>

                <NavLink
                    to="/contact"
                    end
                    className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                    onClick={closeMenu}
                >
                    Contact
                </NavLink>


                {/* Mobile Phone */}
                <a
                    href="tel:+910000000000"
                    className="mobile-phone"
                >
                    Call: 00000 00000
                </a>


                {/* Mobile Appointment */}
                <Link
                    to="/appointment"
                    onClick={closeMenu}
                    className="appointment-btn mobile-appointment"
                >
                    Book Appointment
                </Link>

            </nav>

        </header>
    );
}