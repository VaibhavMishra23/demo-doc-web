import { Link } from "react-router-dom";
import "../css/ServicesPage.css";

import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";
import service4 from "../assets/service4.webp";
import service5 from "../assets/service5.webp";

const services = [
    {
        id: 1,
        category: "EMERGENCY",
        title: "Fracture & Trauma Care",
        image: service1,
        link: "/services/fracture-trauma-care",
    },
    {
        id: 2,
        category: "SPECIALTY",
        title: "Rheumatology & Arthritis",
        image: service2,
        link: "/services/rheumatology-arthritis",
    },
    {
        id: 3,
        category: "ACTIVE CARE",
        title: "Sports Medicine",
        image: service3,
        link: "/services/sports-medicine",
    },
    {
        id: 4,
        category: "DIAGNOSTICS",
        title: "Digital X-Ray",
        image: service4,
        link: "/services/digital-x-ray",
    },
    {
        id: 5,
        category: "RECOVERY",
        title: "Physiotherapy & Rehabilitation",
        image: service5,
        link: "/services/physiotherapy-rehabilitation",
    },
];

const ServicesPage = () => {
    return (
        <div className="services-page">

            {/* PAGE HEADING */}
            <section className="services-heading-section">
                <div className="services-container">

                    <div className="services-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Services</span>
                    </div>

                    <h1>Our Orthopaedic Services</h1>

                    <p>
                        Comprehensive bone and joint care — from diagnosis
                        to surgery to rehabilitation, all under one roof.
                    </p>

                    <div className="heading-underline"></div>

                </div>
            </section>


            {/* SERVICES SECTION */}
            <section className="services-main-section">
                <div className="services-container">

                    <div className="services-grid">

                        {services.map((service) => (
                            <Link
                                to={service.link}
                                className="service-card"
                                key={service.id}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                />

                                <span className="service-category">
                                    {service.category}
                                </span>

                                <div className="service-card-overlay">
                                    <h3>{service.title}</h3>
                                </div>
                            </Link>
                        ))}

                    </div>


                    {/* APPOINTMENT CTA */}
                    <div className="services-appointment-box">

                        <h2>Not sure which service you need?</h2>

                        <p>
                            Book a consultation and Dr. Patle will evaluate
                            your condition, explain the findings, and
                            recommend the right path — whether that's
                            physiotherapy, medical management, or a procedure.
                        </p>

                        <Link
                            to="/appointment"
                            className="services-appointment-btn"
                        >
                            <span>▦</span>
                            Book Appointment
                        </Link>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default ServicesPage;