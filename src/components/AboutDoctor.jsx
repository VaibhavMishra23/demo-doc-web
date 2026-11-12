import '../css/AboutDoctor.css';

const reasons = [
    {
        number: '01',
        icon: 'graduation',
        title: 'Qualified — and Verifiable',
        description:
            "MP Medical Council Reg. No. 4172 — check it on the council register. We'd encourage you to."
    },
    {
        number: '02',
        icon: 'award',
        title: 'A Surgeon Who Also Treats Arthritis',
        description:
            'Fellowship-trained in rheumatology — so arthritis gets medicines and monitoring when that works better than surgery.'
    },
    {
        number: '03',
        icon: 'building',
        title: 'Everything at One Address',
        description:
            'Consultation, X-ray, plaster, physiotherapy — no being sent across town mid-treatment.'
    },
    {
        number: '04',
        icon: 'users',
        title: 'Straight Answers',
        description:
            "If you don't need surgery, you'll be told exactly that. If you do, you'll understand why first."
    }
];

function CardIcon({ type }) {
    const common = {
        width: 21,
        height: 21,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
    };

    return (
        <svg {...common}>
            {type === 'graduation' && <>
                <path d="m2 9 10-5 10 5-10 5L2 9Z" />
                <path d="M6 11v5c3.5 2.5 8.5 2.5 12 0v-5" />
                <path d="M22 9v6" />
            </>}

            {type === 'award' && <>
                <circle cx="12" cy="8" r="5" />
                <path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9" />
            </>}

            {type === 'building' && <>
                <rect x="5" y="3" width="14" height="18" rx="1.5" />
                <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
            </>}

            {type === 'users' && <>
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </>}
        </svg>
    );
}

function AboutDoctor() {
    return (
        <section className="about-doctor">

            <div className="about-heading">
                <span className="about-eyebrow">
                    ABOUT THE DOCTOR
                </span>

                <h2>
                    Why Patients Choose Dr.
                    <br />
                    Sushil Kumar Patle
                </h2>

                <p className="about-subtitle">
                    Qualifications matter — but so does how you're treated when you walk in worried.
                </p>
            </div>

            <p className="about-description">
                Dr. Sushil Kumar Patle is a Consultant Orthopaedic Surgeon at Patle Health Care Center,
                Adhartal, Jabalpur. He is trained with an M.B.B.S., D.Ortho, and M.Ch. Ortho (USAIM),
                and also holds a Fellowship in Rheumatology. This means he can treat both bone injuries
                that need surgery and joint problems like arthritis that need medicines. The clinic has
                its own digital X-ray and physiotherapy centre, so most patients get their check-up,
                treatment, and recovery care at one place.
            </p>

            <div className="about-cards">
                {reasons.map((item) => (
                    <div className="about-card" key={item.number}>

                        <span className="card-number">
                            {item.number}
                        </span>

                        <div className="card-icon">
                            <CardIcon type={item.icon} />
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        {item.number === '03' && (
                            <span className="card-learn">
                                Learn more <span>→</span>
                            </span>
                        )}

                    </div>
                ))}
            </div>

        </section>
    );
}

export default AboutDoctor;
