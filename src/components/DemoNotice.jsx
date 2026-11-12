import "../css/DemoNotice.css";

const DemoNotice = () => {
    return (
        <section className="demo-notice-wrapper">

            <div className="demo-notice-card">

                <span className="demo-notice-badge">
                    PERSONAL PROJECT · DEMONSTRATION
                </span>

                <div className="demo-notice-icon">
                    ✦
                </div>

                <h1>
                    Built to Learn.<br />
                    Designed to <span>Demonstrate.</span>
                </h1>

                <div className="demo-notice-line"></div>

                <p className="demo-notice-description">
                    This website is a personal demonstration project created
                    to showcase my web development skills, creativity, and
                    understanding of modern website design.
                </p>

                <p className="demo-notice-description">
                    The original concept includes multiple healthcare services.
                    However, to keep this demonstration concise and focused,
                    only one service section has been developed as a sample
                    representation of the overall design and functionality.
                </p>

                <div className="demo-notice-quote">
                    <span>“</span>
                    Every project is an opportunity to learn something new,
                    improve existing skills, and turn ideas into reality.
                    <span>”</span>
                </div>

                <div className="demo-notice-footer">
                    <div>
                        <span className="demo-notice-dot"></span>
                        <p>Created for learning & skill demonstration</p>
                    </div>

                    <span className="demo-notice-year">
                        PERSONAL DEVELOPMENT PROJECT
                    </span>
                </div>

            </div>

        </section>
    );
};

export default DemoNotice;