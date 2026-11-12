import "../css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-main-wrapper">

            {/* HERO SECTION */}
            <section className="privacy-hero-section">
                <div className="privacy-hero-content">
                    <span className="privacy-small-label">
                        YOUR PRIVACY MATTERS
                    </span>

                    <h1>Privacy Policy</h1>

                    <p>
                        Your trust is important to us. Learn how we collect,
                        use, and protect your personal information.
                    </p>

                    <span className="privacy-updated-date">
                        Last Updated: November 12, 2026
                    </span>
                </div>
            </section>

            {/* POLICY CONTENT */}
            <section className="privacy-content-section">
                <div className="privacy-content-container">

                    <div className="privacy-intro-box">
                        <h2>Your Privacy, Our Responsibility</h2>
                        <p>
                            Welcome to our website. We respect your privacy
                            and are committed to protecting the personal
                            information you share with us while using our
                            website and healthcare services.
                        </p>
                    </div>

                    <div className="privacy-policy-block">
                        <h3>01. Information We Collect</h3>
                        <p>
                            We may collect certain personal information when
                            you interact with our website or submit an
                            appointment request.
                        </p>
                        <ul>
                            <li>Name and contact details.</li>
                            <li>Email address and phone number.</li>
                            <li>Appointment-related information.</li>
                            <li>Any additional information you voluntarily provide.</li>
                        </ul>
                    </div>

                    <div className="privacy-policy-block">
                        <h3>02. How We Use Your Information</h3>
                        <p>
                            The information collected may be used for the
                            following purposes:
                        </p>
                        <ul>
                            <li>To respond to your inquiries.</li>
                            <li>To manage appointment requests.</li>
                            <li>To communicate important updates.</li>
                            <li>To improve our website and user experience.</li>
                        </ul>
                    </div>

                    <div className="privacy-policy-block">
                        <h3>03. Protection of Your Information</h3>
                        <p>
                            We take reasonable measures to protect your
                            personal information against unauthorized access,
                            misuse, alteration, or disclosure.
                        </p>
                    </div>

                    <div className="privacy-policy-block">
                        <h3>04. Cookies and Website Data</h3>
                        <p>
                            Our website may use cookies or similar
                            technologies to improve website functionality,
                            understand visitor behavior, and enhance your
                            browsing experience.
                        </p>
                    </div>

                    <div className="privacy-policy-block">
                        <h3>05. Sharing of Information</h3>
                        <p>
                            We do not sell or rent your personal information
                            to third parties. Information may only be shared
                            when necessary to provide requested services,
                            comply with legal obligations, or protect our
                            legitimate interests.
                        </p>
                    </div>

                    <div className="privacy-policy-block">
                        <h3>06. Third-Party Links</h3>
                        <p>
                            Our website may contain links to external
                            websites. We are not responsible for the privacy
                            practices or content of those websites. We
                            encourage you to review their privacy policies.
                        </p>
                    </div>

                    <div className="privacy-policy-block">
                        <h3>07. Your Privacy Rights</h3>
                        <p>
                            You may contact us to request access to,
                            correction of, or deletion of your personal
                            information, subject to applicable laws and
                            requirements.
                        </p>
                    </div>

                    <div className="privacy-policy-block">
                        <h3>08. Changes to This Policy</h3>
                        <p>
                            We reserve the right to update this Privacy
                            Policy whenever necessary. Any changes will be
                            published on this page along with the revised
                            update date.
                        </p>
                    </div>

                    <div className="privacy-policy-block">
                        <h3>09. Contact Us</h3>
                        <p>
                            If you have any questions or concerns regarding
                            this Privacy Policy, please feel free to contact
                            us through our website or available contact
                            details.
                        </p>
                    </div>

                    {/* BOTTOM NOTE */}
                    <div className="privacy-bottom-note">
                        <h3>Your Trust Is Our Priority.</h3>
                        <p>
                            We are committed to maintaining transparency
                            and respecting your privacy at every step.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default PrivacyPolicy;