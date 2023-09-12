import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HomeContainer from "./components/HomeContainer"
import SchoolArea from "./components/SchoolArea"
import WelfareCulture from "./components/WelfareCulture"
import DigitalArea from "./components/DigitalArea"
import JobTraining from "./components/JobTraining"
import ContactForm from "./components/ContactForm"
import HelpUsGrow from "./components/HelpUsGrow"
import Footer from "./components/Footer"
import Whatsapp from "./components/Whatsapp"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#F8EBFF] flex flex-col font-['Raleway']">
        <Header/>
        <Whatsapp />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/area-escolar" element={<SchoolArea />} />
            <Route path="/cultura-bienestar" element={<WelfareCulture />} />
            <Route path="/area-digital" element={<DigitalArea />} />
            <Route path="/capacitacion-laboral" element={<JobTraining />} />
            <Route path="/informacion-de-contacto" element={<ContactForm />} />
            <Route path="/ayudanos-a-crecer" element={<HelpUsGrow />} />
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
export default App
