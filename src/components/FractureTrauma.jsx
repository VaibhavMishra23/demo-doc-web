import { useState } from "react";
import "../css/FractureTrauma.css";
import service1 from "../assets/service1.webp";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "How do I know if it's a fracture or just a sprain?",
        answer:
            "It can be difficult to distinguish a fracture from a sprain just by looking. An X-ray helps identify the injury accurately. Swelling, deformity, inability to bear weight and tenderness around a particular bone are signs that need medical attention."
    },
    {
        question: "Does every broken bone need an operation?",
        answer:
            "No. Many fractures heal successfully with plaster or other non-surgical treatment. Surgery may be recommended when a bone is displaced, unstable or when the fracture affects a joint."
    },
    {
        question: "My fracture was treated months ago but still hurts. Is that normal?",
        answer:
            "Some discomfort can continue during recovery. However, persistent or worsening pain should be evaluated. Delayed healing, incorrect bone alignment and joint stiffness can contribute to ongoing discomfort."
    },
    {
        question: "What should we do at home right after an injury?",
        answer:
            "Keep the injured area still, apply ice wrapped in a cloth and elevate the limb if possible. Avoid massage or attempting to straighten the bone. Seek emergency medical help if there is heavy bleeding or a serious injury."
    },
    {
        question: "Do you treat children's fractures?",
        answer:
            "Yes. Children's fractures require special attention because their bones are still growing. Injuries involving growth plates need careful assessment and follow-up."
    }
];

const treatments = [
    {
        number: "01",
        title: "Same-Visit X-Ray & Diagnosis",
        text: "Digital X-ray facilities help assess the injury during your consultation. The doctor examines the affected area and explains the findings and available treatment options."
    },
    {
        number: "02",
        title: "Plaster & Non-Surgical Treatment",
        text: "Many fractures can heal with a properly applied cast. The bone position is monitored through follow-up examinations and X-rays."
    },
    {
        number: "03",
        title: "Surgery When It's Needed",
        text: "Some displaced or unstable fractures require surgical fixation using plates, screws, nails or wires. The treatment plan is explained before proceeding."
    },
    {
        number: "04",
        title: "Rehabilitation After Healing",
        text: "Physiotherapy helps restore joint movement, flexibility and strength after the fracture has healed."
    }
];

const otherServices = [
    "rheumatology-arthritis",
    "sports-medicine",
    "digital-xray",
    "physiotherapy-rehabilitation"
];

export default function FractureTrauma() {
    const [activeFaq, setActiveFaq] = useState(0);

    return (
        <main className="fracture-page">

            {/* BREADCRUMB */}

            <div className="fracture-container">
                <div className="fracture-breadcrumb">
                    <Link to="/">Home</Link>
                    <span>›</span>
                    <Link to="/services">Services</Link>
                    <span>›</span>
                    <span>Fracture & Trauma Care</span>
                </div>
            </div>


            {/* HERO */}

            <section className="fracture-hero">
                <div className="fracture-container">

                    <div className="fracture-hero-content">
                        <span className="fracture-eyebrow">
                            ORTHOPAEDIC SERVICES
                        </span>

                        <h1>
                            Fracture and <br />
                            Trauma Care
                        </h1>

                        <p>
                            X-ray, diagnosis and treatment in one place.
                            Comprehensive care for bone injuries, fractures
                            and trauma.
                        </p>
                    </div>

                    <div className="fracture-hero-image">
                        <img
                            src={service1}
                            alt="Fracture and trauma treatment"
                        />
                    </div>

                </div>
            </section>


            {/* MAIN CONTENT */}

            <section className="fracture-main">
                <div className="fracture-container fracture-layout">

                    <article className="fracture-content">

                        <span className="fracture-category">
                            SURGERY
                        </span>

                        <p>
                            Fractures can happen during everyday activities,
                            sports, road accidents or even a simple fall.
                            The first few hours after an injury can be
                            confusing, and getting the right diagnosis
                            early makes a significant difference.
                        </p>

                        <p>
                            At Patle Health Care Center, fracture assessment
                            includes clinical examination and on-site
                            digital X-ray facilities. Patients can understand
                            their injury and discuss suitable treatment
                            options directly with the doctor.
                        </p>

                        <p>
                            Early and appropriate treatment helps bones
                            heal in the right position and reduces the
                            possibility of long-term stiffness, deformity
                            and discomfort.
                        </p>


                        {/* WARNING SIGNS */}

                        <div className="fracture-warning">
                            <h2>Come In Promptly If You Notice</h2>

                            <ul>
                                <li>
                                    Swelling and pain after a fall that
                                    does not improve.
                                </li>
                                <li>
                                    A limb that looks bent, shortened
                                    or unusually positioned.
                                </li>
                                <li>
                                    Difficulty putting weight on a leg
                                    or using an injured arm.
                                </li>
                                <li>
                                    A snapping or cracking sensation
                                    during an injury.
                                </li>
                                <li>
                                    Persistent pain from an old injury.
                                </li>
                                <li>
                                    Any injury in an elderly person
                                    following a fall.
                                </li>
                            </ul>
                        </div>


                        {/* TREATMENTS */}

                        <div className="fracture-treatments">

                            <h2>How We Treat Fractures Here</h2>

                            {treatments.map((item) => (
                                <div
                                    className="fracture-treatment-item"
                                    key={item.number}
                                >
                                    <span className="treatment-number">
                                        {item.number}
                                    </span>

                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}

                        </div>


                        {/* RECOVERY */}

                        <div className="fracture-recovery">
                            <h2>Recovery & What to Expect</h2>

                            <p>
                                Most fractures take around 6 to 12 weeks
                                to heal, although recovery depends on the
                                type of injury, age and overall health.
                                Regular follow-ups, proper cast care and
                                physiotherapy at the appropriate stage
                                are important parts of recovery.
                            </p>
                        </div>


                        {/* FAQ */}

                        <section className="fracture-faq">

                            <span className="fracture-eyebrow">
                                HAVE QUESTIONS?
                            </span>

                            <h2>Frequently Asked Questions</h2>

                            <div className="fracture-faq-list">

                                {faqs.map((faq, index) => (
                                    <div
                                        className={`fracture-faq-item ${
                                            activeFaq === index ? "active" : ""
                                        }`}
                                        key={index}
                                    >
                                        <button
                                            className="fracture-faq-question"
                                            onClick={() =>
                                                setActiveFaq(
                                                    activeFaq === index
                                                        ? -1
                                                        : index
                                                )
                                            }
                                        >
                                            <span>{faq.question}</span>

                                            <span className="faq-icon">
                                                {activeFaq === index ? "−" : "+"}
                                            </span>
                                        </button>

                                        <div className="fracture-faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </section>

                    </article>


                    {/* SIDEBAR */}

                    <aside className="fracture-sidebar">

                        <div className="fracture-doctor-card">

                            <span className="sidebar-label">
                                CONSULT THE SPECIALIST
                            </span>

                            <h3>Consult Dr. Sushil Kumar Patle</h3>

                            <p className="doctor-qualification">
                                M.B.B.S., D.Ortho, M.Ch. Ortho (USAIM)
                            </p>

                            <p className="doctor-fellowship">
                                Fellowship in Rheumatology
                            </p>

                            <div className="doctor-divider"></div>

                            <p className="sidebar-small-heading">
                                MP Medical Council
                            </p>

                            <p>Reg. No. 4172</p>

                            <div className="doctor-divider"></div>

                            <p className="sidebar-small-heading">
                                OPD TIMINGS
                            </p>

                            <p>Monday – Saturday</p>
                            <p>12:00 Noon – 4:00 PM</p>
                            <p>6:00 PM – 9:00 PM</p>

                            <Link
                                to="/appointment"
                                className="appointment-btn"
                            >
                                Book Appointment
                                <span>↗</span>
                            </Link>

                            <a
                                href="tel:+910000000000"
                                className="fracture-phone"
                            >
                                00000 00000
                            </a>

                        </div>


                        {/* OTHER SERVICES */}

                        <div className="fracture-other-services">

                            <h3>Other Services</h3>

                            {otherServices.map((service, index) => (
                                <Link
                                    to={`/services/${service}`}
                                    key={index}
                                >
                                    {service}
                                    <span>↗</span>
                                </Link>
                            ))}

                        </div>

                    </aside>

                </div>
            </section>

        </main>
    );
}