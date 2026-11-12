import { useState } from "react";
import "../css/Appointment.css";

const Appointment = () => {
    const [step, setStep] = useState(1);

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState("");

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");

    const [visitType, setVisitType] = useState("New Patient");
    const [concern, setConcern] = useState("");

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Generate next 8 days
    const dates = Array.from({ length: 8 }, (_, index) => {
        const date = new Date();

        date.setHours(12, 0, 0, 0);
        date.setDate(date.getDate() + index);

        return {
            date,
            day: date.toLocaleDateString("en-US", {
                weekday: "short",
            }),
            formattedDate: date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
            }),
            fullDate: date.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
            }),
            isSunday: date.getDay() === 0,
        };
    });

    // Local date for date picker
    const getTodayDate = () => {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    // Format selected date
    const formatSelectedDate = () => {
        if (!selectedDate) return "";

        return selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
        });
    };

    // Validate current step
    const validateStep = () => {
        let newErrors = {};

        if (step === 1) {
            if (!selectedDate) {
                newErrors.date = "Please select an appointment date.";
            }

            if (selectedDate?.getDay() === 0) {
                newErrors.date = "Clinic is closed on Sundays.";
            }

            if (!selectedSlot) {
                newErrors.slot = "Please select an OPD slot.";
            }
        }

        if (step === 2) {
            if (!name.trim()) {
                newErrors.name = "Please enter your full name.";
            }

            if (!/^[6-9]\d{9}$/.test(mobile)) {
                newErrors.mobile = "Enter a valid 10-digit mobile number.";
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Continue button
    const handleContinue = () => {
        if (validateStep()) {
            setErrors({});
            setStep(step + 1);
        }
    };

    // Back button
    const handleBack = () => {
        setErrors({});
        setStep(step - 1);
    };

    // Mobile number validation
    const handleMobileChange = (e) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 10);

        setMobile(value);
        setErrors((prev) => ({
            ...prev,
            mobile: "",
        }));
    };

    // Custom date selection
    const handleCustomDateChange = (e) => {
        const value = e.target.value;

        if (!value) return;

        const parsedDate = new Date(value + "T12:00:00");

        if (parsedDate.getDay() === 0) {
            setErrors({
                date: "Clinic is closed on Sundays. Please select another day.",
            });
            return;
        }

        setSelectedDate(parsedDate);
        setErrors({});
    };

    // Submit appointment
    const handleSubmit = () => {
        if (!validateStep()) return;

        const appointmentData = {
            name,
            mobile: "+91" + mobile,
            date: formatSelectedDate(),
            slot: selectedSlot,
            visitType,
            concern,
        };

        console.log("Appointment Details:", appointmentData);

        setSubmitted(true);
    };

    // Reset form
    const resetForm = () => {
        setStep(1);
        setSelectedDate(null);
        setSelectedSlot("Afternoon");
        setShowDatePicker(false);
        setName("");
        setMobile("");
        setVisitType("New Patient");
        setConcern("");
        setErrors({});
        setSubmitted(false);
    };

    return (
        <section className="appointment-section" id="appointment">

            {/* =================================
                HEADING
            ================================= */}

            <div className="appointment-heading">

                <span className="appointment-tag">
                    BOOK YOUR VISIT
                </span>

                <h2>Book Your Appointment</h2>

                <p>
                    Two minutes to fill in, and our team calls you back to
                    confirm your slot — usually the same day. Prefer talking?
                    The numbers are right there.
                </p>

            </div>


            <div className="appointment-container">

                {/* =================================
                    LEFT FORM
                ================================= */}

                <div className="appointment-form">

                    <div className="appointment-top-border"></div>


                    {!submitted ? (

                        <>

                            {/* =================================
                                PROGRESS STEPS
                            ================================= */}

                            <div className="appointment-progress">

                                <div className={`progress-step ${step >= 1 ? "active" : ""}`}>

                                    <div className="progress-line"></div>

                                    <span>1. WHEN</span>

                                </div>


                                <div className={`progress-step ${step >= 2 ? "active" : ""}`}>

                                    <div className="progress-line"></div>

                                    <span>2. WHO</span>

                                </div>


                                <div className={`progress-step ${step >= 3 ? "active" : ""}`}>

                                    <div className="progress-line"></div>

                                    <span>3. CONCERN</span>

                                </div>

                            </div>


                            {/* =================================
                                STEP 1 - DATE & OPD
                            ================================= */}

                            {step === 1 && (

                                <div className="appointment-step">

                                    <label className="form-label">
                                        PICK A DAY
                                    </label>


                                    {/* QUICK DATE GRID */}

                                    <div className="date-grid">

                                        {dates.map((item, index) => {

                                            const isSelected =
                                                selectedDate &&
                                                selectedDate.toDateString() ===
                                                item.date.toDateString();

                                            return (

                                                <button
                                                    type="button"
                                                    key={index}
                                                    disabled={item.isSunday}
                                                    className={`date-card ${
                                                        isSelected ? "selected" : ""
                                                    } ${
                                                        item.isSunday ? "closed" : ""
                                                    }`}
                                                    onClick={() => {
                                                        setSelectedDate(item.date);
                                                        setErrors({});
                                                        setShowDatePicker(false);
                                                    }}
                                                >

                                                    <strong>
                                                        {index === 0
                                                            ? "Today"
                                                            : index === 1
                                                                ? "Tomorrow"
                                                                : item.day}
                                                    </strong>

                                                    <span>
                                                        {item.isSunday
                                                            ? "Closed"
                                                            : item.formattedDate}
                                                    </span>

                                                </button>

                                            );

                                        })}

                                    </div>


                                    {/* DATE ERROR */}

                                    {errors.date && (

                                        <p className="form-error">
                                            {errors.date}
                                        </p>

                                    )}


                                    {/* =================================
                                        CUSTOM DATE PICKER
                                    ================================= */}

                                    {!showDatePicker ? (

                                        <button
                                            type="button"
                                            className="later-date"
                                            onClick={() => {
                                                setShowDatePicker(true);
                                                setErrors({});
                                            }}
                                        >
                                            Need a later date?
                                        </button>

                                    ) : (

                                        <div className="custom-date-section">

                                            <button
                                                type="button"
                                                className="back-to-dates"
                                                onClick={() => {
                                                    setShowDatePicker(false);
                                                    setErrors({});
                                                }}
                                            >
                                                ← Back to quick dates
                                            </button>


                                            <input
                                                type="date"
                                                className="custom-date-input"
                                                min={getTodayDate()}
                                                value={
                                                    selectedDate
                                                        ? [
                                                            selectedDate.getFullYear(),
                                                            String(
                                                                selectedDate.getMonth() + 1
                                                            ).padStart(2, "0"),
                                                            String(
                                                                selectedDate.getDate()
                                                            ).padStart(2, "0"),
                                                        ].join("-")
                                                        : ""
                                                }
                                                onChange={handleCustomDateChange}
                                            />

                                        </div>

                                    )}


                                    {/* =================================
                                        OPD SLOT
                                    ================================= */}

                                    <label className="form-label slot-label">
                                        PICK AN OPD SLOT
                                    </label>


                                    <div className="slot-grid">

                                        {/* AFTERNOON */}

                                        <button
                                            type="button"
                                            className={`slot-card ${
                                                selectedSlot === "Afternoon"
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                setSelectedSlot("Afternoon");
                                                setErrors({});
                                            }}
                                        >

                                            <div className="slot-icon">
                                                ☀
                                            </div>


                                            <div className="slot-info">

                                                <strong>
                                                    Afternoon OPD
                                                </strong>

                                                <span>
                                                    12:00 Noon - 4:00 PM
                                                </span>

                                            </div>


                                            {selectedSlot === "Afternoon" && (

                                                <span className="slot-check">
                                                    ✓
                                                </span>

                                            )}

                                        </button>


                                        {/* EVENING */}

                                        <button
                                            type="button"
                                            className={`slot-card ${
                                                selectedSlot === "Evening"
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                setSelectedSlot("Evening");
                                                setErrors({});
                                            }}
                                        >

                                            <div className="slot-icon">
                                                ☾
                                            </div>


                                            <div className="slot-info">

                                                <strong>
                                                    Evening OPD
                                                </strong>

                                                <span>
                                                    6:00 PM - 9:00 PM
                                                </span>

                                            </div>


                                            {selectedSlot === "Evening" && (

                                                <span className="slot-check">
                                                    ✓
                                                </span>

                                            )}

                                        </button>

                                    </div>


                                    {errors.slot && (

                                        <p className="form-error">
                                            {errors.slot}
                                        </p>

                                    )}


                                    {/* CONTINUE */}

                                    <div className="form-navigation next-only">

                                        <button
                                            type="button"
                                            className="continue-btn"
                                            onClick={handleContinue}
                                        >
                                            Continue <span>›</span>
                                        </button>

                                    </div>

                                </div>

                            )}


                            {/* =================================
                                STEP 2 - PATIENT DETAILS
                            ================================= */}

                            {step === 2 && (

                                <div className="appointment-step">


                                    {/* FULL NAME */}

                                    <div className="input-group">

                                        <label className="form-label">
                                            FULL NAME
                                        </label>


                                        <div className="input-wrapper">

                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);

                                                    setErrors((prev) => ({
                                                        ...prev,
                                                        name: "",
                                                    }));
                                                }}
                                            />


                                            {name.trim().length > 1 && (

                                                <span className="valid-icon">
                                                    ✓
                                                </span>

                                            )}

                                        </div>


                                        {errors.name && (

                                            <p className="form-error">
                                                {errors.name}
                                            </p>

                                        )}

                                    </div>


                                    {/* MOBILE NUMBER */}

                                    <div className="input-group">

                                        <label className="form-label">
                                            MOBILE NUMBER
                                        </label>


                                        <div className="mobile-input">

                                            <span className="country-code">
                                                +91
                                            </span>


                                            <input
                                                type="tel"
                                                placeholder="Enter 10-digit mobile number"
                                                value={mobile}
                                                onChange={handleMobileChange}
                                            />


                                            {mobile.length === 10 && (

                                                <span className="valid-icon">
                                                    ✓
                                                </span>

                                            )}

                                        </div>


                                        {errors.mobile && (

                                            <p className="form-error">
                                                {errors.mobile}
                                            </p>

                                        )}


                                        <p className="input-hint">
                                            The clinic calls this number to confirm your slot.
                                        </p>

                                    </div>


                                    {/* NAVIGATION */}

                                    <div className="form-navigation">

                                        <button
                                            type="button"
                                            className="back-btn"
                                            onClick={handleBack}
                                        >
                                            ‹ <span>Back</span>
                                        </button>


                                        <button
                                            type="button"
                                            className="continue-btn"
                                            onClick={handleContinue}
                                        >
                                            Continue <span>›</span>
                                        </button>

                                    </div>

                                </div>

                            )}


                            {/* =================================
                                STEP 3 - CONCERN
                            ================================= */}

                            {step === 3 && (

                                <div className="appointment-step">


                                    {/* VISIT TYPE */}

                                    <div className="input-group">

                                        <label className="form-label">
                                            VISIT TYPE
                                        </label>


                                        <div className="visit-type">

                                            <button
                                                type="button"
                                                className={
                                                    visitType === "New Patient"
                                                        ? "selected"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setVisitType("New Patient")
                                                }
                                            >
                                                New Patient
                                            </button>


                                            <button
                                                type="button"
                                                className={
                                                    visitType === "Follow-up"
                                                        ? "selected"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setVisitType("Follow-up")
                                                }
                                            >
                                                Follow-up
                                            </button>

                                        </div>

                                    </div>


                                    {/* CONCERN */}

                                    <div className="input-group concern-group">

                                        <label className="form-label">
                                            BRIEFLY DESCRIBE YOUR CONCERN
                                        </label>


                                        <textarea
                                            placeholder="e.g. Knee pain for the past 2 weeks, difficulty walking"
                                            value={concern}
                                            onChange={(e) =>
                                                setConcern(e.target.value)
                                            }
                                        />

                                    </div>


                                    {/* APPOINTMENT SUMMARY */}

                                    <div className="appointment-summary">

                                        <strong>
                                            {formatSelectedDate()}
                                        </strong>

                                        <span>
                                            {" "}· {selectedSlot} OPD · {visitType}
                                        </span>

                                    </div>


                                    {/* NAVIGATION */}

                                    <div className="form-navigation">

                                        <button
                                            type="button"
                                            className="back-btn"
                                            onClick={handleBack}
                                        >
                                            ‹ <span>Back</span>
                                        </button>


                                        <button
                                            type="button"
                                            className="continue-btn request-btn"
                                            onClick={handleSubmit}
                                        >

                                            <span className="send-icon">
                                                ➤
                                            </span>

                                            Request Appointment

                                        </button>

                                    </div>

                                </div>

                            )}

                        </>

                    ) : (

                        /* =================================
                            SUCCESS SCREEN
                        ================================= */

                        <div className="appointment-success">

                            <div className="success-icon">
                                ✓
                            </div>


                            <h2>
                                Request Submitted!
                            </h2>


                            <p>
                                Thank you, {name}. Your appointment request
                                has been recorded.
                            </p>


                            <div className="success-details">

                                <p>
                                    <strong>Date:</strong> {formatSelectedDate()}
                                </p>

                                <p>
                                    <strong>OPD:</strong> {selectedSlot}
                                </p>

                                <p>
                                    <strong>Patient:</strong> {visitType}
                                </p>

                                <p>
                                    <strong>Mobile:</strong> +91 {mobile}
                                </p>

                                <p>
                                    <strong>Concern:</strong> {concern || "Not specified"}
                                </p>

                            </div>


                            <p className="success-note">
                                Our clinic team will contact you to confirm your slot.
                            </p>


                            <button
                                type="button"
                                className="continue-btn"
                                onClick={resetForm}
                            >
                                Book Another Appointment
                            </button>

                        </div>

                    )}

                </div>


                {/* =================================
                    RIGHT INFORMATION PANEL
                ================================= */}

                <aside className="appointment-info">


                    {/* OPD TIMINGS */}

                    <div className="info-block">

                        <h3>
                            OPD TIMINGS
                        </h3>


                        <div className="info-content">

                            <span className="info-icon">
                                ◷
                            </span>


                            <div>

                                <p>
                                    Afternoon: 12:00 Noon - 4:00 PM
                                </p>

                                <p>
                                    Evening: 6:00 PM - 9:00 PM
                                </p>

                                <small>
                                    Monday - Saturday · Sunday Closed
                                </small>

                            </div>

                        </div>

                    </div>


                    {/* CLINIC ADDRESS */}

                    <div className="info-block">

                        <h3>
                            CLINIC ADDRESS
                        </h3>


                        <div className="info-content">

                            <span className="info-icon">
                                ♧
                            </span>


                            <p>
                                Patle Health Care Center, Main Road,
                                Adhartal, Jabalpur, M.P. 482004
                            </p>

                        </div>

                    </div>


                    {/* CONTACT */}

                    <div className="info-block last-block">

                        <h3>
                            PREFER TO CALL?
                        </h3>


                        <a
                            href="tel:+910000000000"
                            className="phone-link"
                        >
                            <span className="info-icon">
                                ♧
                            </span>

                            00000 00000

                        </a>


                        <a
                            href="tel:+910000000000"
                            className="alternate-phone"
                        >
                            <span className="info-icon">
                                ♧
                            </span>

                            +91 00000 00000 (Alternate)

                        </a>

                    </div>

                </aside>

            </div>


            {/* =================================
                WHATSAPP FLOATING BUTTON
            ================================= */}

            <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="appointment-whatsapp"
                aria-label="Chat on WhatsApp"
            >

                <svg
                    viewBox="0 0 24 24"
                    width="27"
                    height="27"
                    fill="currentColor"
                >
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.16 1.6 5.97L.05 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.17-1.24-6.15-3.43-8.43ZM12.06 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.9-9.94 9.9Zm5.45-7.42c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.58-.09 1.77-.73 2.02-1.44.25-.72.25-1.32.17-1.45-.07-.12-.27-.2-.57-.35Z" />
                </svg>

            </a>

        </section>
    );
};

export default Appointment;