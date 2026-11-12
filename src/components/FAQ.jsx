import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/FAQ.css";

const faqData = [
    {
        question: "How do I book an appointment with Dr. Patle?",
        answer:
            "You can book online through the Book Appointment page on this website — our team will call you back to confirm your slot. You can also call the clinic directly at 00000 00000 during OPD hours."
    },
    {
        question: "What are the OPD timings?",
        answer:
            "For the latest OPD timings and doctor's availability, please contact Patle Health Care Center directly at 00000 00000 before visiting."
    },
    {
        question: "Where is Patle Health Care Center located?",
        answer:
            "Patle Health Care Center is located in Jabalpur, Madhya Pradesh. You can contact the clinic for directions and assistance with reaching the center."
    },
    {
        question: "What should I bring to my first consultation?",
        answer:
            "Please bring your previous medical reports, X-ray images, prescriptions, investigation reports, and any medicines you are currently taking. This will help the doctor understand your medical history."
    },
    {
        question: "Can I get an X-ray done at the clinic?",
        answer:
            "Yes, Digital X-Ray services are available at the clinic to help with the diagnosis and assessment of bone and joint conditions."
    },
    {
        question: "Is physiotherapy available at the same clinic?",
        answer:
            "Yes, physiotherapy and rehabilitation services are available to support recovery, improve mobility, and help patients regain strength after injuries or surgery."
    },
    {
        question: "Does Dr. Patle treat arthritis as well as injuries?",
        answer:
            "Yes, Dr. Patle provides consultation and treatment for various bone, joint, and musculoskeletal conditions, including arthritis, fractures, and sports-related injuries."
    },
    {
        question: "Do I need a referral to consult?",
        answer:
            "No, you generally do not need a referral to book a consultation. You can directly schedule an appointment with Dr. Patle."
    },
    {
        question: "What happens after I submit the online booking form?",
        answer:
            "After submitting the appointment form, our team will review your details and contact you by phone to confirm your appointment date and time."
    },
    {
        question: "What if I need urgent care outside OPD hours?",
        answer:
            "If you need urgent medical attention, please contact the clinic directly. For serious or life-threatening emergencies, visit the nearest emergency department immediately."
    }
];

const services = [
    "Fracture & Trauma Care",
    "Rheumatology & Arthritis",
    "Sports Medicine",
    "Digital X-Ray",
    "Physiotherapy & Rehabilitation"
];

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page">

            {/* FAQ HEADER */}

            <section className="faq-hero">

                <div className="faq-container">

                    <div className="faq-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>›</span>
                        <span className="current">FAQ</span>
                    </div>

                    <h1>Frequently Asked Questions</h1>

                    <p>
                        Common questions about appointments, treatments,
                        timings, and what to expect at the clinic.
                    </p>

                    <div className="faq-title-line"></div>

                </div>

            </section>


            {/* FAQ QUESTIONS */}

            <section className="faq-content">

                <div className="faq-container">

                    <div className="faq-list">

                        {faqData.map((faq, index) => (

                            <div
                                className={`faq-item ${
                                    activeIndex === index ? "active" : ""
                                }`}
                                key={index}
                            >

                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={activeIndex === index}
                                >

                                    <span>{faq.question}</span>

                                    <span className="faq-arrow"></span>

                                </button>


                                <div
                                    className={`faq-answer-wrapper ${
                                        activeIndex === index ? "show" : ""
                                    }`}
                                >

                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* TREATMENT QUESTIONS CTA */}

                    <div className="faq-cta">

                        <h2>
                            Looking for treatment-specific questions?
                        </h2>

                        <p>
                            Each service page has its own FAQ section covering
                            that treatment in detail:
                        </p>


                        <div className="faq-service-links">

                            {services.map((service, index) => (

                                <Link
                                    to={`/services/${[
                                        "fracture-trauma-care",
                                        "rheumatology-arthritis",
                                        "sports-medicine",
                                        "digital-xray",
                                        "physiotherapy-rehabilitation"
                                    ][index]}`}
                                    key={index}
                                >
                                    {service}
                                </Link>

                            ))}

                        </div>


                        <Link to="/appointment" className="faq-book-btn">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="5" width="18" height="16" rx="2" />
                                <path d="M16 3v4M8 3v4M3 11h18" />
                                <path d="m9 16 2 2 4-4" />
                            </svg>

                            Book Appointment

                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default FAQ;