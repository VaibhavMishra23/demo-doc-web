import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutDoctor from './components/AboutDoctor'
import Appointment from './components/Appointment'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PatientTestimonials from './components/PatientTestimonials'
import Services from './components/Services'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import MainAbout from './components/MainAbout'
import FractureTrauma from './components/FractureTrauma'
import ContactPage from './components/ContactPage'
import BookAppointment from './components/BookAppointment'
import ServicesPage from './components/ServicesPage'
import DemoNotice from './components/DemoNotice'
import ScrollToTop from './components/ScrollToTop';

function Layer1() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
  <Route path="/" element={<>
    <Hero />
    <Stats/>
    <Services/>
    <AboutDoctor/>
    <PatientTestimonials/>
    <Appointment/>
  </>
  } />
  <Route path="/gallery" element={<Gallery/>} />
  <Route path="/faq" element={<FAQ/>} />
  <Route path="/aboutdoctor" element={
    <>
    <MainAbout/>
    <Stats/>
    <AboutDoctor/>
    </>
    } />
    <Route
    path="/services/fracture-trauma-care"
    element={<FractureTrauma />}/>
    <Route path="/contact" element={<ContactPage/>} />
    <Route path="/appointment" element={<BookAppointment/>} />
    <Route path="/services" element={<ServicesPage/>} />
    <Route path="/services/rheumatology-arthritis" element={<DemoNotice/>} />
    <Route path="/services/sports-medicine" element={<DemoNotice/>} />
    <Route path="/services/digital-xray" element={<DemoNotice/>} />
    <Route path="/services/physiotherapy-rehabilitation" element={<DemoNotice/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Layer1
