import { useState, useEffect } from 'react';
import '../css/PatientTestimonials.css';

const testimonials = [
    {
        review: "The doctor explained my knee problem in detail and guided me through the treatment options. Very satisfied with the consultation.",
        name: "Patient Review"
    },
    {
        review: "Consulted for persistent knee pain. Dr. Patle took time to explain the condition and the available options clearly. Felt heard throughout.",
        name: "Meena Tiwari"
    },
    {
        review: "The consultation was very helpful. The doctor listened patiently, explained everything clearly and suggested the right treatment.",
        name: "Patient Review"
    },
    {
        review: "Good experience at the clinic. Having X-ray and other facilities available at the same place makes the treatment process convenient.",
        name: "Patient Review"
    },
    {
        review: "The doctor explained the problem and treatment process in simple language. The overall consultation experience was reassuring.",
        name: "Patient Review"
    }
];

function PatientTestimonials() {

    const [activeIndex, setActiveIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {

        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);

    }, [isPaused]);

    const activeReview = testimonials[activeIndex];

    return (
        <section className="testimonials-section">

            <div className="testimonials-heading">
                <span>PATIENT EXPERIENCES</span>
                <h2>What Our Patients Say</h2>
            </div>

            <div
                className="testimonial-slider"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >

                <div className="testimonial-card">

                    <div
                        className="testimonial-content"
                        key={activeIndex}
                    >

                        {/* QUOTE ICON */}

                        <div className="testimonial-quote-icon">
                            <svg
                                width="43"
                                height="43"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 21c3 0 7-4 7-9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6h5" />
                                <path d="M14 21c3 0 7-4 7-9V5a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v6h5" />
                            </svg>
                        </div>

                        {/* STARS */}

                        <div className="testimonial-stars">
                            ★ ★ ★ ★ ★
                        </div>

                        {/* REVIEW */}

                        <p className="testimonial-text">
                            “{activeReview.review}”
                        </p>

                        {/* AUTHOR */}

                        <h3 className="testimonial-author">
                            {activeReview.name}
                        </h3>

                    </div>

                </div>

            </div>

            {/* PAGINATION DOTS */}

            <div className="testimonial-dots">

                {testimonials.map((_, index) => (

                    <button
                        key={index}
                        className={`testimonial-dot ${
                            activeIndex === index ? 'active' : ''
                        }`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show review ${index + 1}`}
                    />

                ))}

            </div>

        </section>
    );
}

export default PatientTestimonials;