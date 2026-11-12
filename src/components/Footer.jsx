import "../css/Footer.css";

const Footer = () => {

    const latitude = "23.1959167";
    const longitude = "79.9431389";

    const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`;

    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    return (
        <footer className="site-footer">

            <div className="footer-container">

                {/* COLUMN 1 - BRAND */}

                <div className="footer-brand">

                    <a href="/demo-doc-web" className="footer-logo">
                        <img
                            src={`${import.meta.env.BASE_URL}logo.webp`}
                            alt="Dr. Sushil Kumar Patle"
                        />
                    </a>

                    <div className="footer-registration">

                        <p>
                            <span className="footer-icon">✧</span>
                            MP Medical Council — Reg. No. 4172
                        </p>

                        <p>
                            OPD: Monday - Saturday · 12-4 PM & 6-9 PM ·
                            <span className="footer-closed">
                                Sunday Closed
                            </span>
                        </p>

                    </div>

                </div>


                {/* COLUMN 2 - EXPLORE */}

                <div className="footer-column">

                    <h3>EXPLORE</h3>

                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>

                        <li>
                            <a href="#appointment">
                                Book Appointment
                            </a>
                        </li>
                    </ul>

                </div>


                {/* COLUMN 3 - CONTACT */}

                <div className="footer-column footer-contact">

                    <h3>CONTACT</h3>

                    {/* PHONE 1 */}

                    <a
                        href="tel:+910000000000"
                        className="footer-contact-item"
                    >

                        <svg viewBox="0 0 24 24">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03z" />
                        </svg>

                        <span>00000 00000</span>

                    </a>


                    {/* PHONE 2 */}

                    <a
                        href="tel:+910000000000"
                        className="footer-contact-item"
                    >

                        <svg viewBox="0 0 24 24">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03z" />
                        </svg>

                        <span>+91 00000 00000</span>

                    </a>


                    {/* EMAIL */}

                    <a
                        href="mailto:patlehealthcare@gmail.com"
                        className="footer-contact-item"
                    >

                        <svg viewBox="0 0 24 24">
                            <rect
                                x="2"
                                y="4"
                                width="20"
                                height="16"
                                rx="2"
                            />

                            <path d="m22 7-10 7L2 7" />
                        </svg>

                        <span>patlehealthcare@gmail.com</span>

                    </a>


                    {/* ADDRESS */}

                    <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-contact-item footer-address"
                    >

                        <svg viewBox="0 0 24 24">
                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />

                            <circle
                                cx="12"
                                cy="10"
                                r="2.5"
                            />
                        </svg>

                        <span>
                            Patle Health Care Center, Main Road,
                            Adhartal, Jabalpur, M.P. 482004
                        </span>

                    </a>

                </div>


                {/* COLUMN 4 - FIND US */}

                <div className="footer-column footer-find">

                    <h3>FIND US</h3>

                    <div className="footer-map">

                        <iframe
                            title="Patle Health Care Center Location"
                            src={mapUrl}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />

                    </div>


                    {/* GET DIRECTIONS */}

                    <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-directions"
                    >

                        <svg viewBox="0 0 24 24">
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                        </svg>

                        Get Directions

                    </a>

                </div>

            </div>


            {/* BOTTOM FOOTER */}

            <div className="footer-bottom">

                <p>
                    © 2026 Patle Health Care Center. All rights reserved.
                    {" · "}

                    <a href="/privacy-policy">
                        Privacy Policy
                    </a>
                </p>

            </div>

        </footer>
    );
};

export default Footer;