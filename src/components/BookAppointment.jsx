import "../css/BookAppointment.css";
import Appointment from "./Appointment";

const BookAppointment = () => {
    return (
        <>
        <div className="vm-appt-hero-wrapper">

            <section className="vm-appt-hero-section">

                <div className="vm-appt-hero-container">

                    {/* BREADCRUMB */}

                    <div className="vm-appt-hero-breadcrumb">

                        <a href="/demo-doc-web">Home</a>

                        <span className="vm-appt-hero-separator">
                            ›
                        </span>

                        <span className="vm-appt-hero-current">
                            Book Appointment
                        </span>

                    </div>


                    {/* MAIN HEADING */}

                    <h1 className="vm-appt-hero-title">
                        <span>Book</span> Your <span>Appointment</span>
                    </h1>


                    {/* DESCRIPTION */}

                    <p className="vm-appt-hero-description">
                        Fill the form below — our clinic will confirm
                        within 2 hours. Walk-ins also welcome during
                        OPD hours.
                    </p>

                </div>

            </section>

        </div>
        <Appointment/>
        </>
    );
};

export default BookAppointment;