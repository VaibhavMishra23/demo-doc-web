import "../css/ContactPage.css";

const ContactPage = () => {
    return (
        <div className="contact-page">

            {/* =================================
                PAGE HEADING
            ================================= */}

            <section className="contact-heading-section">
                <div className="contact-container">

                    <div className="contact-breadcrumb">
                        <a href="/">Home</a>
                        <span>/</span>
                        <span>Contact</span>
                    </div>

                    <h1>Contact and Location</h1>

                    <p>
                        Visit Patle Health Care Center, Main Road,
                        Adhartal, Jabalpur — or reach us by phone or
                        WhatsApp.
                    </p>

                    <div className="contact-heading-line"></div>

                </div>
            </section>


            {/* =================================
                MAP SECTION
            ================================= */}

            <section className="contact-map-section">

                {/* GOOGLE MAP */}

                <div className="contact-map">
                    <iframe
                        title="Patle Health Care Center Location"
                        src="https://maps.google.com/maps?q=23.1959167,79.9431389&z=16&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    ></iframe>
                </div>


                {/* MAP OVERLAY */}

                <div className="contact-map-overlay"></div>


                {/* LEFT CONTENT */}

                <div className="contact-content-container">

                    <div className="contact-information">

                        {/* INTRO */}

                        <div className="contact-intro">

                            <span className="contact-visit-badge">
                                VISIT US
                            </span>

                            <h2>
                                Finding us is the easy part
                            </h2>

                            <p>
                                That's the clinic behind this card —
                                right on Main Road, Adhartal.
                                Here's everything you need for the visit.
                            </p>

                        </div>


                        {/* CARD 01 */}

                        <div className="contact-info-card">

                            <div className="contact-icon">
                                <span>⌖</span>
                            </div>

                            <div className="contact-card-content">

                                <h3>Patle Health Care Center</h3>

                                <p>
                                    Main Road, Adhartal, Jabalpur,
                                    M.P. 482004
                                </p>

                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=23.1959167,79.9431389"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Get Directions →
                                </a>

                            </div>

                            <span className="contact-card-number">
                                01
                            </span>

                        </div>


                        {/* CARD 02 */}

                        <div className="contact-info-card">

                            <div className="contact-icon">
                                <span>◷</span>
                            </div>

                            <div className="contact-card-content">

                                <h3>Come during OPD hours</h3>

                                <p>
                                    Afternoon: 12:00 Noon – 4:00 PM
                                </p>

                                <p>
                                    Evening: 6:00 PM – 9:00 PM
                                </p>

                                <p>
                                    Monday – Saturday
                                </p>

                                <span className="contact-closed">
                                    Sunday Closed
                                </span>

                            </div>

                            <span className="contact-card-number">
                                02
                            </span>

                        </div>


                        {/* CARD 03 */}

                        <div className="contact-info-card">

                            <div className="contact-icon">
                                <span>♧</span>
                            </div>

                            <div className="contact-card-content">

                                <h3>Rather talk to someone first?</h3>

                                <a href="tel:+910000000000">
                                    ☎ 00000 00000
                                </a>

                                <p>
                                    ☎ +91 00000 00000 (Alternate)
                                </p>

                                <a href="mailto:patlehealthcare@gmail.com">
                                    ✉ patlehealthcare@gmail.com
                                </a>

                                <a
                                    href="https://wa.me/910000000000"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ◉ WhatsApp us →
                                </a>

                            </div>

                            <span className="contact-card-number">
                                03
                            </span>

                        </div>


                        {/* CARD 04 */}

                        <div className="contact-info-card">

                            <div className="contact-icon">
                                <span>♧</span>
                            </div>

                            <div className="contact-card-content">

                                <h3>Once you're here</h3>

                                <p>
                                    Digital X-Ray and Physiotherapy Centre
                                    are in-house — most visits finish with
                                    a diagnosis and a plan, not a referral slip.
                                </p>

                            </div>

                            <span className="contact-card-number">
                                04
                            </span>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default ContactPage;