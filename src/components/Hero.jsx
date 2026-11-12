import '../css/Hero.css';
import doctorImage from '../assets/doctor.webp';

export default function Hero() {
    return (
        <section className="hero-section" id="home">

            {/* Background Decoration */}
            <div className="hero-bg-pattern"></div>

            <div className="hero-container">

                {/* LEFT CONTENT */}
                <div className="hero-content">

                    {/* Availability Badge */}
                    <div className="hero-badge">
                        <span className="hero-status-dot"></span>
                        Accepting Appointments
                    </div>

                    {/* Heading */}
                    <h1 className="hero-title">
                        <span>Expert Bone & Joint</span>
                        <span>Care</span>
                        <span className="hero-title-dark">
                            in Jabalpur
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="hero-description">
                        From a broken bone to long-standing joint pain —
                        get a clear diagnosis and an honest treatment plan,
                        at one clinic in Adhartal.
                    </p>

                    {/* Qualifications */}
                    <div className="hero-qualifications">
                        <span>M.B.B.S.</span>
                        <span>D.Ortho</span>
                        <span>M.Ch. Ortho (USAIM)</span>
                        <span>Fellowship in Rheumatology</span>
                    </div>

                    {/* Buttons */}
                    <div className="hero-buttons">

                        <a href="#appointment" className="hero-btn-primary">

                            <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="5" width="18" height="16" rx="2" />
                                <path d="M16 3v4M8 3v4M3 11h18M9 16l2 2 4-4" />
                            </svg>

                            Book Appointment
                        </a>

                        <a href="tel:+910000000000" className="hero-btn-outline">

                            <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z" />
                            </svg>

                            Call Now
                        </a>

                    </div>

                    {/* Trust Information */}
                    <div className="hero-trust">

                        <div className="hero-rating">
                            <span className="hero-stars">★★★★★</span>
                            <span>4.8/5 (9 reviews)</span>
                        </div>

                        <div className="hero-trust-divider"></div>

                        <div className="hero-registration">
                            <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2">
                                <path d="M12 2l2.5 2 3.2.2 1.2 3 2.1 2.5-1.1 3 1.1 3-2.1 2.5-1.2 3-3.2.2L12 22l-2.5-2-3.2-.2-1.2-3L3 14.3l1.1-3L3 8.8l2.1-2.5 1.2-3 3.2-.2L12 2z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>

                            MPMC Reg. No. 4172
                        </div>

                    </div>

                </div>


                {/* RIGHT IMAGE */}
                <div className="hero-image-wrapper">

                    <div className="hero-image-card">

                        {/* UPDATE YOUR IMAGE PATH HERE */}
                        <img
                            src={doctorImage}
                            alt="Dr. Sushil Kumar Patle - Orthopaedic Surgeon"
                            className="hero-doctor-image"
                        />

                        {/* Doctor Information Card */}
                        <div className="hero-doctor-info">

                            <div className="hero-doctor-top">

                                <div>
                                    <h3>Dr. Sushil Kumar Patle</h3>
                                    <p>Consultant Orthopaedic Surgeon</p>
                                </div>

                                <div className="hero-doctor-rating">
                                    <span>★</span> 4.8
                                </div>

                            </div>

                            <div className="hero-doctor-timing">

                                <svg viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 7v5l3 2" />
                                </svg>

                                <span>Mon-Sat · 12-4 & 6-9 PM</span>

                                <span className="hero-closed">
                                    · Sun closed
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}