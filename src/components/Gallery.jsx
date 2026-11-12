import { Link } from "react-router-dom";
import "../css/Gallery.css";

import clinic_exterior from '../assets/clinic_exterior.webp';
import physio_therapy_room from '../assets/physio_therapy_room.webp';
import physio_treatment from '../assets/physio_treatment.webp';
import doctor from '../assets/doctor.webp';
import xray_room from '../assets/xray_room.webp';
import active_care from '../assets/active_care.webp';

const galleryImages = [
    {
        image: doctor,
        title: "Dr. Patle, at his desk",
        description:
            "The spine model behind him isn't just decoration — they get used in nearly every consultation to show you what's going on."
    },
    {
        image: active_care,
        title: "Physiotherapy — Exercise Area",
        description:
            "Parallel bars, quadriceps table, and shoulder pulleys — where knees and shoulders earn their strength back, one session at a time."
    },
    {
        image: physio_treatment,
        title: "Physiotherapy — Treatment Room",
        description:
            "Traction beds and electrotherapy units for pain-relief sessions, set up and supervised by the physiotherapy team."
    },
    {
        image: physio_therapy_room,
        title: "Therapy & Recovery Room",
        description:
            "Hand-exercise boards and therapy tables — the fine-motor side of rehabilitation, for wrists, hands, and fingers."
    },
    {
        image: clinic_exterior,
        title: "The Clinic on Main Road",
        description:
            "Right on Main Road, Adhartal — look for the glowing board, you can't miss it."
    },
    {
        image: xray_room,
        title: "Digital X-Ray Room",
        description:
            "X-ray is done here during the consultation itself."
    }
];

const Gallery = () => {

    return (
        <main className="gallery-page">

            {/* Gallery Header */}
            <section className="gallery-header">

                <div className="gallery-breadcrumb">

                    <Link to="/" className="gallery-breadcrumb-link">
                        Home
                    </Link>

                    <span>›</span>

                    <span>Gallery</span>

                </div>

                <h1>
                    Clinic <span>Gallery</span>
                </h1>

                <p>
                    Inside Patle Health Care Center — our facilities,
                    equipment, and the space where you'll be treated.
                </p>

                <div className="gallery-header-line"></div>

            </section>


            {/* Gallery Grid */}
            <section className="gallery-content">

                <div className="gallery-grid">

                    {galleryImages.map((item, index) => (

                        <article
                            className="gallery-card"
                            key={index}
                        >

                            <div className="gallery-image-wrapper">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                />

                            </div>

                            <div className="gallery-card-content">

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.description}
                                </p>

                            </div>

                        </article>

                    ))}

                </div>


                {/* Bottom Text */}
                <p className="gallery-bottom-text">
                    Every photo here is the real clinic — this is what
                    you'll find when you visit.
                </p>

            </section>

        </main>
    );
};

export default Gallery;