import '../css/Services.css';
import { Link } from 'react-router-dom';

import service1 from '../assets/service1.webp';
import service2 from '../assets/service2.webp';
import service3 from '../assets/service3.webp';
import service4 from '../assets/service4.webp';
import service5 from '../assets/service5.webp';

const services = [
    {
        category: 'SURGERY',
        name: 'Fracture & Trauma Care',
        image: service1,
        description: 'Broken bones and injuries diagnosed and treated in one place — X-ray, plaster, fixation, and follow-up, without running between centres.',
        href: '/services/fracture-trauma-care',
        className: 'vph-srvx-fracture'
    },
    {
        category: 'SPECIALITY',
        name: 'Rheumatology & Arthritis',
        image: service2,
        description: 'Expert evaluation and treatment for arthritis, joint pain, and rheumatic conditions with personalised care.',
        href: '/services/rheumatology-arthritis',
        className: 'vph-srvx-rheumatology'
    },
    {
        category: 'ACTIVE CARE',
        name: 'Sports Medicine',
        image: service3,
        description: 'Injury assessment, recovery plans and rehabilitation to help you return to your daily activities and sports.',
        href: '/sports-medicine',
        className: 'vph-srvx-sports'
    },
    {
        category: 'DIAGNOSTICS',
        name: 'Digital X-Ray',
        image: service4,
        description: 'Convenient in-house digital X-ray facilities to support accurate diagnosis and treatment planning.',
        href: '/services/digital-xray',
        className: 'vph-srvx-xray'
    },
    {
        category: 'RECOVERY',
        name: 'Physiotherapy & Rehabilitation',
        image: service5,
        description: 'Personalised physiotherapy and rehabilitation focused on mobility, strength and recovery.',
        href: '/physiotherapy-rehabilitation',
        className: 'vph-srvx-physio'
    }
];

function ServiceCard({ service }) {
    return (
        <Link
            to={service.href}
            className={`vph-srvx-card ${service.className}`}
        >
            <img
                src={service.image}
                alt={service.name}
                className="vph-srvx-image"
            />

            <div className="vph-srvx-overlay"></div>

            <span className="vph-srvx-category">
                {service.category}
            </span>

            <div className="vph-srvx-content">

                <p className="vph-srvx-description">
                    {service.description}
                </p>

                <span className="vph-srvx-learn">
                    Learn more →
                </span>

                <h3>{service.name}</h3>

            </div>
        </Link>
    );
}

export default function Services() {
    return (
        <section className="vph-srvx-section" id="services">

            <div className="vph-srvx-container">

                <div className="vph-srvx-heading">

                    <span>WHAT WE TREAT</span>

                    <h2>What We Treat, and How</h2>

                    <p>
                        Five things, done properly. Tap any card to see what to expect.
                    </p>

                </div>

                <div className="vph-srvx-grid">

                    {services.map((service) => (
                        <ServiceCard
                            key={service.name}
                            service={service}
                        />
                    ))}

                    <div className="vph-srvx-cta">

                        <div className="vph-srvx-decoration"></div>

                        <div className="vph-srvx-cta-content">

                            <span>START HERE</span>

                            <h3>
                                Not sure which service you need?
                            </h3>

                            <p>
                                Book a consultation. Dr. Patle will examine,
                                explain what he finds, and point you down
                                the right path.
                            </p>

                            <Link to="/appointment">
                                <span>▣</span>
                                Book Appointment
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="vph-srvx-footer">

                    <Link to="/services">
                        View All Services <span>→</span>
                    </Link>

                </div>

            </div>

        </section>
    );
}