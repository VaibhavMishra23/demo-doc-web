import "../css/MainAbout.css";
import doctor from "../assets/doctor.webp";

const AboutDoctor = () => {
    return (
        <div className="about-page">

            <section className="about-hero">

                <div className="about-container">

                    <div className="about-breadcrumb">
                        <a href="/demo-doc-web">Home</a>
                        <span>›</span>
                        <span>About</span>
                    </div>

                    <h1>
                        <span>About</span> Dr. Sushil Kumar Patle
                    </h1>

                    <p>
                        M.B.B.S., D.Ortho, M.Ch. Ortho (USAIM) ·
                        Fellowship in Rheumatology
                    </p>

                    <div className="about-title-line"></div>

                </div>

            </section>


            {/* =========================
                DOCTOR PROFILE SECTION
            ========================= */}

            <section className="doctor-profile-section">

                <div className="about-container">

                    <div className="doctor-profile-grid">

                        {/* LEFT - DOCTOR IMAGE CARD */}

                        <div className="doctor-image-card">

                            <div className="doctor-image-wrapper">

                                <img
                                    src={doctor}
                                    alt="Dr. Sushil Kumar Patle"
                                />

                            </div>

                            <div className="doctor-image-info">

                                <div>
                                    <h3>Dr. Sushil Kumar Patle</h3>

                                    <p>
                                        Consultant Orthopaedic Surgeon
                                    </p>
                                </div>

                                <div className="doctor-verified">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M12 2.5l2.5 1.2 2.8-.1 1.3 2.4 2.4 1.3-.1 2.8L22 12.5l-1.2 2.5.1 2.8-2.4 1.3-1.3 2.4-2.8-.1L12 22.5l-2.5-1.2-2.8.1-1.3-2.4L3 17.7l.1-2.8L2 12.5l1.2-2.5-.1-2.8 2.4-1.3 1.3-2.4 2.8.1z" />
                                        <path d="m8.5 12.2 2.2 2.2 4.8-4.8" />
                                    </svg>
                                </div>

                            </div>

                        </div>


                        {/* RIGHT - DOCTOR INFORMATION */}

                        <div className="doctor-details">

                            <span className="doctor-eyebrow">
                                THE DOCTOR
                            </span>

                            <h2>
                                Orthopaedic surgery and rheumatology
                                expertise, together in one practice
                            </h2>

                            <div className="doctor-description">

                                <p>
                                    Dr. Sushil Kumar Patle is a Consultant
                                    Orthopaedic Surgeon at Patle Health Care
                                    Center, Adhartal, Jabalpur. He is trained
                                    with an M.B.B.S., D.Ortho, and M.Ch. Ortho
                                    (USAIM), and also holds a Fellowship in
                                    Rheumatology. This means he can treat both
                                    bone injuries that need surgery and joint
                                    problems like arthritis that need medicines.
                                    The clinic has its own digital X-ray and
                                    physiotherapy centre, so most patients get
                                    their check-up, treatment, and recovery care
                                    at one place.
                                </p>

                                <p>
                                    He learned his craft under two doctors who
                                    each went on to lead Indian orthopaedics as
                                    <strong>
                                        {" "}President of the Indian Orthopaedic
                                        Association
                                    </strong>
                                    {" "}— Dr. H. K. T. Raza, and Dr. Sudhir
                                    Babhulkar of Nagpur. Training under teachers
                                    of that level shaped the way he examines,
                                    treats, and explains.
                                </p>

                                <p>
                                    At most clinics, you have to choose between
                                    a bone surgeon and a joint physician. At
                                    Patle Health Care Center, you get both in
                                    the same room — so the advice you receive
                                    depends on what your joint actually needs,
                                    not on which doctor you happened to visit
                                    first.
                                </p>

                            </div>


                            {/* INFORMATION CARDS */}

                            <div className="doctor-info-grid">

                                {/* QUALIFICATIONS */}

                                <div className="doctor-info-card qualifications-card">

                                    <h4>QUALIFICATIONS</h4>

                                    <ul>

                                        <li>
                                            <span className="check-icon">✓</span>
                                            M.B.B.S.
                                        </li>

                                        <li>
                                            <span className="check-icon">✓</span>
                                            D.Ortho
                                        </li>

                                        <li>
                                            <span className="check-icon">✓</span>
                                            M.Ch. Ortho (USAIM)
                                        </li>

                                        <li>
                                            <span className="check-icon">✓</span>
                                            Fellowship in Rheumatology
                                        </li>

                                    </ul>

                                </div>


                                {/* RIGHT SIDE CARDS */}

                                <div className="doctor-side-cards">

                                    {/* REGISTRATION */}

                                    <div className="doctor-info-card registration-card">

                                        <h4>REGISTRATION</h4>

                                        <h3>
                                            MP Medical Council — Reg. No. 4172
                                        </h3>

                                        <p>
                                            Healthcare Professional ID:
                                            71-4611-1664-8583
                                        </p>

                                    </div>


                                    {/* OPD TIMINGS */}

                                    <div className="doctor-info-card opd-card">

                                        <h4>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            >
                                                <circle cx="12" cy="12" r="9" />
                                                <path d="M12 7v5l3 2" />
                                            </svg>

                                            OPD · MONDAY - SATURDAY
                                        </h4>

                                        <p>
                                            12:00 Noon - 4:00 PM ·
                                            6:00 PM - 9:00 PM
                                        </p>

                                        <span>Sunday Closed</span>

                                    </div>

                                </div>

                            </div>


                            {/* BOOK CONSULTATION */}

                            <a
                                href="/appointment"
                                className="doctor-consultation-btn"
                            >

                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        x="3"
                                        y="5"
                                        width="18"
                                        height="16"
                                        rx="2"
                                    />
                                    <path d="M16 3v4M8 3v4M3 11h18" />
                                    <path d="m9 16 2 2 4-4" />
                                </svg>

                                Book a Consultation

                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default AboutDoctor;